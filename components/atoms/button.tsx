import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 16px;
  margin-top: 25px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;

  background-color: #979797;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  transition: background-color 0.3s ease;
  background-color: ${({ disabled, theme }) => !disabled && theme.colors.primary};

  color: ${({ theme }) => theme.colors.contrastText};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  font-family: 'Lato', sans-serif;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;
