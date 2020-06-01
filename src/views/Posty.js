import React, {Component} from 'react';
import '../App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Posty extends Component {

    state = {
        posty: [],
    }

    async componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({posty: data, loading: false})
    }


    render() {

        const posty = {
            padding: "10px",
            fontFamily: "Arial",
            textAlign: "center",
        };


        return (
            <div style={posty}>
                <h1>Lista postów</h1>
                <Router>
                <table style={{border: "2px solid"}}>
                {this.state.posty.map(post => (
                    <tr style={{border: "1px solid blue"}}>
                        <td><b>{post.title}</b></td>
                        <td>{post.body}</td>
                    </tr>
                ))}
                </table>
                </Router>
            </div>
        );
    }
}

export default Posty