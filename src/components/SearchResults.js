import React from 'react';
import BookCard from "./BookCard";

const SearchResults = (props) => {
    return(
        <div className="search-results">
            <h3>Search results</h3>
            {
                props.books.map((book, index) => {
                    return <BookCard
                        id = {book.id}
                        bookInfo = {book.volumeInfo}
                        key = {index}
                        addToMyBooks = {props.addToMyBooks} />
                })
            }
        </div>
    )
}

export default SearchResults