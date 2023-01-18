import { useState } from 'react';
import {
  FieldItem,
  ContaierField,
  ContainerForm,
  BtnDisabled,
} from './ContactForm.styled';

export function Form({ onData }) {
  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onData({ ...state });
    setState({ ...initialState });
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <ContaierField>
        Name
        <FieldItem
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder=" enter name"
          onChange={handleChange}
        />
      </ContaierField>
      <ContaierField>
        Number
        <FieldItem
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder=" enter number"
          onChange={handleChange}
        />
      </ContaierField>
      <BtnDisabled type="submit" disabled={!name || !number}>
        Add contact
      </BtnDisabled>
    </ContainerForm>
  );
}
