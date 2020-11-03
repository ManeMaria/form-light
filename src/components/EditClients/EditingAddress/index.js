import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Container, Button, ButtonX } from '../styles';
import iconsX from '../../../assests/image/icons/iconsX.png';

export default function EditingAddress({ id }) {
  const [initialValues, setInitialValues] = useState({
    address: '',
  });

  function ocultar() {
    const element = document.querySelector('.address');
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
      const upDateData = initialValues.address;

      await api
        .patch(`/clients/${id.id}`, { address: upDateData })
        .then((res) => {
          if (res.data.address === '') {
            toast.error('campo vazio');
            return;
          }
          if (res.statusText === 'OK') {
            toast.success('dados alterados com sucesso');
            clearForm();
            ocultar();
          }
        });
    } catch (err) {
      toast.error(`${err}`);
      console.log(err);
    }
  };

  return (
    <Container>
      <form onSubmit={edit}>
        <span className="address">
          <ButtonX type="button" onClick={ocultar}>
            <img src={iconsX} title="fechar" alt="fechar" />
          </ButtonX>
        </span>
        <h1>change address</h1>
        <input
          name="address"
          type="text"
          value={initialValues.address}
          onChange={(e) => setInitialValues({ address: e.target.value })}
        />
        <Button type="submit">submeter</Button>
      </form>
    </Container>
  );
}
