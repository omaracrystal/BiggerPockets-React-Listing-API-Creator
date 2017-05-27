import React, {Component} from 'react';
import ListingItem from '../components/Listings-item';
import FontAwesome from 'react-fontawesome';

import axios from 'axios';

const baseURL = 'http://clientside-api.herokuapp.com/api/v1/listings';

const axiosAuth = axios.create({
    baseURL,
    headers: {
        Authorization: '7ce6a1beaa298c14a23ad9c07157e0df',
        'Content-Type': 'application/json',
    },
});

class ListingsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listings: undefined,
        }
    }

    componentDidMount() {
        axiosAuth.get()
            .then((response) => {

                this.setState({
                    listings: response.data.data,
                });

                console.log(this.state);
                console.log(this.state.listings[2].attributes.title);
                console.log(this.state.listings[2].attributes.url);
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }



    render() {
        let listings;

        // this.state.listings is undefined until initial GET request resolves
        if (this.state.listings) {
            if (this.state.listings.length > 0) {
                listings = this.state.listings.map((property) => {
                    return (
                        <li className="App-listing-item-wrapper"
                            key={property.id}>
                            <h3 className="listing-item-name">{property.attributes.title}</h3>
                            <p className="listing-item-url">{property.attributes.url}</p>
                            <FontAwesome name='pencil' />
                            <FontAwesome name='trash-o' />
                        </li>
                    );
                });
            } else {
                listings = <ListingItem />
            }
        }

        return (
            <ul className="App-list-container">

                {listings ? listings : <ListingItem />}

            </ul>
        );
    }
}

export default ListingsList;
