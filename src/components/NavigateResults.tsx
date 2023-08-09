import React from "react";
import useFetchBooks from "@/hooks/useFetchBooks";

type NavigateResultsProps = {
    fetchBooks: (
        title: string | null,
        author: string | null,
        newPage: number
    ) => Promise<any[]>;
    nextPage: () => void;
    prevPage: () => void;
    currentPage: number;
    setBooks: (books: any[]) => void;
    title: string | null;
    author: string | null;
};

const NavigateResults = ({
    fetchBooks,
    nextPage,
    prevPage,
    currentPage,
    setBooks,
    title,
    author,
}: NavigateResultsProps) => {
    const handleNextPage = async () => {
        const newPage = currentPage + 1;
        nextPage();
        const newBooks = await fetchBooks(title, author, newPage);
        setBooks(newBooks);
    };

    const handlePrevPage = async () => {
        const newPage = currentPage - 1;
        prevPage();
        const newBooks = await fetchBooks(title, author, newPage);
        setBooks(newBooks);
    };
    return (
        <div className="flex justify-center my-4">
            <button onClick={handlePrevPage}>Previous Page</button>
            <button onClick={handleNextPage}>Next Page</button>
            <p className="block">Current Page: {currentPage}</p>
        </div>
    );
};

export default NavigateResults;
