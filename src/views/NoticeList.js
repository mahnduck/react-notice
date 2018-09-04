import React, {Component} from 'react'
import axios from 'axios';

//import paginationFactory from 'react-bootstrap-table2-paginator';
import 'bootstrap/dist/css/bootstrap.min.css';
//import BootstrapTable from 'react-bootstrap-table';
import { Table } from 'react-bootstrap';
import { Link} from 'react-router-dom';

export default class NoticeList extends Component {

    constructor() {
        super()
        this.state = {
            books: []        
        }
    }
    componentDidMount() {
        axios
            .get('http://localhost:8080/board/listAll', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                const books = res.data;
                this.setState({books});
                console.log(books);
            })
            .catch(error => {
                console.log('error', error);
            })
    }
    render() {

        return (
            <div>
                <h3>게시글 목록</h3>
                 <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>내용</th>
                            <th>작성자</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books
                            .map(
                                (book) => 
                                <tr> 
                                    <td key = {book.bno}>
                                        <Link to={{ 
                                            pathname: `/NoticeShow/${book.bno}`, 
                                        }}>
                                            {book.bno}
                                        </Link> 
                                    </td>
                                    <td>{book.title}</td>
                                    <td>{book.content}</td>
                                    <td>{book.writer}</td>
                                    <td>{book.regdate}</td>
                                    <td>{book.viewcnt}</td>
                                </tr>
                            )
                        }  
                    </tbody>
                        
                               
                </Table>
              
                    
            </div>
        );
        
    }
    
}
