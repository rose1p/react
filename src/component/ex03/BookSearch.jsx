import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Table, Button, InputGroup, Form, Row, Col, Spinner } from 'react-bootstrap';
import Book from './Book';

const BookSearch = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [last, setLast] = useState(1);
    const [end, setEnd] = useState(false);
    const [query, setQuery] = useState("리액트");
    const ref_txt = useRef(null);

    const getBooks = async () => {
        const url = `https://dapi.kakao.com/v3/search/book?target=title&query=${query}&and&size=5&page=${page}`;
        const config = {
            headers: {
                "Authorization": "KakaoAK bf50a89f44bdbfa46f6485b8837d19bd"
            }
        }
        setLoading(true);
        const res = await axios.get(url, config);
        //console.log(res);
        setLast(Math.ceil(res.data.meta.pageable_count / 5)); //마지막 페이지
        setBooks(res.data.documents);
        setEnd(res.data.meta.is_end); //마지막이면 True
        setLoading(false);
    }

    useEffect(() => {
        getBooks();
    }, [page]);

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setPage(1);
        getBooks();
        ref_txt.current.focus();
    }

    if (loading) return (
        <div className='text-center my-3'>
            <h3 className='text-center my-3'>로딩중...</h3>
            <Spinner variant="primary" />
        </div>

    )

    return (
        <div>
            <h1 className='text-center mb-3'>도서검색</h1>
            <Row className='mb-3'>
                <Col md={4}>
                    <form onSubmit={onSubmit}>
                        <InputGroup>
                            <Form.Control ref={ref_txt} value={query} onChange={onChange} />
                            <Button type="submit">검색</Button>
                        </InputGroup>
                    </form>
                </Col>
            </Row>
            <Table striped>
                <thead>
                    <tr><td>이미지</td><td>제목</td><td>가격</td><td>저자</td></tr>
                </thead>
                <tbody>
                    {books.map(book =>
                        <Book key={book.isbn} book={book} />
                    )}
                </tbody>
            </Table>
            {last > 1 &&
                <div className='text-center'>
                    <Button onClick={() => setPage(page - 1)} disabled={page === 1}>이전</Button>
                    <span className='mx-3'>{page} / {last}</span>
                    <Button onClick={() => setPage(page + 1)} disabled={end}>다음</Button>
                </div>
            }
        </div>
    )
}

export default BookSearch