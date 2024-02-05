import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { renderAppWithRouterMatch } from '../../mocks/renderWidthQuery';
import App from '../../App';

test('영화를 추가하면 추가한 내용까지 리렌더링된다.', async () => {
  const user = userEvent.setup();
  render(renderAppWithRouterMatch(<App />));
  const titleInput = screen.getByLabelText('영화이름');
  const yearInput = screen.getByLabelText('연도');

  fireEvent.change(titleInput, { target: { value: 'Good Day' } });
  fireEvent.change(yearInput, { target: { value: '2021' } });

  const submitBtn = screen.getByRole('button', { name: '추가' });
  await user.click(submitBtn);

  const newMovieTitle = await screen.findByText('Good Day');
  expect(newMovieTitle).toBeInTheDocument();
});
