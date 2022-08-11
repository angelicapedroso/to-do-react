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

  input {
    width: 20px;
    margin-right: 10px;
  }

  label {
    text-decoration: ${done ? 'line-through' : 'inherit'};
  }
`
));

export default Container;
