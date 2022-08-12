import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  border: 2px solid var(--color-three);
  padding: 5px;
  margin: 20px 0;
  border-radius: 15px;

  .add-icon {
    margin-right: 5px;
    color: var(--color-four);
  }

  button {
    background: none;
    border: none;
  }

  button:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }

  input {
    border: 0px;
    background: none;
    outline: 0;
    color: var(--color-five);
    font-size: 1.1rem;
    flex: 1;
  }
`;

export default Container;
