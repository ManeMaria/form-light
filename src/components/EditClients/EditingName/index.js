import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Container, Button, ButtonX } from '../styles';
import iconsX from '../../../assests/image/icons/iconsX.png';

export default function EditingName({ id }) {
  /* contactt, initialValuesContact, emaill, initialValuesContact */
  /* / idee, initialValuesId, namee, initialValuesName, addresss, initialValuesAddress, */

  const [initialValues, setInitialValues] = useState({
    name: '',
  });

  function hide() {
    const element = document.querySelector('.name');
    element.classList.toggle('hide');
  }
  function clearForm() {
    document.querySelectorAll('input').forEach((input) => {
      input.value = '';
    });
  }
  function reload() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
  const edit = async (event) => {
    try {
      event.preventDefault();
      const upDateData = { name: initialValues.name };
      await api.patch(`/clients/${id.id}`, upDateData).then((res) => {
        if (res.statusText === 'OK') {
          if (res.data.name === '') {
            toast.error('campo vazio');
            return;
          }
          toast.success('dados alterados com sucesso');
          clearForm();
          hide();
          reload();
        }
      });
    } catch (err) {
      toast.error(`${err}`);
      console.log(err);
    }
  };
  /**  */
  const onChangeForm = (e) => {
    setInitialValues({ name: e.target.value });
  };

  return (
    <Container>
      <form onSubmit={edit}>
        <span className="name">
          <ButtonX type="button" onClick={hide}>
            <img src={iconsX} title="fechar" alt="fechar" />
          </ButtonX>
        </span>
        <h1>change name</h1>
        <input
          name="name"
          type="text"
          value={initialValues.name}
          onChange={onChangeForm}
        />
        <Button type="submit">submeter</Button>
      </form>
    </Container>
  );
}
