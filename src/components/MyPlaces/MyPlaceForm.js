import React, { Component } from 'react';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import '../../styles/css/Course.css'
import Button from "@material-ui/core/Button";
import { Redirect } from 'react-router-dom'

import { submitForm } from '../../actions/MyPlace'

let ok = 0;

class MyPlaceForm extends React.Component {

    constructor() {
        super();

        this.state = {
            adress: "",
            description: "",
            name: "",
            type: "",
            zone: "",
            ownerId: "",
            places: "",
            contact: {},
            errors: null
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                places: this.props.places
            });

        }
    }

    onChange(event, key) {
        this.setState({
            [key]: event.target.value,
        });
    };

    onSubmit(event) {
        const formData = {
            address: this.state.address,
            description: this.state.description,
            name: this.state.name,
            type: this.state.type,
            zone: this.state.zone,
            contact: {
                email: this.state.email,
                phone: this.state.phone
            },
            ownerId: localStorage.getItem('userId'),
        };
        this.props.submitForm(formData);
    }

    render() {
        if (this.state.places) {
            return <Redirect to='/my-places' />
        }

        return (
            <div className='course panel'>
                <p className="course__title">Adauga o noua locatie</p> <br /><br />

                <TextField
                    label="Nume"
                    onChange={
                        (e) => this.onChange(e, 'name')}
                />
                <TextField
                    label="Adresa"
                    onChange={
                        (e) => this.onChange(e, 'address')}
                />
                <TextField
                    label="Zona"
                    onChange={
                        (e) => this.onChange(e, 'zone')}
                />
                <br />

                <TextField
                    label="Tip"
                    onChange={
                        (e) => this.onChange(e, 'type')}
                />

                <TextField
                    label="Email"
                    onChange={
                        (e) => this.onChange(e, 'email')}
                />

                <TextField
                    label="Telefon"
                    onChange={
                        (e) => this.onChange(e, 'phone')}
                />

                <TextField
                    id="outlined-textarea"
                    label="Descriere"
                    multiline
                    margin="normal"
                    variant="outlined"
                    onChange={
                        (e) => this.onChange(e, 'description')}
                />


                <br />
                <Button
                    className="course__submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={this.onSubmit}
                    style={{ marginTop: "30px", backgroundColor: '#0075ff' }}> Adauga
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    places: state.places.places
});

export default connect(mapStateToProps, { submitForm })(MyPlaceForm);
