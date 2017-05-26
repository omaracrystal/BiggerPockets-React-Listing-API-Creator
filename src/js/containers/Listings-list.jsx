import React, {Component} from 'react';
import ListingItem from '../components/Listings-item';

class ListingsList extends Component {

    render() {
        return (

        <ul className="App-list-container">
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
            <ListingItem />
        </ul>
    );
    }
}

export default ListingsList;
