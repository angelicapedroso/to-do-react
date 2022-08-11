import React, { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import Container from './styles';

type Props = {
  handleAddItem: (item: string) => void;
}

export default function AddItem({ handleAddItem }: Props): React.FunctionComponentElement<{}> {
  const [task, setTask] = useState('');

  const handleClick = () => {
    handleAddItem(task);
    setTask('');
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={task}
        onChange={({ target }) => setTask(target.value)}
      />
      <button
        type="button"
        onClick={() => handleClick()}
      >
        <PlusCircle size={38} className="add-icon" />
      </button>
    </Container>
  );
}
