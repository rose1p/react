import React, { useEffect, useState } from 'react'
import { Table, Alert, Button, Row, Col } from 'react-bootstrap'

const OrderPage = ({ books }) => {
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);; //주문할 전체목록
    const [sum, setSum] = useState(0); //주문할 상품합계

    useEffect(()=>{
        const list = books.filter(book=>book.checked);
        setOrders(list);
        let sum1 = 0;
        let total = 0;
        list.forEach(book => {
            sum1 += book.sum;
            total += book.qnt;
        });
        setSum(sum1);
        setTotal(total);
        //console.log(list);
    }, []);

    return (
        <div className='my-5'>
            <h1 className='text-center mb-5'>주문하기</h1>
            <Table bordered striped hover>
                <thead>
                    <tr className='text-center'>
                        <td>제목</td>
                        <td>가격</td>
                        <td>수량</td>
                        <td>금액</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(book =>
                        <tr key={book.cid}>
                            <td><div className='ellipsis'><img src={book.image || "http://via.placeholder.com"} width="50" />
                                [{book.bid}] {book.title}</div></td>
                            <td className='text-end'>{book.fmtprice}원</td>
                            <td className='text-end'>{book.qnt}권</td>
                            <td className='text-end'>{book.fmtsum}원</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Alert>
                <Row>
                    <Col>전체: {total}권</Col>
                    <Col className='text-end'>
                        합계: {sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Col>
                </Row>
            </Alert>
            <div>
                <Button>주문하기</Button>
            </div>
        </div>
    )
}

export default OrderPage