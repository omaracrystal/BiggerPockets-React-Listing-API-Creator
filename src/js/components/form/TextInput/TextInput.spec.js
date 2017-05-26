import React from 'react';
import {shallow,mount} from 'enzyme';
import {expect} from 'chai';
import TextInput from './TextInput';

describe('<TextInput />', () => {

    it('should contain 1 text field', () => {

        const props = {
            value: '',
            required: false
        };

        const wrapper = shallow(<TextInput {...props} />);
        const el = wrapper.render();
        expect( el.find('.form-control') ).to.have.length(1);
    });
    it('should not have a prefix', () => {

        const props = {
            value: '',
            required: false,
            prefix: ''
        };

        const wrapper = mount(<TextInput {...props} />);
        expect( wrapper.find('.addon-prefix') ).to.have.length(0);
    });

    it('should have a prefix', () => {

        const props = {
            value: '',
            required: false,
            prefix: '$'
        };

        const wrapper = mount(<TextInput {...props} />);
        expect( wrapper.find('.addon-prefix') ).to.have.length(1);
    });

    it('should not have a suffix', () => {

        const props = {
            value: '',
            required: false,
            suffix: ''
        };

        const wrapper = mount(<TextInput {...props} />);
        expect( wrapper.find('.addon-suffix') ).to.have.length(0);
    });

    it('should have a suffix', () => {

        const props = {
            value: '',
            required: false,
            suffix: '%'
        };

        const wrapper = mount(<TextInput {...props} />);
        expect( wrapper.find('.addon-suffix') ).to.have.length(1);
    });

    it('should behave like a required field', () => {

        const props = {
            value: '',
            required: true
        };

        const wrapper = mount(<TextInput {...props} />);
        expect( wrapper.instance().getHelp() ).to.equal('');
    });

    it('should validate "success: required" on change', () => {

        const props = {
            value: 'text',
            required: true
        };

        const wrapper = mount(<TextInput {...props} />);
        const e = { target: {value: 'ABC123'} };
        wrapper.instance().onChangeInput(e);
        expect( wrapper.state().validationState ).to.equal(null);
    });

    it('should validate "error: required and empty" on change', () => {

        const props = {
            value: 'text',
            required: true
        };

        const wrapper = mount(<TextInput {...props} />);
        const e = { target: {value: ''} };
        wrapper.instance().onChangeInput(e);
        expect( wrapper.state().validationState ).to.equal('warning');
    });

    it('should validate "null: not required and empty" on change', () => {

        const props = {
            value: 'text',
            required: false
        };

        const wrapper = mount(<TextInput {...props} />);
        const e = { target: {value: ''} };
        wrapper.instance().onChangeInput(e);
        expect( wrapper.state().validationState ).to.equal(null);
    });

    it('should validate "success: not required" on change', () => {

        const props = {
            value: 'text',
            required: false
        };

        const wrapper = mount(<TextInput {...props} />);
        const e = { target: {value: 'ABC123'} };
        wrapper.instance().onChangeInput(e);
        expect( wrapper.state().validationState ).to.equal(null);
    });

    it('should update the value to "ABC123!/#" on change', () => {

        const props = {
            value: '',
            required: false
        };

        const wrapper = mount(<TextInput {...props} />);
        const e = { target: {value: 'ABC123!/#'} };
        wrapper.instance().onChangeInput(e);
        expect( wrapper.state().value ).to.equal('ABC123!/#');
    });


    it('should keep warning state on blur', () => {

        const props = {
            value: '',
            required: true
        };

        const wrapper = mount(<TextInput {...props} />);
        const e = { target: {value: ''} };
        wrapper.instance().onChangeInput(e);
        wrapper.instance().onInputBlur(e);
        expect( wrapper.state().validationState ).to.equal(null);
    });

    it('should keep null state on blur', () => {

        const props = {
            value: 'ABC123',
            required: false
        };

        const wrapper = mount(<TextInput {...props} />);
        const e = { target: {value: 'John and Sue went to town.'} };
        wrapper.instance().onChangeInput(e);
        wrapper.instance().onInputBlur(e);
        expect( wrapper.state().validationState ).to.equal(null);
    });

    it('should reset the field on blur', () => {

        const props = {
            value: 'ABC123',
            required: false
        };

        const wrapper = mount(<TextInput {...props} />);
        const e = { target: {value: ''} };
        wrapper.instance().onChangeInput(e);
        wrapper.instance().onInputBlur(e);
        expect( wrapper.state().validationState ).to.equal(null);
    });
});