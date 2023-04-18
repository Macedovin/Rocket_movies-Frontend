import { Container, Form  } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { MovieTag } from '../../components/MovieTag';
import { Button } from '../../components/Button';

import { HiOutlineArrowLeft } from 'react-icons/hi';

import { Link, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { useState } from 'react'; 

export function CreateMovie() {

  const [title, setTitle] = useState("");
  const [score, setScore] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    
    const tagAlreadyAdded = tags.includes(newTag);

    if(tagAlreadyAdded) {
      return alert("A tag digitada já foi adicionada para este filme!");
    }

    if (newTag !== "") {

      setTags(prevState => [...prevState, newTag]);

      setNewTag("");
    }

  };    

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  function handleDiscardInformation() {

    const userConfirmExclusion = window.confirm("Ao prosseguir os dados inseridos serão perdidos. Deseja continuar?")

    if(userConfirmExclusion) {

      navigate("/")
    } 

  }

  async function handleNewMovie() {
 
    if(!title) {
      alert("Digite o título do filme.")
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
          score, 
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

  return (
    <Container>
      <Header />

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
              />

              <Input 
                type="number"
                min="0"
                max="5"
                placeholder="Sua nota (de 0 a 5)"
                onChange={e => setScore(Number(e.target.value))}
              />
            </div>


            <Textarea 
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />

            <Section title="Marcadores">
              <div className="newTags">
                {
                  tags.map((tag, index) => (
                    <MovieTag
                    key={String(index)}
                    value={tag}
                    onClick={() => { handleRemoveTag(tag)}}
                  />
                    ))
                  }

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