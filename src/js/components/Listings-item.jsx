import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';

class ListingItem extends Component {

    render() {
        return (

            <li className="App-listing-item-wrapper">
                <h3 className="listing-item-name">{this.props.title}</h3>
                <p className="listing-item-url">{this.props.url}</p>
                <FontAwesome name='pencil' />
                <FontAwesome name='trash-o' />
            </li>
        );
    }
}

export default ListingItem;
