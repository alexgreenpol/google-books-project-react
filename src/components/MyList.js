import React from 'react';
import MyBookCard from "./myBookCard";

const MyList = (props) => {
    return(
        <div className="my-list">
            <h3>My list</h3>
            {
                props.myBooks.map((book, index) => {
                    return <MyBookCard
                        bookInfo = {book}
                        key = {index}
                        removeBook = {props.removeBook}/>
                })
            }
        </div>
    )
}

export default MyList