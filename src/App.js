/*import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Nav, Navbar, NavbarBrand, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
*/
import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/home.js'
import NoticeList from './views/NoticeList.js'
import NoticeWrite from './views/NoticeWrite.js'
import NoticeShow from './views/NoticeShow'

export default class Example extends React.Component {

    render(){
        return (
            <Router>
                <div>
                    <Navbar color="dark" darkexpand="md">
                        <NavbarBrand href="/">게시판 프로젝트</NavbarBrand>
                            <Nav>
                                <NavItem>
                                    <NavLink href="/NoticeList"> 게시글 목록 </NavLink>\
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/NoticeWrite"> 새글 작성 </NavLink>
                                </NavItem>
                            </Nav>
                    </Navbar>
                <Container>
                    <Row>
                        <Col md={{size:10, offset:1}}>
                            <div style={{padding:'30px'}}>
                                <Route exact path="/" component={Home}/>
                                <Route path="/NoticeList" component={NoticeList}/>
                                <Route path="/NoticeWrite" component={NoticeWrite}/>
                                <Route path="/NoticeShow/:bno" component={NoticeShow}/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{size:10, offset:1}}>
                            <div className="small" style={{padding:'20px', borderTop:'1px solid gray'}}>
                                <ul className="list-inline">
                                    <li className="list-inline-item">
                                    Developed by mahnduck
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
            </Router>
        );
    }
}
