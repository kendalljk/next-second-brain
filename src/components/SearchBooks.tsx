"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useFetchBooks from "@/hooks/useFetchBooks";

type SearchBooksProps = {
    searchBooks: (title: string, author: string) => void;
};

const SearchBooks = ({searchBooks}: SearchBooksProps) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault()
    searchBooks(title, author);
  }

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
                    value={title}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setTitle(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Author"
                    value={author}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAuthor(event.target.value);
                    }}
                />
                <button type="submit">Search</button>
            </Box>
        </div>
    );
};

export default SearchBooks;
