import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 2px solid var(--color-three);
  padding: 10px;
  margin: 20px 0;
  border-radius: 15px;

  .add-icon {
    margin-right: 5px;
    color: var(--color-four)
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: var(--color-five);
    font-size: 1.1rem;
    flex: 1;
  }
`;

export default Container;
