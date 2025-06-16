import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Acordeon(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">LA DIABLADA</AccordionHeader>
          <AccordionBody accordionId="1">
            La diablada boliviana es una danza ancestral que forma parte del Carnaval de Oruro y representa la lucha entre el bien y el mal. Es una de las manifestaciones folclóricas más emblemáticas de Bolivia, especialmente en Oruro.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">MORENADA</AccordionHeader>
          <AccordionBody accordionId="2">
            La morenada es una danza tradicional de Bolivia, que se caracteriza por su ritmo lento, trajes coloridos y máscaras con rasgos exagerados. Se interpreta en el altiplano boliviano y peruano, especialmente durante fiestas como el Carnaval de Oruro y la Fiesta del Gran Poder en La Paz.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">TINKU</AccordionHeader>
          <AccordionBody accordionId="3">
            El Tinku es un ritual y danza folklórica boliviana, especialmente practicada en el norte de Potosí y sur de Oruro. La palabra "Tinku", de origen quechua, significa "encuentro". El Tinku tradicionalmente involucra un combate ritual entre diferentes comunidades, a menudo con el uso de piedras, látigos y otros objetos. 
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">PUJLLAY</AccordionHeader>
          <AccordionBody accordionId="4">
            El Pujllay en Bolivia es una danza tradicional originaria de la cultura Yampara, celebrada principalmente en el pueblo de Tarabuco, en el departamento de Chuquisaca. Es una festividad que conmemora la victoria de los tarabuqueños en la batalla de Jumbate, la liberación de la región del dominio español.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">CHOVENA</AccordionHeader>
          <AccordionBody accordionId="5">
            La chovena boliviana, o chobena, es una danza folclórica típica de la zona chiquitana del oriente boliviano, especialmente durante las fiestas de carnaval. Es una danza cadenciosa y alegre, que se baila al ritmo de un género musical autóctono, con influencia de la cultura guaraní y raíces precolombinas. 
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Acordeon;