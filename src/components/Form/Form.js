import React, {Component} from 'react';
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import '../../styles/css/Course.css'
import Button from "@material-ui/core/Button";

class Form extends React.Component {

    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            role: "",
            errors: null
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(value, key) {
        this.setState({
            [key]: value,
        });
    };

    onSubmit(event) {
        const userData = {
            email: this.state.email,
            password: this.state.password,
            role: "professor"
        };
        alert('Success!')
        // this.props.submitForm(userData, this.props.history);
    }

    render() {
        return (
            <div className='course panel'>
                <p className="course__title">Form rezervare </p> <br/><br/>
                Nume: <TextField
                hintText="Enter Your Occupation"
                floatingLabelText="name"
                onChange = {
                    (v) => this.onChange(v, 'name') }
            />
                <br/> <br/>
                Telefon:<TextField
                hintText="Enter Your City"
                floatingLabelText="phone"
                onChange = {
                    (v) => this.onChange(v, 'phone') }
            />
                <br/> <br/>
                Email:<br/>
                <TextField
                    hintText="Enter Your Bio"
                    floatingLabelText="Bio"
                    onChange = {
                        (v) => this.onChange(v, 'email') }
                />
                <br/>
                <Button
                    className="course__submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={this.onSubmit}
                    style={{marginTop: "30px", backgroundColor: '#0075ff'}}> Rezerva
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    places: state.places.places
});

export default connect(mapStateToProps, {})(Form);
