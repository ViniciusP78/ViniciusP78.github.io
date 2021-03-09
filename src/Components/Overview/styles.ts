import styled from 'styled-components';

export const Container = styled.main`
  min-height: 800px;

  h1 {
    margin-bottom:1rem;
    font-family: Ubuntu;
    padding: 0.5rem 3rem;
  }

  p {
    line-height: 1.3rem;
    font-weight: 300;
  }

`;

export const Section = styled.section`
  background-color: white;
  box-shadow: 0 6px 8px rgb(85 102 119 / 3%), 0 1px 1px rgb(85 102 119 / 3%);
  border-radius: 2px;
  padding: 2rem 3rem;
  margin-bottom: 1rem;

  p {
    line-height: 1.3rem;
    font-weight: 300;
  }

`;

export const Cards = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;

  @media( max-width:600px ){
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;

export const Card = styled.section`
  background-color: white;
  box-shadow: 0 6px 8px rgb(85 102 119 / 3%), 0 1px 1px rgb(85 102 119 / 3%);
  align-self: flex-start;
`;

export const ProjectLogo = styled.header`
  background: linear-gradient(15deg, #556677, #5e7683);
  padding: 2rem 0rem;
  font-family: Ubuntu;
  font-size: 2rem;
  font-weight:500;
  color: white;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const Tags = styled.section`
  padding: 0.7rem 1rem;
  font-size:0.9rem;

  span {
    color:white;
    background: linear-gradient(15deg, #556677, #5e7683);
    padding:3px 6px;
    margin-right: 5px;
    border-radius: 2px;
    font-family: Ubuntu;
  }
`;

export const Info = styled.p`
  padding: 0rem 1rem;
`;

export const Links = styled.section`
  margin-top:1rem;
  border-top: solid 1px rgba(85,102,119,.18);

  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f8f9fa;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0.5rem;
  }

  a span {
    margin-left: 5px;
    color: #26648e;
    font-size: 0.9rem
  }
`;