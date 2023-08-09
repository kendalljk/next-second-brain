"use client"
import React, { useState } from "react";
import SearchBooks from "@/components/SearchBooks";

export default function AddBook() {
    const [books, setBooks] = useState<any[]>([]);

    return (
        <div>
            <h2>Add Books</h2>
            <SearchBooks setBooks={setBooks}/>
        </div>
    );
}
