import React from 'react';
import {Button} from 'react-bootstrap';

class SaveButton extends React.Component {

    render() {

        let saveButton = (this.props.saving) ? (
            <Button type="submit" className="btn btn-success btn-clear-blue-outline" disabled={true}>Saving...</Button>
        ) : (
            <Button type="submit" className="btn btn-success btn-clear-blue-outline">Save</Button>
        );

        return saveButton;
    }

}

SaveButton.propTypes = {
    saving: React.PropTypes.bool
};
export default SaveButton;
