import styled from 'styled-components';
import { FC, FormEvent, ChangeEvent } from 'react';

import { TextInput, Button } from '@components/atoms';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

interface NameFormProps {
  name: string
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const NameForm: FC<NameFormProps> = ({ onSubmit, name, onChangeName }) => (
  <StyledForm onSubmit={onSubmit}>
    <TextInput
      placeholder="Diz aí seu nome :)"
      value={name}
      maxLength={18}
      onChange={onChangeName}
    />
    <Button type="submit" disabled={!name}>
      Jogar
      {name && `, ${name}`}
    </Button>
  </StyledForm>
);
