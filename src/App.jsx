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
                    <input
                        id="form-input-name"
                        type="text"
                        className="form-input form-input-name"
                        name="Name"
                        placeholder="Name"
                        aria-labelledby="tp1-label"
                        aria-describedby="tooltip1"
                        aria-required="true"
                        required/>
                    <div id="tooltip1"
                         className="tooltip hide"
                         role="tooltip"
                         aria-hidden="true">
                        Give your URL a name!
                    </div>
                    <input
                        className="form-input form-input-url"
                        placeholder="URL"
                        required/>
                    <button className="form-button-save">ADD</button>
                </form>

                <ul className="App-list-container">
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
