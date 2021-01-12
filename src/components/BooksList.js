import React from 'react';
import SearchResults from "./SearchResults";
import MyList from "./MyList";

const BooksList = (props) => {
    return(
        <div className="books-list">
            <SearchResults
                addToMyBooks = {props.addToMyBooks}
                books={props.books} />
            <MyList
                removeBook = {props.removeBook}
                myBooks={props.myBooks} />
        </div>
    )
}

export default BooksList