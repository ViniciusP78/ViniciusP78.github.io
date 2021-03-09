import styled from 'styled-components';

export const Container = styled.main`
  background-color: white;
  box-shadow: 0 6px 8px rgb(85 102 119 / 3%), 0 1px 1px rgb(85 102 119 / 40%), 0 8px 12px rgb(58 193 203 / 10%);
  //box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
  border-radius: 2px;
  align-self: start;
  

  div:first-child {
    background: linear-gradient(15deg, #556677, #5e7683);
    display: flex;
    justify-content: center;
    align-items:center;
  }

  img {
    width:100%;
    
  }

  .profile {
    padding: 0.8rem 1.2rem;
    line-height: 1.2rem;
    /* background: linear-gradient(15deg, #556677, #5e7683);
    color: white; */
  }

  .profile strong {
    font-family: Ubuntu;
    font-size: 1.4rem;
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  
  .profile p {
    font-size: 1rem;
    font-weight: 300;
  }

  .links {
    border-top: solid 1px rgba(85,102,119,.18);
    padding: 0.8rem 1.2rem;
    line-height: 1.2rem;
    font-size: 1rem;
    font-weight: 300;
    background: #f8f9fa;
    display:flex;
    flex-direction: column;
    
  }

  .links a {
    display: flex;
    align-items: center;
    transition: all 0.2s;
  }

  .links a:hover {
    margin-left: 5px;
  }

  .links a:first-child {
    margin-bottom:0.5rem;
  }
  .links a span{
    margin-left: 0.5rem;
    color: #26648e;
  }

  @media (min-width:600px) {
    max-width:250px;
    margin-left:auto;
  }

  @media (max-width:600px) {
    display: grid;
    grid-template-columns: 4fr 8fr 2fr;

    .links{
      border: none;
    border-left: solid 1px rgba(85,102,119,.18);
    margin: 0;
    padding: 0;
    
    }
    .links a span {
      display: none
    }

    .links a:first-child {
      border-bottom: solid 1px rgba(85,102,119,.18);
      margin-bottom:0;
    }

    .links a {
      width:100%;
      height:100%;
      display:flex;
      align-items: center;
      text-align: center;
      font-size: 2rem
    }

    .links a svg {
      flex: 1
    }
    .links{
      align-items:center;
      justify-content: space-around;
    }
    

    margin-bottom:20px;
    align-items: stretch;
  }
  
`;