import { Pencil, Trash } from 'phosphor-react';
import React from 'react';
import { Item } from '../../types/Item';
import Container from './styles';

type Props = {
  item: Item;
  handleTaskChange: (id: number, done: boolean) => void;
  handleRemoveItem: (id: number) => void;
}

export default function List({
  item: { id, name, done },
  handleTaskChange,
  handleRemoveItem,
}: Props): React.FunctionComponentElement<{}> {
  return (
    <Container done={done}>
      <input
        type="checkbox"
        id="checkbox"
        checked={done}
        onChange={({ target }) => handleTaskChange(id, target.checked)}
      />
      <label htmlFor="checkbox">{name}</label>

      <button
        type="button"
      >
        <Pencil size={24} color="#f2f2f2" />
      </button>

      <button
        type="button"
        onClick={() => handleRemoveItem(id)}
      >
        <Trash size={24} color="#f2f2f2" />
      </button>

    </Container>
  );
}
