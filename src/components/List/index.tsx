import React, { useState } from 'react';
import { Item } from '../../types/Item';
import Container from './styles';

type Props = {
  item: Item;
}

export default function List({ item }: Props): React.FunctionComponentElement<{}> {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <Container done={isChecked}>
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={({ target }) => setIsChecked(target.checked)}
      />
      <label htmlFor="checkbox">{item.name}</label>
    </Container>
  );
}
