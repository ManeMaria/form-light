import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import api from '../../services/api';
import {
  Container,
  EditTable,
  TableData,
  InvisibleComponentName,
  InvisibleComponentAddress,
  InvisibleComponentContact,
  InvisibleComponentEmail,
  Content,
  Loading,
} from './styles';
import EditingName from '../../components/EditClients/EditingName/index';
import EditingContact from '../../components/EditClients/EditingContact/index';
import EditingEmail from '../../components/EditClients/EditingEmail/index';
import EditingAddress from '../../components/EditClients/EditingAddress/index';
import icomTrashCan from '../../assests/image/icons/trash-can.png';
import Header from '../../components/Header';

function CustomerInfo() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState({
    id: '',
  }); // id, name, address, contact, email
  function deleteClient(e) {
    try {
      api.delete(`clients/${e}`);
      const identification = datas.filter((client) => client.id !== e);
      // o filter pecorrer o datas e retorna, em array, os dados que passaram no teste
      setData(identification);
      toast.success('cliente excluído com sucesso');
      console.log(identification.status);
    } catch (err) {
      toast.error(`error: ${err}`);
    }
  }
  function edit(idD) {
    setId({
      id: idD,
    });
  }
  function showName(idForName) {
    /* como todas as outras funções com o prefixo "show", a função irá receber
     o id do input, enviar para o componente correspondente ao nome do id. */
    const element = document.querySelector('.name');
    element.classList.toggle('hide');
    edit(idForName);
  }
  function showAddress(idForAddress) {
    const element = document.querySelector('.address');
    element.classList.toggle('hide');
    edit(idForAddress);
  }
  function showContact(idForContact) {
    const element = document.querySelector('.contact');
    element.classList.toggle('hide');
    edit(idForContact);
  }
  function showemail(idForEmail) {
    const element = document.querySelector('.email');
    element.classList.toggle('hide');
    edit(idForEmail);
  }

  /** function connectLoad() {
    setLoading(true);
  } */
  useEffect(() => {
    async function getList() {
      setLoading(true);
      const getListed = await api.get('/clients').then(({ data }) => data);
      setData(...datas, getListed);
      setLoading(false);
    }

    getList();
  }, []);
  return (
    <Container>
      <Content>
        <Header />
        <h2>adicionar cliente</h2>

        {loading ? (
          <Loading>
            <ReactLoading
              type="balls"
              width="64px"
              height="64px"
              color="#000"
            />
          </Loading>
        ) : (
          <table>
            <thead>
              <tr>
                <td>
                  <strong>NOME</strong>
                </td>
                <td>
                  <strong>ENDEREÇO</strong>
                </td>

                <td>
                  <strong>NÚMERO</strong>
                </td>
                <td>
                  <strong>EMAIL</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {datas.map((client) => (
                <tr key={client.id}>
                  <TableData title="click to edit">
                    <button type="button" onClick={() => showName(client.id)}>
                      {client.name}
                    </button>
                  </TableData>
                  <TableData title="click to edit">
                    <button
                      type="button"
                      onClick={() => showAddress(client.id)}
                    >
                      {' '}
                      {client.address}
                    </button>
                  </TableData>
                  <TableData title="click to edit">
                    <button
                      type="button"
                      onClick={() => showContact(client.id)}
                    >
                      {client.contact}
                    </button>
                  </TableData>
                  <TableData title="click to edit">
                    <button type="button" onClick={() => showemail(client.id)}>
                      {client.email}
                    </button>
                  </TableData>
                  <EditTable>
                    <button
                      type="button"
                      onClick={() => deleteClient(client.id)}
                    >
                      <img
                        src={icomTrashCan}
                        alt="deletar usuário"
                        title="deletar usuário"
                      />
                    </button>
                  </EditTable>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <InvisibleComponentName>
          <div className="name hide">
            <EditingName id={id} />
          </div>
        </InvisibleComponentName>
        <InvisibleComponentAddress>
          <div className="address hide">
            <EditingAddress id={id} />
          </div>
        </InvisibleComponentAddress>
        <InvisibleComponentContact>
          <div className="contact hide">
            <EditingContact id={id} />
          </div>
        </InvisibleComponentContact>
        <InvisibleComponentEmail>
          <div className="email hide">
            <EditingEmail id={id} />
          </div>
        </InvisibleComponentEmail>
      </Content>
    </Container>
  );
}

export default CustomerInfo;
