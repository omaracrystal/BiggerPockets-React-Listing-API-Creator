import React, {Component} from 'react';

class ListingsForm extends Component {

    render() {
        return (

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

        );
    }
}

export default ListingsForm;
