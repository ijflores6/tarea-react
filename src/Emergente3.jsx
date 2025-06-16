import "./estilo.css"
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Emergente3(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="modal3">
      <Button color="danger" onClick={toggle}>
        COMPRAR
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>¿COMPRAR CURSO?</ModalHeader>
        <ModalBody>
          Bs 900
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            COMPRAR
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            CANCELAR
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Emergente3;