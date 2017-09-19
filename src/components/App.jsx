import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import axios from 'axios';
// import Info from '../controllers/dataController'

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            infos: [
                // {a: 1, b: 2, c: 3},
                // {a: 4, b: 5, c: 6}            
            ]
        }        
    }
    
    

    componentDidMount() {
        const that = this;
        axios({
            url: '/data',
            method: 'get',
            baseURL: 'http://localhost:8080'
        }).then(function(result){
                var apiData = result.data;
                that.setState({ infos: apiData 
            })            
        }).catch(function(error) {
                console.log(error);
            })
    }

    render(){
        const data = this.state.infos;
        console.log(data);
        if (data.length !== 0){
            return (
                <div>
                    {data.map((data) => 
                    <li key={data._id}>{data.name}</li>
                    )}
                </div>
            );
        }
        return null;                
    }
}
