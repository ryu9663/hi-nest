import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getMovies = async () => {
  const res = await axios
    .get("http://localhost:4000/movies")
    .then((res) => res.data);
  return res;
};

export interface Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}

export const Get = () => {
  const { data } = useQuery({
    queryKey: ["movies", 1],
    queryFn: getMovies,
  });

  return (
    <div>
      <ul>
        {data?.map((e: Movie) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
};
