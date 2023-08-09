"use client";
import React, { useState } from "react";
import SearchBooks from "@/components/SearchBooks";
import BookCard from "@/components/BookCard";

export default function AddBook() {
    const [books, setBooks] = useState<any[]>([]);

    return (
        <div>
            <h2>Add Books</h2>
            <SearchBooks setBooks={setBooks} />
          <div className="grid grid-rows-4">
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
        </div>
    );
}
