import React, {Component} from 'react'
import {
    Col,
    Form,
    FormGroup,
    Button,
    FormControl,
    ControlLabel
} from 'react-bootstrap';
import axios from 'axios';

export default class NoticeWrite extends Component {
    constructor (props) {
        super(props)
        this.state = {
                bno: '',
                title: '',
                content: '',
                writer: '',
                regdate: '',
                viewcnt: ''
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.handleChangeWriter = this.handleChangeWriter.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
    handleClick(e){
        console.log("Start add a post.");
        e.preventDefault();
            
        axios
        .post("http://localhost:8080/board/register", 
        {
            bno: this.state.bno,
            writer: this.state.writer,
            viewcnt: this.state.viewcnt,
            regdate: this.state.regdate,
            title: this.state.title,
            content: this.state.content
        },
        {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
        }
        })
        .then(res => {
            const updateResult = res.data;
            console.log("Post");
            console.log(updateResult);
        })
        .catch(error => {
            console.log('error', error);
        })
        //you can add a modal
        window.location = "/NoticeList";
    }
   
    render() {
        console.log(this.state.book);
        return (
            <div>
                <h3>새글 작성</h3>
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
                            <FormControl placeholder="제목을 입력합니다." onChange={this.handleChangeTitle}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="content">
                        <Col componentClass={ControlLabel} sm={2}>
                            내용
                        </Col>
                        <Col sm={10}>
                            <FormControl rows="10" componentClass="textarea" placeholder="내용을 입력합니다. " onChange={this.handleChangeContent}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="writer">
                        <Col componentClass={ControlLabel} sm={2}>
                            작성자
                        </Col>
                        <Col sm={10}>
                            <FormControl type="" placeholder="작성자를 입력합니다. " onChange={this.handleChangeWriter}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col align="right" smOffset={5} sm={10}>
                        {/* register post action 추가 */}
                            <Button type="submit" onClick={this.handleClick}>등록</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
