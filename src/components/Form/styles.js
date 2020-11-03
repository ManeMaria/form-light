import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  > button {
    border: none;
    background: none;
    font-weight: bold;
    margin-top: -35px;

    img {
      width: 12px;
      height: 12px;
    }
  }
  > .divDiv {
    position: absolute;
    margin-left: 10px;
    width: 300px;
    height: 150px;
    background: #e6e6e0;
    border-radius: 20px;
    box-shadow: 10px 10px #5dbb44;
    font-size: 16px;

    > button {
      /**este button pertencem ao login */
      position: absolute;
      left: 260px;
      top: 15px;
      border: none;
      background: none;
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
  div {
    height: 150px;
    width: 300px;
    overflow: hidden;
    transition: width 0.25s ease-in-out;
  }
  div.hide {
    width: 0;
  }

  > form {
    background: #e6e6e0;
    margin: 50px auto;
    padding: 30px 50px;
    width: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 10px 10px #5dbb44;
    font-size: 16px;

    span {
      margin: 10px 0;
      font-weight: 600;
    }

    input {
      border: none;
      border-bottom: 2px solid #000;
      background: none;
      padding: 10px 0;
      font-size: 1rem;

      &:focus {
        background: #bdbdad;
      }
    }

    button {
      width: 40%;
      margin: 20px auto;
      padding: 15px 0;
      background: linear-gradient(90deg, #338a08, #42b309);
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
    }
    p {
      background: #b41b1b;
      font-weight: bold;
    }
  }

  @media (max-width: 720px) {
    > button {
      border: none;
      background: none;
      font-weight: bold;
      margin-top: 25px;

      img {
        width: 15px;
        height: 15px;
      }
    }

    > form {
      width: 100vw;
      border-top: 1px solid #205705;
      border-bottom: 1px solid #205705;
      border-radius: 0;
      box-shadow: none;

      > input {
        font-weight: bold;
        font-size: 16px;
      }

      > button {
        width: 60vw;
      }
    }

    .divDiv {
      width: 300px;
      height: 170px;
      border-radius: 0;
      box-shadow: none;
      border: 1px solid rgba(32, 87, 05, 0.5);
    }
    div.hide {
      width: 0;
      border: none;
    }
  }
`;
