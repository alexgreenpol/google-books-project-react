import React from 'react';

const MyBookCard = (props) => {
    return(
        <div className="book-card">
            <img src={props.bookInfo.imageLinks.thumbnail} alt=""/>
            <h3 className="book-title">{props.bookInfo.title}</h3>
            <h4 className="book-subtitle">{props.bookInfo.subtitle}</h4>
            <p className="book-description">{props.bookInfo.description}</p>
            <p className="book-date">{props.bookInfo.authors}</p>
            <p className="book-date">{props.bookInfo.publishedDate}</p>
            <button onClick={()=>{
                return props.removeBook(props.bookInfo.id)
            }} className="btn book-remove-btn">Remove</button>
        </div>
    )
}

export default MyBookCard