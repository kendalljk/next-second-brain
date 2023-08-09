import { useCallback } from "react";

const OPEN_LIBRARY_API = "https://openlibrary.org/search.json";

type QueryProps = {
  title: string | null;
  author: string | null;

}

const useFetchBooks = ({ title, author }: QueryProps) => {
  const fetchBooks = useCallback(async () => {
    let query = OPEN_LIBRARY_API + '?';

    if (title) {
      query += `title=${encodeURIComponent(title)}`;
    }

    if (author) {
      if (title) {
        query += '&';
      }
      query += `author=${encodeURIComponent(author)}`;
    }

    try {
      console.log("Query URL", query)
      const res = await fetch(query);
      console.log("Response", res)
      const data = await res.json();
      console.log("Data", data)
      return data.docs;
    } catch (error) {
      console.error(error);
      throw error;
    }

  }, [title, author]);

  return fetchBooks
};

export default useFetchBooks;