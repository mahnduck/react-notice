import React, {Component} from 'react'
import axios from 'axios';

import {
    Col,
    Form,
    FormGroup,
    Button,
    ButtonToolbar,
    FormControl,
    ControlLabel
} from 'react-bootstrap';

import {withRouter} from 'react-router-dom';

class NoticeShow extends Component {
    constructor(props){
        super(props);
        this.state = {
            /*
            book: {
                bno: '',
                writer: '',
                viewcnt: '',
                regdate: '',
                title: ''
                */
               bno: '',
               writer: '',
               viewcnt: '',
               regdate: '',
               title: ''
        
        };
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleChangeWriter = this.handleChangeWriter.bind(this);
        this.handleModify = this.handleModify.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount () {
        const req = this.props.match.params.bno;
        console.log(this.props);
        axios
        .get("http://localhost:8080/board/read/" + req , {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            const value = res.data;
            this.setState({
               bno: value.bno,
               writer: value.writer,
               viewcnt: value.viewcnt,
               regdate: value.regdate,
               title: value.title,
               content: value.content
            });
            console.log("Check");
            console.log(test);
        })
        .catch(error => {
            console.log('error', error);
        })
    }
    handleChangeTitle (e) {
        this.setState({title: e.target.value});
        console.log(this.state.title);
    }
    handleChangeContent (e) {
        this.setState({content: e.target.value});
        console.log(this.state.content);
    }
    handleChangeWriter (e) {
        this.setState({writer: e.target.value});
        console.log(this.state.writer);
    }
    handleModify (e) {
        console.log("Start update in react");
        e.preventDefault();
        const data = {
            bno: this.state.bno,
            writer: this.state.writer,
            viewcnt: this.state.viewcnt,
            regdate: this.state.regdate,
            title: this.state.title
          };
        console.log(data);
        axios
        .put("http://localhost:8080/board/update/", 
            {
                bno: this.state.bno,
                writer: this.state.writer,
                viewcnt: this.state.viewcnt,
                content: this.state.content,
                regdate: this.state.regdate,
                title: this.state.title
            },
            {
                method: 'PUT',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
            }
        })
        .then(res => {
            const updateResult = res.data;
            console.log("Update");
            console.log(updateResult);
        })
        .catch(error => {
            console.log('error', error);
        })
        this.props.history.push("/NoticeList");
        // window.location = "/NoticeList";

    }
    handleDelete (e) {
        const postBno = this.props.match.params.bno;
        console.log("Start delete in react");
        e.preventDefault();
        
        axios
        .delete("http://localhost:8080/board/remove/" + postBno, 
            {
                method: 'DELETE',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log("Delete");
        })
        .catch(error => {
            console.log('error', error);
        })
       window.location = "/NoticeList";

    }
    render() {
        return (
            
            <div>
                <h3>글 수정</h3>
                <div
                    className="small"
                    style={{
                    padding: '5px',
                    borderTop: '1px solid gray'
                }}>
                    <ul className="list-inline"></ul>
                </div>

                <Form horizontal>
                    <FormGroup controlId="title">
                        <Col componentClass={ControlLabel} sm={2}>
                            제목
                        </Col>
                        <Col sm={10}>
                            <FormControl
                                componentClass="input"
                                value={this.state.title}
                                onChange={this.handleChangeTitle}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="content">
                        <Col componentClass={ControlLabel} sm={2}>
                            내용
                        </Col>
                        <Col sm={10}>
                            <FormControl rows="10"
                                componentClass="textarea"
                                value = {this.state.content}
                                onChange={this.handleChangeContent}
                                />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="writer">
                        <Col componentClass={ControlLabel} sm={2}>
                            작성자
                        </Col>
                        <Col sm={10}>
                            <FormControl 
                                type="input" 
                                value={this.state.writer}
                                onChange={this.handleChangeWriter}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col align="right" smOffset={5} sm={10}>
                         
                                <Button active bsStyle="warning" type="submit" onClick={this.handleDelete}>삭제</Button> {'    '}
                                <Button active bsStyle="info" type="submit" onClick={this.handleModify}>수정</Button> {'    '}
                                <Button active bsStyle="link" href="/NoticeList" type="submit">취소</Button>
                               
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}


export default withRouter(NoticeShow);