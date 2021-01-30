import styled from 'styled-components';

export const TextInput = styled.input.attrs({ type: 'text' })`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: transparent;
  padding: 7px 15px;
  outline: 0;
  border: 1px solid #A0A6CB66;
  height: 40px;
  color: ${({ theme }) => theme.colors.contrastText};

  &::placeholder {
    color: #A0A6CB;
  }
`;
