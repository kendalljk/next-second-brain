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
        <div
            key={key}
            className="w-full h-[40vh] flex flex-col justify-between text-center">
            <div className="flex justify-center">
                <Image
                    src={`${coverPath}${cover_i}-L.jpg`}
                    alt={`${title} cover`}
            height={500}
            width={300}
                />
            </div>
            <div className="details-container h-1/3">
                <h2>{title}</h2>
                <h3>{author_name? author_name[0]: null}</h3>
            </div>
        </div>
    );
};

export default BookCard;
