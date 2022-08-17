import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import AddItem from '../../components/AddItem';
import { Item } from '../../types/Item';
import { Content, Header } from './styles';
import api from '../../services/api';

export default function Home(): React.FunctionComponentElement<{}> {
  const [list, setList] = useState<Item[]>([]);

  const getTask = async () => {
    const response = await api.get('/task');
    setList(response.data);
  };

  useEffect(() => {
    getTask();
  }, []);

  const handleAddItem = async (item: string) => {
    const data = { title: item };
    await api.post('/task', data);
    getTask();
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

  const handleRemoveItem = async (id: number) => {
    await api.delete(`/task/${id}`);
    getTask();
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
