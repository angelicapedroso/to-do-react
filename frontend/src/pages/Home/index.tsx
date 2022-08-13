import React, { useState } from 'react';
import List from '../../components/List';
import AddItem from '../../components/AddItem';
import { Item } from '../../types/Item';
import { Content, Header } from './styles';

export default function Home(): React.FunctionComponentElement<{}> {
  const [list, setList] = useState<Item[]>([]);

  const handleAddItem = (item: string) => {
    const data = {
      id: list.length + 1,
      name: item,
      done: false,
    };
    const newList = [...list, data];
    setList(newList);
  };

  const handleTaskChange = (id: number, done: boolean) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, done };
      }
      return item;
    });
    setList(newList);
  };

  const handleRemoveItem = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <Content>
      <Header>Lista de Tarefas</Header>

      <AddItem handleAddItem={handleAddItem} />

      {
        list.map((item) => (
          <List
            key={item.id}
            item={item}
            handleTaskChange={handleTaskChange}
            handleRemoveItem={handleRemoveItem}
          />
        ))
      }
    </Content>
  );
}
