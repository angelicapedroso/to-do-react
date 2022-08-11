import React, { useState } from 'react';
import List from '../../components/List';
import AddItem from '../../components/AddItem';
import { Item } from '../../types/Item';
import { Content, Header } from './styles';

export default function Home(): React.FunctionComponentElement<{}> {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Item 1', done: false },
    { id: 2, name: 'Item 1', done: false },
  ]);

  return (
    <Content>
      <Header>Lista de Tarefas</Header>

      <AddItem />

      {
        list.map((item) => (
          <List key={item.id} item={item} />
        ))
      }
    </Content>
  );
}
