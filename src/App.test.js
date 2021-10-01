import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios'

const username = 'rmassarotto'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Busca Github/i);
  expect(linkElement).toBeInTheDocument();
});

test('user endpoint request', async () => {
  const { data } = await axios.get(`https://api.github.com/users/${username}`)
  expect(data.id).toEqual(5855415);
})

test('repositories endpoint request', async () => {
  const { data } = await axios.get(`https://api.github.com/users/${username}/repos`)
  expect(data.lenght).not.toBe(0);
})

test('starred endpoint request', async () => {
  const { data } = await axios.get(`https://api.github.com/users/${username}/starred`)
  expect(data.lenght).not.toBe(0);
})