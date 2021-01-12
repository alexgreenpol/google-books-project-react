import React from 'react';

const BookCard = (props) => {
    return(
        <div id={props.id} className="book-card">
            <img src={props.bookInfo.imageLinks.thumbnail} alt=""/>
            <h3 className="book-title">{props.bookInfo.title}</h3>
            <h4 className="book-subtitle">{props.bookInfo.subtitle}</h4>
            <p className="book-description">{props.bookInfo.description}</p>
            <p className="book-date">{props.bookInfo.authors}</p>
            <p className="book-date">{props.bookInfo.publishedDate}</p>
            <button onClick={()=>{
                return props.addToMyBooks(props.id ,props.bookInfo)
            }} className="btn book-add-btn">Add</button>
        </div>
    )
}

export default BookCard