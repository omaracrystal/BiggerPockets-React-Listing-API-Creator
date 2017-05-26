import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class ListingItem extends Component {

    render() {
        return (

            <li className="App-listing-item-wrapper">
                <h3 className="listing-item-name">Dolor Ipsum</h3>
                <p className="listing-item-url">www.something.com</p>
                <FontAwesome name='pencil' />
                <FontAwesome name='trash-o' />
            </li>
        );
    }
}

export default ListingItem;
