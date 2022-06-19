import React, { createContext, useMemo, useState } from 'react';

type PropsToDoContext = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

const DEFAULT_VALUE = {
  name: '',
  setName: () => {},
  email: '',
  setEmail: () => {},
  password: '',
  setPassword: () => {},
};

const ToDoContext = createContext<PropsToDoContext>(DEFAULT_VALUE);

export function ToDoProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [name, setName] = useState(DEFAULT_VALUE.name);
  const [email, setEmail] = useState(DEFAULT_VALUE.email);
  const [password, setPassword] = useState(DEFAULT_VALUE.password);

  const memo = {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
  };

  const value = useMemo(() => memo, [memo]);

  return (
    <ToDoContext.Provider value={value}>
      {children}
    </ToDoContext.Provider>
  );
}

export default ToDoContext;
