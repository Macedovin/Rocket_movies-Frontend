import { Container, Stars } from './styles';

import { FiStar } from 'react-icons/fi';

import { FiStarFull } from '../FiStarFull';

export function Rating({ data, ...rest }) {
  const stars = [...Array(5)];
  
  return (
    <Container {...rest}>

      <h1>
        {data.title}
      </h1>

      <Stars>

        {stars.map((star, index) => {     
            const ratingValue = index + 1;

            return(

              <label 
                key={ratingValue}
              >
                <input  
                  type="radio" 
                  name="rating" 
                  value={ratingValue}
                  
                  />
                  {data.score < ratingValue ? <FiStar /> : <FiStarFull /> }
              </label>

              
            )
          })
        }
      </Stars>

    </Container>
  );

}