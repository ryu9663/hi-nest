import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:4000/movies", async () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "The Shawshank Redemption",
        year: 83,
        genres: ["love"],
      },
      {
        id: 2,
        title: "Troy",
        year: 11,
        genres: ["comic"],
      },
    ]);
  }),
];
