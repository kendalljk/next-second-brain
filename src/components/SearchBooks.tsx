"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useFetchBooks from "@/hooks/useFetchBooks";

type SearchBooksProps = {
  setBooks: (books: any[]) => void;
}

const SearchBooks = ({setBooks}: SearchBooksProps) => {
    const [title, setTitle] = useState<string | null>(null)
    const [author, setAuthor] = useState<string | null>(null)
    const fetchBooks = useFetchBooks({ title, author });

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("fetching...")
      event.preventDefault();
        try {
          const books = await fetchBooks();
          setBooks(books);
          console.log("Books",books)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSearch}
            >
                <TextField
                    id="outlined-controlled"
                    label="Title"
                    value={title || ""}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setTitle(event.target.value || null);
                    }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Author"
                    value={author || ""}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAuthor(event.target.value || null);
                    }}
                />
                <button type="submit">Search</button>
            </Box>
        </div>
    );
};

export default SearchBooks;
