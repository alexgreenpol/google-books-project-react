import React, { Component } from 'react';
import Search from './Search';
import BooksList from './BooksList';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            myBooks: [],
            searchField: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.searchBook = this.searchBook.bind(this);
        this.addToMyBooks = this.addToMyBooks.bind(this);
        this.removeBook = this.removeBook.bind(this);
    }

    handleSearch(e) {
        this.setState({ searchField: e.target.value })
    }

    searchBook(e) {
        e.preventDefault();
        console.log(this.state.searchField)
        this.data = fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`);
        this.data
            .then((res) => res.json())
            .then((result) => {
                result.items.forEach((book) => {

                    if (book.volumeInfo.authors) {
                        book.volumeInfo.authors = book.volumeInfo.authors.join(', ');
                    } else {
                        book.volumeInfo.authors = 'Authors: unknown'
                    }

                    if (book.volumeInfo.description) {
                        book.volumeInfo.description = book.volumeInfo.description.substring(0, 200).concat('...');
                    } else {
                        book.volumeInfo.description = 'Description: unknown'
                    }

                    if (book.volumeInfo.publishedDate) {
                        book.volumeInfo.publishedDate = book.volumeInfo.publishedDate.split('-').reverse().join('-')
                    }
                })
                this.setState({ books: [...result.items] })
            })
    }

    addToMyBooks(id, book) {
        book.id = id;

        const findedBook = this.state.myBooks.find((book) => {
            if (book.id === id) {
                return book
            }
        })
        if (!findedBook) {
            this.setState({ myBooks: [...this.state.myBooks, ...[book]] });
        }
    }
    removeBook(id) {
        const state = this.state.myBooks.filter((book) => {
            if (book.id !== id) {
                return book
            }
        })
        this.setState({ myBooks: [...state] });
    }

    render() {
        return ( <
            section className = "books" >
            <
            Search searchBook = { this.searchBook }
            handleSearch = { this.handleSearch }
            /> <
            BooksList addToMyBooks = { this.addToMyBooks }
            removeBook = { this.removeBook }
            books = { this.state.books }
            myBooks = { this.state.myBooks }
            /> <
            /section>
        )
    }
}

export default Books;