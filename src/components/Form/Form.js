import React, {Component} from 'react';
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import '../../styles/css/Course.css'
import Button from "@material-ui/core/Button";
import {Redirect} from 'react-router-dom'

import {submitForm} from '../../actions/Reservation'

let ok = 0;

class Form extends React.Component {

    constructor() {
        super();

        this.state = {
            email: "",
            phone: "",
            name: "",
            reservations: "",
            errors: null
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event, key) {
        this.setState({
            [key]: event.target.value,
        });
    };

    onSubmit(event) {
        const formData = {
            email: this.state.email,
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.submitForm(formData);
        ok = 1;
    }

    render() {
        console.log(ok)
        if (ok === 1) {
            ok = 0;
            return <Redirect to='/places'/>
        }

        return (
            <div className='course panel'>
                <p className="course__title">Form rezervare </p> <br/><br/>
                Nume: <TextField
                onChange={
                    (e) => this.onChange(e, 'name')}
            />
                <br/> <br/>
                Telefon:<TextField
                onChange={
                    (e) => this.onChange(e, 'phone')}
            />
                <br/> <br/>
                Email:<br/>
                <TextField
                    onChange={
                        (e) => this.onChange(e, 'email')}
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
    reservations: state.reservations.reservations
});

export default connect(mapStateToProps, {submitForm})(Form);
