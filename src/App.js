import React, {Component} from 'react';
import './App.css';
import Posty from './views/Posty';

class App extends Component {

    state = {
        text: "te",
    }

    render() {
        return (
            <div>
                <Posty />
            </div>
        );
    }
}

export default App;
