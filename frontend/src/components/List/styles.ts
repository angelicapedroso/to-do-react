import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
}

const Container = styled.div(({ done }: ContainerProps) => (
  `
  display: flex;
  background-color: var(--color-three);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;z
  max-width: 780px;
  justify-content: space-between;

  input {
    width: 20px;
    margin-right: 10px;
  }

  label {
    text-decoration: ${done ? 'line-through' : 'inherit'};
  }

  button {
    background: none;
    border: none;
    margin-left: 5px;
  }

  button:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }
`
));

export default Container;
