import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  height: 300px;

  form {
    position: relative;
    background: #e6e6e0;
    margin: 0 auto;
    padding: 50px 50px;
    width: 500px;
    height: 290px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 10px 10px #5dbb44;
    font-size: 16px;
    > h1 {
      text-align: center;
    }
    input {
      margin-top: 40px;
      border: none;
      border-bottom: 2px solid #000;
      background: none;
      padding: 10px 0;
      font-size: 1rem;

      &:focus {
        background: #bdbdad;
      }
    }
  }
  @media (max-width: 720px) {
    form {
      width: 100vw;
      height: 170px;
      border-radius: 0;
      box-shadow: none;
      border: 1px solid rgba(32, 87, 05, 0.5);

      > h1 {
        text-align: center;
        font-size: 20px;
        margin-top: -15px;
      }

      input {
        padding: 5px 0;
        margin: 2px 0;
      }
      button {
        width: 80%;
        padding: 10px 0;
      }
    }
  }
`;
export const ButtonX = styled.button`
  position: absolute;
  top: 10px;
  left: 430px;
  background: none;
  border: none;
  > img {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 720px) {
    top: 5px;
    left: 175px;
  }
`;
export const Button = styled.button`
  width: 40%;
  margin: 20px auto;
  padding: 15px 0;
  background: #338a08;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 16px;
  transition: background 1s;
  transition: color 0.5s;

  &:hover {
    background: #205705;
    color: #c9c9c9;
  }
`;
