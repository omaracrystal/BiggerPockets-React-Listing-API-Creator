/**
 TextInput Demo
 **/

import React from "react";
import {Table, Row, Col, Well} from "react-bootstrap";
import IDHelper from "../../utils/idHelper";
import CheckboxInput from '../CheckboxInput/CheckboxInput';
import TextInput from './TextInput';

class TextInputDemo extends React.Component {
    /* istanbul ignore next */
    constructor(props, context) {
        super(props, context);
        this.state = {
            help_default: 'This is the default help text.',
            help_success: 'This is the success help text.',
            help_warning: 'This is the warning help text.',
            help_required: '* Required Field',
            label: "",
            prefix: "",
            suffix: "",
            value: "",
            required: true
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.onChangeValue          = this.onChangeValue.bind(this);
        this.onChangePrefix         = this.onChangePrefix.bind(this);
        this.onChangeSuffix         = this.onChangeSuffix.bind(this);
        this.onChangeLabel          = this.onChangeLabel.bind(this);
        this.onChangeHelpDefault    = this.onChangeHelpDefault.bind(this);
        this.onChangeHelpRequired   = this.onChangeHelpRequired.bind(this);
        this.onChangeHelpSuccess    = this.onChangeHelpSuccess.bind(this);
        this.onChangeHelpWarning    = this.onChangeHelpWarning.bind(this);
        this.onChangeRequired       = this.onChangeRequired.bind(this);
    }
    onChangeHelpDefault(e)
    {
        this.setState({ help_default: e.target.value });
    }
    onChangeHelpRequired(e)
    {
        this.setState({ help_required: e.target.value });
    }
    onChangeHelpSuccess(e)
    {
        this.setState({ help_success: e.target.value });
    }
    onChangeHelpWarning(e)
    {
        this.setState({ help_warning: e.target.value });
    }
    onChangeLabel(e)
    {
        this.setState({label: e.target.value});
    }
    onChangePrefix(e)
    {
        this.setState({prefix: e.target.value});
    }
    onChangeRequired(e)
    {
        this.setState({required: (e.target.checked === 'on' || e.target.checked === true)});
    }
    onChangeSuffix(e)
    {
        this.setState({suffix: e.target.value});
    }
    handleTextChange(e)
    {
        this.setState({value: e.target.value});
    }
    onChangeValue(e)
    {
        this.setState({value: e.target.value});
    }
    render() {
        return (
            <div id={this.props.id} className="text input-input-demo container-fluid" >
                <h3>Text Input</h3>
                <Well>
                    <code>import TextInput from "src/components/TextInput/TextInput"</code>
                </Well>
                <h4>&lt;TextInput /&gt;</h4>
                <Well>
                    <Row>
                        <Col md={12}>
                            <TextInput
                                label={this.state.label}
                                prefix={this.state.prefix}
                                onChange={this.handleTextChange}
                                suffix={this.state.suffix}
                                value={this.state.value}
                                required={this.state.required}
                                help_default={this.state.help_default}
                                help_success={this.state.help_success}
                                help_warning={this.state.help_warning}
                                help_required={this.state.help_required}
                            />
                         </Col>
                    </Row>
                </Well>

                <h4>Props</h4>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                        <th>Try It!</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>help_default</td>
                        <td>string</td>
                        <td>null</td>
                        <td>This is the default help text for the checkbox.</td>
                        <td>
                            <TextInput value={this.state.help_default} onChange={this.onChangeHelpDefault} />
                        </td>
                    </tr>
                    <tr>
                        <td>help_required</td>
                        <td>string</td>
                        <td>null</td>
                        <td>This is the required field help text for the checkbox.</td>
                        <td>
                            <TextInput value={this.state.help_required} onChange={this.onChangeHelpRequired} />
                        </td>
                    </tr>
                    <tr>
                        <td>help_success</td>
                        <td>string</td>
                        <td>null</td>
                        <td>This is the default success help text for the checkbox.</td>
                        <td>
                            <TextInput value={this.state.help_success} onChange={this.onChangeHelpSuccess} />
                        </td>
                    </tr>
                    <tr>
                        <td>help_warning</td>
                        <td>string</td>
                        <td>"* Required Field"</td>
                        <td>This is the default warning help text for the checkbox.</td>
                        <td>
                            <TextInput value={this.state.help_warning} onChange={this.onChangeHelpWarning} />
                        </td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>string</td>
                        <td>null</td>
                        <td>This is the label text for the text input.</td>
                        <td>
                            <TextInput
                                value={this.state.label}
                                onChange={this.onChangeLabel} />
                        </td>
                    </tr>
                    <tr>
                        <td>onChange</td>
                        <td>function</td>
                        <td />
                        <td>Calls the event and sends the event object to a specified function.</td>
                        <td />
                    </tr>
                    <tr>
                        <td>prefix</td>
                        <td>string</td>
                        <td>null</td>
                        <td>This appends text before the input.</td>
                        <td>
                            <TextInput
                                value={this.state.prefix}
                                onChange={this.onChangePrefix} />
                        </td>
                    </tr>
                    <tr>
                        <td>required</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Determines if the text input is required.</td>
                        <td>
                            <CheckboxInput
                                checked={this.state.required}
                                onChange={this.onChangeRequired} />
                        </td>
                    </tr>
                    <tr>
                        <td>suffix</td>
                        <td>string</td>
                        <td>null</td>
                        <td>This appends text after the input.</td>
                        <td>
                            <TextInput
                                value={this.state.suffix}
                                onChange={this.onChangeSuffix} />
                        </td>
                    </tr>

                    <tr>
                        <td>value</td>
                        <td>string</td>
                        <td>null</td>
                        <td>Determines if the text input is selected.</td>
                        <td>
                            <TextInput
                                value={this.state.value}
                                onChange={this.onChangeValue} />
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

TextInputDemo.propTypes = {
    id: React.PropTypes.string
};
TextInputDemo.defaultProps = {
    id: IDHelper.getID( "text_input_input_demo" )
};

export default TextInputDemo;