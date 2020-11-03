import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Container, Button, ButtonX } from '../styles';
import iconsX from '../../../assests/image/icons/iconsX.png';

export default function EditingEmail({ id }) {
  const [initialValues, setInitialValues] = useState({
    email: '',
  });

  function hide() {
    const element = document.querySelector('.email');
    element.classList.toggle('hide');
  }
  function clearForm() {
    document.querySelectorAll('input').forEach((input) => {
      input.value = '';
    });
  }

  const edit = async (event) => {
    try {
      event.preventDefault();
      const upDateData = initialValues.email;
      await api
        .patch(`/clients/${id.id}`, { email: upDateData })
        .then((res) => {
          if (res.statusText === 'OK') {
            if (res.data.email === '') {
              toast.error('campo vazio');
              return;
            }
            toast.success('dados alterados com sucesso');
            clearForm();
            hide();
          }
        });
    } catch (err) {
      toast.error(`${err}`);
      console.log(err);
    }
  };
  /**  */
  const onChangeForm = (e) => {
    setInitialValues({ email: e.target.value });
  };

  return (
    <Container>
      <form onSubmit={edit}>
        <span className="email">
          <ButtonX type="button" onClick={hide}>
            <img src={iconsX} title="fechar" alt="fechar" />
          </ButtonX>
        </span>
        <h1>change email</h1>
        <input
          name="email"
          type="text"
          value={initialValues.email}
          onChange={(e) => onChangeForm(e)}
        />
        <Button type="submit">submeter</Button>
      </form>
    </Container>
  );
}
