import { useCallback, useState } from "react";

const OPEN_LIBRARY_API = "https://openlibrary.org/search.json";
const RESULTS_PER_PAGE = 1;

type QueryProps = {
  title: string | null;
  author: string | null;

}

interface Book {
  title: string;
  author_name: string[];
  cover_i?: string;
  first_publish_year: number;
}

const useFetchBooks = ({ title, author }: QueryProps) => {
    const [currentPage, setCurrentPage] = useState(1);
  const fetchBooks = useCallback(async (title: string | null, author:string | null, page: number = currentPage) => {

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
      query += `&limit=${RESULTS_PER_PAGE}`;
    //Limit results to allow pagination
    query += `&page=${page}`;

    try {
      console.log("Query URL", query)
      const res = await fetch(query);
      console.log("Response", res)
      const data = await res.json();
      console.log("Data", data)
      // Filter books that have the cover_i property
      const filteredBooks = data.docs.filter((book:Book) => book.cover_i);

      return filteredBooks;
    } catch (error) {
      console.error(error);
      throw error;
    }

  }, [currentPage]);

    const nextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
      console.log(currentPage)
      console.log()
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {fetchBooks, nextPage, prevPage, currentPage}
};

export default useFetchBooks;