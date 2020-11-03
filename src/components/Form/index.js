import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Container } from './styles';
import SignIn from '../../Pages/CustomerInfo/SignIn/index';
import api from '../../services/api';

import iconX from '../../assests/image/icons/iconsX.png';
import padlocock from '../../assests/image/icons/padlock.png';

function Form() {
  const { register, handleSubmit, errors } = useForm();

  function resetInput() {
    const inputAll = document.querySelectorAll('input').forEach((input) => {
      input.value = '';
    });
    return inputAll;
  }

  const upData = async ({
    name,
    userName,
    email,
    contact,
    address,
    password,
    passwordConfirm,
  }) => {
    if (password !== passwordConfirm) {
      toast.error('senhas não correspondentes');
    } else {
      try {
        const newData = {
          name,
          userName,
          email,
          contact,
          address,
          password,
        };
        // const newDataToJson = JSON.stringify(newData);
        await api.post('/clients', newData);
        // setData([newData]);
        resetInput();
        toast.success('dados enviados com sucesso!');
      } catch (err) {
        toast.error(`erro ao enviar os dados ${err}`);
      }
    }
  };
  // console.log(data);
  function visibleOn() {
    const elemtent = document.querySelector('.divDiv');
    elemtent.classList.toggle('hide');
  }

  return (
    <Container>
      <button type="button" onClick={() => visibleOn()}>
        restricted <img src={padlocock} alt="icone de um cadeado" />
      </button>

      <div className="divDiv hide">
        <button type="button" onClick={() => visibleOn()}>
          <img src={iconX} alt="button scape" />
        </button>
        <SignIn />
      </div>

      <form onSubmit={handleSubmit(upData)}>
        <span className="span1">Nome completo</span>
        <input
          type="text"
          name="name"
          ref={register({ required: 'preencha o nome' })}
          visible={errors.name ? 1 : 0}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <span>Nome de usuário</span>
        <input
          type="text"
          name="userName"
          ref={register({ required: 'preencha o nome de usuário' })}
        />
        {errors.userName && <p>{errors.userName.message}</p>}

        <span>E-mail</span>
        <input
          type="email"
          name="email"
          ref={register({ required: 'preencha o E-mail' })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <span>Contato</span>
        <input
          type="tel"
          name="contact"
          ref={register({ required: 'preencha o contato' })}
        />
        {errors.contact && <p>{errors.contact.message}</p>}

        <span>endereço</span>
        <input
          type="text"
          name="address"
          ref={register({ required: 'preencha o endereço' })}
        />
        {errors.address && <p>{errors.address.message}</p>}

        <span>Senha</span>
        <input
          type="text"
          name="password"
          ref={register({ required: 'preencha a senha' })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <span>Confirme sua senha</span>
        <input
          type="text"
          name="passwordConfirm"
          ref={register({ required: 'confirme a senha' })}
        />
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

        <button type="submit">ENVIAR</button>
      </form>
    </Container>
  );
}

export default Form;
