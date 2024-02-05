import { render, screen } from '@testing-library/react';
import { Get } from '.';
import '@testing-library/jest-dom';
import { renderAppWithRouterMatch } from '../../mocks/renderWidthQuery';

test('get하면 api로 The Shawshank Redemption 가져오는지 테스트', async () => {
  render(renderAppWithRouterMatch(<Get />));

  const movieTitle = await screen.findByText('The Shawshank Redemption');
  screen.debug();
  expect(movieTitle).toBeInTheDocument();
});
