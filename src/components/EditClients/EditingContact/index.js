import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { Container, Button, ButtonX } from '../styles';
import iconsX from '../../../assests/image/icons/iconsX.png';

export default function EditingContact({ id }) {
  /* contactt, initialValuesContact, emaill, initialValuesContact */
  /* / idee, initialValuesId, namee, initialValuesName, addresss, initialValuesAddress, */

  const [initialValues, setInitialValues] = useState({
    contact: '',
  });

  function hide() {
    const element = document.querySelector('.contact');
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
      const upDateData = { contact: initialValues.contact };
      await api.patch(`/clients/${id.id}`, upDateData).then((res) => {
        if (res.data.contact === '') {
          toast.error('campo vazio');
          return;
        }
        if (res.statusText === 'OK') {
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
    setInitialValues({ contact: e.target.value });
  };

  return (
    <Container>
      <form onSubmit={edit}>
        <span className="contact">
          <ButtonX type="button" onClick={hide}>
            <img src={iconsX} title="fechar" alt="fechar" />
          </ButtonX>
        </span>
        <h1>change contact</h1>
        <input
          name="contact"
          type="text"
          value={initialValues.contact}
          onChange={onChangeForm}
        />
        <Button type="submit">submeter</Button>
      </form>
    </Container>
  );
}
