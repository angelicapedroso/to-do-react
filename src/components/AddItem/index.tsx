import React, { useState } from 'react';
import { ListPlus } from 'phosphor-react';
import Container from './styles';

type Props = {
  handleAddItem: (item: string) => void;
}

export default function AddItem({ handleAddItem }: Props): React.FunctionComponentElement<{}> {
  const [task, setTask] = useState('');

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
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
        type="submit"
        onClick={(e) => handleClick(e)}
      >
        <ListPlus size={38} className="add-icon" />
      </button>
    </Container>
  );
}
