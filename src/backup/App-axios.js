import React, { Component } from 'react';
import axios from 'axios';

//export default class App extends React.Component {
class App extends Component {
    constructor() {
        super()
        this.state = {
            books: []
            
            /* 
            bno: '',
            title: '',
            content: '',
            writer:'',
            regdate: '',
            viewcnt: 0 */
        }
        this.handleClickForAll = this.handleClickForAll.bind(this)
    }
    handleClickForAll() {
        axios.get('http://localhost:8080/board/listAll',{
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            }
          })
        .then(res =>{
            const books = res.data;
            this.setState({books});
            console.log(books);
        } )
        .catch(error => {
            console.log('error', error);
        })
    }
    handleClickForOne() {
        axios.get('http://localhost:8080/board/read/34',{
            method: 'GET',
            mode: 'no-cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            }
          })
        .then(res =>{
            const books = res.data;
            this.setState({books});
            console.log(books);
        } )
        .catch(error => {
            console.log('error', error);
        })
    }

    render() {
        
        return(
        /*
            <div className='button_container'>
                <button className='button' onClick={this.handleClickForAll}>Click Me For All</button>   
                    <ul> {this.state.books.map(
                        book => <p>{book.bno}, {book.title}, {book.contents}, {book.writer}, {book.regdate}, {book.viewcnt}</p>)}
                   </ul>
               
            </div>
                    */
            <div className='button_container'>
            <button className='button' onClick={this.handleClickForOne}>Click Me For One</button>
            <ul> {this.state.books.map(
                        book => <p>{book.bno}, {book.title}, {book.contents}, {book.writer}, {book.regdate}, {book.viewcnt}</p>)}
                   </ul>
           </div> 
        );
    }
}
export default App
/*
    axios.get('https://quantified-api.herokuapp.com/v1/foods')
    .then((foods) =>{
            console.log(foods)
        })
        .catch((error)=>{
            console.error(error)
        })
*/
  /* 
  componentDidMount(){
  axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
  .then(json => json.data.results.map(result => (
    {
      name: `${result.name.first} ${result.name.last}`,
      id: result.registered
    })))
  .then(newData => console.log(newData))
}

componentDidMount(){
  axios.get('https://randomuser.me/api/?results=10&inc=name,registered&nat=fr')
  .then(json => console.log(json.data.results[0].name.first))
}
  */
  