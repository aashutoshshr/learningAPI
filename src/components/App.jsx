import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
// import Info from '../controllers/dataController'

export default class App extends Component{
    constructor(){
        super();
        this.state = {sunil : '', chor: ''};
    }
    componentDidMount() {
        const that = this;
        axios({
            url: '/data',
            method: 'get',
            baseURL: 'http://localhost:8080'
        }).then(function(response){
            that.setState({
                sunil: response.data
            })
        }).catch(function(error) {
                console.log(error);
            })
    }
    handleChange(e) {
        const { value, name } = e.target;
        this.setState({
                [name]: value
        })
    }

    handleSubmit(e) {
        e.PreventDefault();
        axios({
            method: 'post',
            url: '/sunil',
            data: {
                chor: this.state.chor
            }
        }).then(function(response){
           this.setState({
               sunil: this.state.sunil
           })
        })
    }
    render(){
        const { chor } = this.state;
        return(
            <div>
                <pre>{JSON.stringify(this.state, null, 4)}</pre>
                <div className=""></div>
                <Jumbotron className="">
                    <h1>Node and express</h1>
                    <p>This is a paragraph</p>
                    <p>This is another paragraph</p>
                    <button className="btn btn-success">Go</button>
                </Jumbotron>
                <textarea value={this.state.sunil[0]}></textarea>
                {/* {this.state.sunil} */}
               <form onSubmit={this.handleSubmit}>
                    <input type="text" name="chor" value={chor} onChange={(e) => this.handleChange(e).bind(this)}></input>
                    <button type="submit">submit</button>
               </form>
            </div>
        );
    }
}