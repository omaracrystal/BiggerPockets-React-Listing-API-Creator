import React, {Component} from 'react';
import './styles/main.css';
import 'normalize.css';
import FontAwesome from 'react-fontawesome';

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1 className="App-header">Listings</h1>

                <form className="App-form">
                    <input className="form-input form-input-name" />
                    <input className="form-input form-input-url" />
                    <button className="form-button-save">SAVE</button>
                </form>

                <ul className="App-list-container">
                    <li className="listing-item-wrapper">
                        <h3 className="listing-item-name">Dolor Ipsum</h3>
                        <p className="listing-item-url">www.something.com</p>
                        <FontAwesome name='pencil' />
                        <FontAwesome name='trash-o' />
                    </li>
                    <li className="App-listing-item-wrapper">
                        <h3 className="listing-item-name">Dolor Ipsum</h3>
                        <p className="listing-item-url">www.something.com</p>
                        <FontAwesome name='pencil' />
                        <FontAwesome name='trash-o' />
                    </li>
                    <li className="App-listing-item-wrapper">
                        <h3 className="listing-item-name">Dolor Ipsum</h3>
                        <p className="listing-item-url">www.something.com</p>
                        <FontAwesome name='pencil' />
                        <FontAwesome name='trash-o' />
                    </li>
                    <li className="App-listing-item-wrapper">
                        <h3 className="listing-item-name">Dolor Ipsum</h3>
                        <p className="listing-item-url">www.something.com</p>
                        <FontAwesome name='pencil' />
                        <FontAwesome name='trash-o' />
                    </li>
                    <li className="App-listing-item-wrapper">
                        <h3 className="listing-item-name">Dolor Ipsum</h3>
                        <p className="listing-item-url">www.something.com</p>
                        <FontAwesome name='pencil' />
                        <FontAwesome name='trash-o' />
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;
