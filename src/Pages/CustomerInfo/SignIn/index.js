import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import history from '../../../services/history';
import eyeIcon from '../../../assests/image/icons/eye.png';

import { Container, Input, DivContent } from './styles';

function SinIgn() {
  const { register, handleSubmit, errors } = useForm();
  const [enterDown, setEnterDown] = useState(false);
  // contém true||false. altera o estado da props no css

  const In = ({ login, password }) => {
    const isThisLogin = login !== 'admin' || login === '' ? 'error' : 'ok';
    const isThisPassword =
      password !== 'admin' || password === '' ? 'error' : 'ok';

    if (isThisLogin !== 'ok' || isThisPassword !== 'ok') {
      toast.error('login ou senha inválido');
    }
    if (isThisLogin === 'ok' && isThisPassword === 'ok') {
      history.push('/customerinfo');
    }
  }; // verifica o login e a senha

  return (
    <Container>
      <form onSubmit={handleSubmit(In)}>
        <Input
          type="text"
          placeholder={errors.login ? 'sem login' : 'digite seu login'}
          name="login"
          ref={register({ required: 'login obrigatório' })}
          check={errors.login}
        />
        <DivContent>
          <img
            src={eyeIcon}
            title="visualizar senha"
            alt="imagem de uma olho"
            onMouseOver={() => setEnterDown(true)}
            onFocus={() => setEnterDown(true)}
            onMouseOut={() => setEnterDown(false)}
            onBlur={() => setEnterDown(false)}
          />

          <Input
            type={enterDown}
            placeholder={errors.password ? 'sem senha' : 'digite a senha'}
            name="password"
            ref={register({ required: 'preencha a senha' })}
            check={errors.password}
          />
        </DivContent>
        <button type="submit">acessar</button>
      </form>
    </Container>
  );
}

export default SinIgn;
