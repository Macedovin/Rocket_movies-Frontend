import { Container, Form  } from './styles';

import { Link } from 'react-router-dom';

import { HiOutlineArrowLeft } from 'react-icons/hi'

import { Header } from '../../components/Header';

import { Input } from '../../components/Input';

import { Textarea } from '../../components/Textarea';

import { Section } from '../../components/Section';

import { MovieTag } from '../../components/MovieTag';

import { Button } from '../../components/Button';

export function CreateMovie() {
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
              />

              <Input 
                type="number"
                min="0"
                max="5"
                placeholder="Sua nota (de 0 a 5)"
              />
            </div>


            <Textarea 
              placeholder="Observações"
            />

            <Section title="Marcadores">
              <div className="newTags">
                <MovieTag value="React" />
                <MovieTag value="Parangarigotirrimirruaro 1, 2, 3, mais algo" />
                <MovieTag value="Parangarigotirrimirruaro 1, 2, 3, mais algo" />
                <MovieTag value="React" />
                <MovieTag 
                  placeholder="Novo marcador"  
                  isNew
                />
              </div>
            </Section>
            
            <div className="buttons">

              <Button 
                title="Excluir filme"
                isExclude 
              />
              <Button title="Salvar alterações" />
            </div>
          </Form>
      </main>

    </Container>
  );
}