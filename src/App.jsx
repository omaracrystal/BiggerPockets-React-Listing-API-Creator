import React, {Component} from 'react';
import './styles/main.css';
import 'normalize.css';
import ListingForm from './js/containers/Form';
import ListingsList from './js/containers/Listings-list';

class App extends Component {

    render() {
        return (
            <div className="App">

                <h1 className="App-header">Listings</h1>

                <ListingForm onNewPropertySubmit={this.onNewPropertySubmit}
                             ref="ListingForm" />

                <ListingsList onDeleteProperty={this.onDeleteProperty}
                              onEditSubmit={this.onEditSubmit}
                              ref="ListingList" />

            </div>
        );
    }
}

export default App;
