import React from 'react';
import { Item } from '../../types/Item';
import Container from './styles';

type Props = {
  item: Item;
  handleTaskChange: (id: number, done: boolean) => void;
}

export default function List({
  item: { id, name, done }, handleTaskChange,
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
    </Container>
  );
}
