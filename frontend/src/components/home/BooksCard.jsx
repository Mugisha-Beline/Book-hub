import React, { useState, useEffect } from "react";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const filterBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      book.author.toLowerCase().includes(filterAuthor.toLowerCase())
    );
    setFilteredBooks(filterBooks);
  }, [searchTerm, filterAuthor, books]);

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-2 border-sky-400 px-4 py-2"
        />
        <input
          type="text"
          placeholder="Filter by author"
          value={filterAuthor}
          onChange={(e) => setFilterAuthor(e.target.value)}
          className="border-2 border-sky-400 px-4 py-2"
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredBooks.map((item) => (
          <BookSingleCard key={item._id} book={item} />
        ))}
      </div>
    </div>
  );
};

export default BooksCard;
