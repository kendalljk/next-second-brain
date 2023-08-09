import React from "react";
import Image from "next/image";

type BookProps = {
    key: string;
    title: string;
    author_name: string[];
    cover_i: string;
    first_publish_year: number;
};

const BookCard = ({
    key,
    title,
    author_name,
    cover_i,
    first_publish_year,
}: BookProps) => {
    const coverPath = "https://covers.openlibrary.org/b/id/";

    return (
        <div key={key}>
            <Image
                src={`${coverPath}${cover_i}-L.jpg`}
                alt={`${title} cover`}
                width={200}
                height={300}
            />
            <h2>Title: {title}</h2>
            <h3>Author: {author_name?.join(", ")}</h3>
            <h3>{first_publish_year}</h3>
        </div>
    );
};

export default BookCard;
