// import React, { Component } from 'react';
// import axios from 'axios';
// const data = require('../controllers/dataController')

// export default class Data extends Component {
//     constructor(){
//         super();
//         this.state = {
//             name : "",
//             address : "",
//             comment : ""
//         }
//     }
//     render(){
//         var a = data.fetchData;
//         for (var index = 0; index < a.length; index++){
//             this.state.name = a.name;
//             this.state.address = a.address;
//             this.state.comment = a.comment;

//         }
//         return(
//             <div>
//                 <h1>This is a test!</h1>
//                 <p>From data page!!</p>
//                 <input>{this.info.name}</input>                
//                 {/* <textarea>{fetchData}</textarea> */}
//                 {/* <p>{data}</p> */}
//             </div>
//         );
//     }
// }