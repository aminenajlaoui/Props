import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
function Adresse(){
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        My Adresse
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <h1 className="adress">City Ezzouhour,Rue chahid mohamed Khadhraoui,Essaloum,Kasserine 1200</h1>
        </div>
      </Collapse>
    </>
  );
}
export default Adresse