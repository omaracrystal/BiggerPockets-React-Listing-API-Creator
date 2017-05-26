/**
 Text Input
    Extended Bootstrap Text Component
 **/

import React from "react";
import {FormGroup, FormControl, ControlLabel, InputGroup, HelpBlock} from "react-bootstrap";
import IDHelper from "../../utils/idHelper";

class TextInput extends React.Component {
    /* istanbul ignore next */
    constructor(props, context) {
        super(props, context);
        this.init = false;
        this.state = {value: this.props.value, rawValue: '', validationState: (this.props.required) ? null : null };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
    }
    /* returns the zip input help instructions */
    getHelp() {
        if(this.state.validationState === 'warning') {
            return this.props.help_warning;
        }
        else if(this.state.validationState === 'success') {
            return this.props.help_success;
        }
        else if(this.props.required === true) {
            return this.props.help_required;
        }
        else {
            return this.props.help_default;
        }
    }
    /* input blur handler */
    onInputBlur(e) {
        if(e.target.value === "" && this.props.required === false) {
            this.setState({validationState:null});
        }
        else if(e.target.value !== "" && this.props.required === false){
            this.setState({validationState:null});
        }
        else if(e.target.value === "" && this.props.required && !this.init){
            this.init = true;
            this.setState({validationState:null});
        }
        else if(e.target.value === "" && this.props.required){
            this.setState({validationState:'warning'});
        }
        else {
            this.setState({validationState:'success'});
        }
    }
    /* input change handler */
    onChangeInput(e) {
        this.props.onChange(e);
        return this.validateValue(e.target.value);
    }
    /* validate value */
    validateValue(value) {
        if(this.props.required && value==="")
        {
            //required error
            this.setState({value: value, validationState:'warning'});
        }
        else if(this.props.required && !this.init){
            this.init = true;
            this.setState({value: value, validationState:null});
        }
        else if(this.props.required && value!=="") {
            //required success
            this.setState({value: value, validationState:"success"});
        }
        else if(value==="") {
            //not required blank
            this.setState({value: value, validationState:null});
        }
        else {
            //not required success
            this.setState({value: value, validationState:null});
        }
        return value;
    }
    FieldGroup({ id, label, help, onChange, onBlur, prefix, suffix, validationState, value, ...props }) {
        let prefixAddOn = (prefix && prefix != "") ?
            <InputGroup.Addon className="addon-prefix">{prefix}</InputGroup.Addon> : "";
        let suffixAddOn = (suffix && suffix != "") ?
            <InputGroup.Addon className="addon-suffix">{suffix}</InputGroup.Addon> : "";
        let validationAddOn = (validationState) ? <InputGroup.Addon>&nbsp;<FormControl.Feedback /></InputGroup.Addon> : "";
        let labelControl = (label !== "") ? <ControlLabel>{label}</ControlLabel> : "";
        let helpControl = (help !== "") ? <HelpBlock>{help}</HelpBlock> : "";
        return (
            <FormGroup controlId={id} validationState={validationState}>
                {labelControl}
                <InputGroup>
                    {prefixAddOn}
                    <FormControl value={value} onChange={onChange} onBlur={onBlur} {...props} />
                    {suffixAddOn}
                    {validationAddOn}
                </InputGroup>
                {helpControl}
            </FormGroup>
        );
    }
    render() {

        return (
                <this.FieldGroup
                    id={this.props.id}
                    className={"form-control " + this.props.className}
                    help={this.getHelp()}
                    label={this.props.label}
                    onChange={this.onChangeInput}
                    onBlur={this.onInputBlur}
                    placeholder={this.props.placeholder}
                    prefix={this.props.prefix}
                    required={this.props.required}
                    suffix={this.props.suffix}
                    type="text"
                    value={this.props.value}
                    validationState={this.state.validationState}
                />
         );

    }
}
TextInput.propTypes = {
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    help_default: React.PropTypes.string,
    help_success: React.PropTypes.string,
    help_warning: React.PropTypes.string,
    help_required: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    prefix: React.PropTypes.string,
    suffix: React.PropTypes.string
};
TextInput.defaultProps = {
    id: IDHelper.getID( "formControlsText" ),
    label: "",
    help_default: "",
    help_success: "",
    help_warning: "",
    help_required: "",
    value: "",
    onChange: function(){},
    placeholder: "Enter Text",
    required: false,
    prefix: "",
    suffix: ""
}; 

export default TextInput;
