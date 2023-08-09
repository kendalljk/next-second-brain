"use client";
import React, { useState } from "react";
import SearchBooks from "@/components/SearchBooks";
import BookCard from "@/components/BookCard";
import NavigateResults from "@/components/NavigateResults";
import useFetchBooks from "@/hooks/useFetchBooks";

export default function AddBook() {
    const [books, setBooks] = useState<any[]>([]);
    const [title, setTitle] = useState<string | null>(null);
    const [author, setAuthor] = useState<string | null>(null);
    const { fetchBooks, nextPage, prevPage, currentPage } = useFetchBooks({
        title,
        author,
    });

    const searchBooks = async (searchTitle: string, searchAuthor: string) => {
        console.log("searching");
        setTitle(searchTitle);
        setAuthor(searchAuthor);
        const newBooks = await fetchBooks(searchTitle, searchAuthor);
        setBooks(newBooks);
        console.log("Returned Books", books);
    };

    return (
        <div className="flex flex-col min-h-screen justify-between">
            <div>
                <h2>Add Books</h2>
                <SearchBooks searchBooks={searchBooks} />
                <div className="py-12">
                    {books.map((book) => (
                        <BookCard
                            key={book.key}
                            title={book.title}
                            author_name={book.author_name}
                            cover_i={book.cover_i}
                            first_publish_year={book.first_publish_year}
                        />
                    ))}
                </div>
                <div>
                    {books.length > 0 && (
                        <NavigateResults
                            fetchBooks={fetchBooks}
                            nextPage={nextPage}
                            prevPage={prevPage}
                            currentPage={currentPage}
                            setBooks={setBooks}
                            title={title}
                            author={author}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
