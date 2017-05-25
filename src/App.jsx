import React, {Component} from 'react';
import './App.css';
import 'normalize.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1 className="App-header">Listings</h1>

                <form>
                    <input className="input-name" />
                    <input className="input-url" />
                    <button>ENTER</button>
                </form>

                <ul>
                    <li>
                        <h3>Dolor Ipsum</h3>
                        <p>www.something.com</p>
                    </li>
                    <li>
                        <h3>Dolor Ipsum</h3>
                        <p>www.something.com</p>
                    </li>
                    <li>
                        <h3>Dolor Ipsum</h3>
                        <p>www.something.com</p>
                    </li>
                    <li>
                        <h3>Dolor Ipsum</h3>
                        <p>www.something.com</p>
                    </li>
                    <li>
                        <h3>Dolor Ipsum</h3>
                        <p>www.something.com</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
