import { http, HttpResponse } from 'msw';
import { MovieType } from '../components/Get';

const movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    year: 83,
    genres: ['love'],
  },
  {
    id: 2,
    title: 'Troy',
    year: 11,
    genres: ['comic'],
  },
];

export const handlers = [
  http.get('http://localhost:4000/movies', async () => {
    return HttpResponse.json(movies);
  }),

  http.post('http://localhost:4000/movies', async ({ request }) => {
    const newMovie = (await request.json()) as MovieType;

    const { title, year } = newMovie;

    movies.push({
      id: movies.length + 1,
      title,
      year,
      genres: ['test'],
    });

    return HttpResponse.json(movies);
  }),
];
