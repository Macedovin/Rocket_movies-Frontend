import { Container, Ellipsis } from './styles';

import { Rating } from '../Rating';
import { Tag } from '../Tag';

import { Link } from 'react-router-dom';

export function MovieCard({ data, title, score, ...rest }) {
  return(
    <Link to="/movie_details/1">
    
      <Container {...rest}>

        <Rating data={
            {title, score}
          } /> 

        <Ellipsis>
          <p>
            {data.description}
          </p>
        </Ellipsis>

        {data.tags && 
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name} /> )
            }   
          </footer>
        }

      </Container>
    
    </Link>
  );
}