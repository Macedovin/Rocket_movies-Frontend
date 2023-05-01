import { Container, Form  } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { MovieTag } from '../../components/MovieTag';
import { Button } from '../../components/Button';

import { HiOutlineArrowLeft } from 'react-icons/hi';

import { Link, useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { useState, useEffect } from 'react'; 

import { useDebounce } from '../../hooks/debounce';

export function CreateMovie() {

  const [search, setSearch] = useState("");

  const [title, setTitle] = useState("");
  const [score, setScore] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [data, setData] = useState({});

  const { useDb } = useDebounce();

  const debounceChange = useDb(handleSearchChange, 500);
  
  const navigate = useNavigate();

  const movieToUpdateParams = useParams();

  console.log("34 -> ", search.length, typeof search, data, tags, "/", data.tags);

  function reset() {
  
    console.log("Estou vazio -> ", search);

    setTitle("");
    setScore("");
    setDescription("");
    setTags([]);

    setData({});

    return 
  }

  function handleSearchChange(e) {

    setSearch(e.target.value);
    debounceChange(e.target.value);

    if (e.target.value.trim().length > 0) {
      
      console.log('⛔️ Input is not empty');
      
    } else {

      console.log('✅ Input is empty');

      setSearch("");
      
      return reset(); 
    }
  } 

  function handleAddTag() {
    
    const tagAlreadyAdded = tags.includes(newTag);

    if(tagAlreadyAdded) {
      return alert("A tag digitada já foi adicionada para este filme!");
    }

    if (newTag !== "") {

      setTags(prevState => [...prevState, newTag.trim()]);

      setNewTag("");
    }

    if(newTag === "") {
      return alert("Você não escreveu nada.")
    }

  };    

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleDiscardInformation() {

    console.log("Exclusão -> ", data, data.length, "X", Object.keys(data).length);

    const dataIsEmpty = Object.keys(data).length === 0;
    
    if(dataIsEmpty) {

      console.log("Entrei nos novos dados");
  
      const userConfirmInputsExclusion = window.confirm("Ao prosseguir os dados inseridos serão perdidos com todos os campos sendo apagados. Deseja continuar?");
  
      if(userConfirmInputsExclusion) {

        setTitle("");
        setScore("");
        setDescription("");
        setTags([]);
        setNewTag("");
  
      } 
      
      return
    }

    console.log("Condicional de dados");

    const userConfirmDataDelete = window.confirm("Você deseja excluir definitivamente o filme apresentado em tela?");

    if(userConfirmDataDelete) {
      await api.delete(`/movie_notes/${data.id}`);

      alert("Filme excluído com sucesso!");

      reset();

      /*setTitle("");
      setScore("");
      setDescription("");
      setTags([]);

      setData({}); */

    } else {

      return
    
    }  

  }

/*   async function handleDeleteMovie() {

    console.log(data);

    if (data) {
      const userConfirmDelete = window.confirm("Você deseja excluir definitivamente o filme apresentado em tela?");

      if(userConfirmDelete) {
        await api.delete(`/movie_notes/${data.id}`);

        
      }
    }
  } */

  async function handleNewMovie() {
    
    console.log("Atualização -> ", data, data.id);
    
    const dataIsNotEmpty = Object.keys(data).length !== 0;

    if(dataIsNotEmpty) {

      movieToUpdateParams.id = data.id;

      const tagsCompare = data.tags.map(tag => tag.name);

      const compareArrays = (tagsCompare, tags) =>
        tagsCompare.length === tags.length &&
        tagsCompare.every((element, index) => element === tags[index]);
      
      console.log("Estou no Banco de Dados...", movieToUpdateParams, data.title, "->", title, data.score, "->", score, data.description, "->", description, data.tags, "/", tagsCompare , "->", tags, compareArrays(tagsCompare, tags));

      console.log("Estou comparando:", data.title === title, data.score === score, data.description === description, compareArrays === true);

      if (data.title === title && data.score === score && data.description === description && compareArrays) {
        return alert("Ao menos uma das informações deve ser diferente para que o filme seja atualizado.");
      } 
      
      setTitle(title);
      setScore(score);
      setDescription(description);
      setTags(tags);

      setData({ title, score, description, tags });

      const updatedMovieInfos = {
        new_title: title,
        new_description: description,
        new_score: Number(score),
        new_tags: tags,
      }

      console.log("188 ->", title, score, description, tags, data, updatedMovieInfos, movieToUpdateParams.id); 

      try {
        
        const updateResponse = api.put(`movie_notes/${movieToUpdateParams.id}`, updatedMovieInfos);

        alert("Filme atualizado com sucesso");

        /* navigate("/"); */
        
      } catch (error) {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          return alert("Não foi possível atualizar os dados do filme.");
        }
      }
      return;
    } 

    if(!title) {
      return alert("Digite o título do filme.");
    }

    if(newTag) {
      alert("Você deixou um marcador no campo para a adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio.")
    }
    
    const userConfirmSave = window.confirm(`
    Este filme esta sendo cadastrado!

    Você pode confirmar o cadastro, clicando em "OK", ou continuar editando os dados, ao cancelar!`
    );
    
    if (userConfirmSave) {

      try {

        const response = await api.post('/movie_notes', {
          title,
          score: Number(score), 
          description,
          tags,
        });

        alert("Filme cadastrado com sucesso!")

        navigate("/");

      } catch (error) {

        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar o filme.")
        }

      }
      
    } 
  }

  useEffect(() => {

    async function fetchMovies() {      
        
      console.log("202 ->", search, search.length);

      const searchResponse = await api.get(`/movie_notes?title=${search.trim()}`);

      if(searchResponse.data.length > 0 && search.trim().length > 0)  {

        const anotherMovie_id = searchResponse.data[0].id;
      
        const anotherMovie = await api.get(`/movie_notes/${anotherMovie_id}`);
          
        console.log("1º", search, anotherMovie.data, data);

        setTitle(anotherMovie.data.title);
        setScore(anotherMovie.data.score);
        setDescription(anotherMovie.data.description);
        
        anotherMovie.data.tags ? setTags(anotherMovie.data.tags.map(tag => tag.name)) : setTags(tags);
        
        setData(anotherMovie.data);
        
        /*         return () => {
          console.log("Estou abortando...");

          abortController.abort();
        } */

        /* if(data.tags) {
          
          setTags(data.tags.map(tag => tag.name));
          
          console.log(tags);
        } */
        
      } 

    }    
    
    fetchMovies();


  },[search]);

  return (
    <Container>
      <Header 
        onChange={handleSearchChange}
        value={search}
      />

      <main>
        
        <Link to="/">
          <HiOutlineArrowLeft />
          Voltar
        </Link>
        
        <Form>

            <h1>
              Novo filme
            </h1>

            <div className="inputs">

              <Input 
                type="text"
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
                value={title}
              />

              <Input 
                type="number"
                min="0"
                max="5"
                placeholder="Sua nota (de 0 a 5)"
                onChange={e => setScore(e.target.value)}
                value={score}
              />
            </div>

            <Textarea 
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
              value={description}
            />

            <Section title="Marcadores">
              <div className="newTags">

                {
                  tags && tags.map((tag, index) => (
                      <MovieTag
                      key={String(index)}
                      value={tag}
                      onClick={() => { handleRemoveTag(tag)}}
                    />
                  ))
                }

{/*                 {             
                  tags && tags.map((tag, index) => (
                      <MovieTag
                      key={String(index)}
                      value={tag.name}
                      onClick={() => { handleRemoveTag(tag)}}
                    />
                  ))
                } */}


                <MovieTag
                  isNew
                  placeholder="Novo marcador"  
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)} 
                  onClick={handleAddTag}
                />
              </div>
            </Section>
            
            <div className="buttons">

              <Button 
                isExclude 
                title="Excluir filme"
                onClick={handleDiscardInformation}
              />
              <Button 
                title="Salvar alterações" 
                onClick={handleNewMovie} 
              />
            </div>
          </Form>
      </main>

    </Container>
  );
}