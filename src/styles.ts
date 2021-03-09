import styled from 'styled-components';

export const Container = styled.div`
  
  @media(min-width:600px) {
    display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 30px;
  }
  

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;

}
`;