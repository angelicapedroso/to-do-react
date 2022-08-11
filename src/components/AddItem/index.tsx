import React from 'react';
import { PlusCircle } from 'phosphor-react';
import Container from './styles';

export default function AddItem(): React.FunctionComponentElement<{}> {
  return (
    <Container>
      <PlusCircle size={32} className="add-icon" />
      <input
        type="text"
        placeholder="Adicione uma tarefa"
      />
    </Container>
  );
}
