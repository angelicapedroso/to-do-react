import React from 'react';
// import Button from '../Button';

export default function RegisterForm(): React.FunctionComponentElement<{}> {
  return (
    <div>
      <form>
        <input type="text" placeholder="Digite seu nome" />
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite uma senha" />
        {/* <Button /> */}
      </form>
    </div>
  );
}
