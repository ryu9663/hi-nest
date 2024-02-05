import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';

const postMovie = async ({ title, year }: { title: string; year: string }) => {
  const res = await axios.post('http://localhost:4000/movies', {
    title,
    year: Number(year),
  });

  return res;
};
export const Post = () => {
  const queryClient = useQueryClient();

  const titleRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const { mutate } = useMutation({
    mutationFn: ({ title, year }: { title: string; year: string }) =>
      postMovie({
        title,
        year,
      }),
    onError: (err) => console.log(err),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        mutate({
          title: titleRef.current?.value || '',
          year: yearRef.current?.value || '0',
        });
      }}
    >
      <label>
        영화이름
        <input ref={titleRef} type="text" />
      </label>
      <label>
        연도
        <input ref={yearRef} type="number" />
      </label>
      <button>추가</button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
