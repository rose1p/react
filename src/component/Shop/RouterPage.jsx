import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import BookSearch from './books/BookSearch'
import BookList from './books/BookList'


const RouterPage = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/books/search' element={<BookSearch />} />
            <Route path='/books/List' element={<BookList />} />
        </Routes>
    )
}

export default RouterPage