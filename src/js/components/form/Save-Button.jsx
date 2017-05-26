import React from 'react';

class SaveButton extends React.Component {

    render() {

        let saveButton = (this.props.saving) ? (
            <button type="submit" className="form-button-save" disabled={true}>Saving...</button>
        ) : (
            <button type="submit" className="form-button-save">Save</button>
        );

        return saveButton;
    }

}

AddButton.propTypes = {
    adding: React.PropTypes.bool
};

export default SaveButton;
