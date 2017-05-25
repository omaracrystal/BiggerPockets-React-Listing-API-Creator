import React from 'react';
import TextInput from '../../../components/TextInput/TextInput';

class Input extends React.Component {

  render() {
    return (
      <TextInput
        type="text"
        className="form-control"
        name={this.props.name}
        id={this.props.name}
        value={this.props.value}
        placeholder={this.props.label}
        disabled={this.props.disabled} />
    );
  }

}

Input.propTypes = {
  value: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  name: React.PropTypes.string,
  label: React.PropTypes.string,
  disabled: React.PropTypes.bool
};
export default Input;
