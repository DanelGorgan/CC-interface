import React, { Component } from 'react';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import '../../styles/css/Course.css'
import Button from "@material-ui/core/Button";
import { Redirect } from 'react-router-dom'

import { updateForm } from '../../actions/MyPlace'

let ok = 0;

class MyPlaceUpdate extends React.Component {

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
            id: "",
            submit: false,
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
            address: this.state.address ? this.state.address : this.props.location.state.address,
            description: this.state.description ? this.state.description : this.props.location.state.description,
            name: this.state.name ? this.state.name : this.props.location.state.name,
            type: this.state.type ? this.state.type : this.props.location.state.type,
            zone: this.state.zone ? this.state.zone : this.props.location.state.zone,
            contact: {
                email: this.state.email ? this.state.email : this.props.location.state.contact.email,
                phone: this.state.phone ? this.state.phone : this.props.location.state.contact.phone
            },
            ownerId: localStorage.getItem('userId'),
            id: this.props.location.pathname.split('/')[2]
        };
        this.props.updateForm(formData); 
        this.setState({
            submit: true
        })
    }

    render() {
        if (this.state.submit) {
            return <Redirect to='/my-places' />
        }

        return (
            <div className='course panel'>
                <p className="course__title">Editeaza locatia</p> <br /><br />

                <TextField
                    label="Nume"
                    placeholder={this.props.location.state.name}
                    onChange={
                        (e) => this.onChange(e, 'name')}
                />              
                <TextField
                    label="Adresa"
                    placeholder={this.props.location.state.address}
                    onChange={
                        (e) => this.onChange(e, 'address')}
                />
                <TextField
                    label="Zona"
                    placeholder={this.props.location.state.zone}
                    onChange={
                        (e) => this.onChange(e, 'zone')}
                />
                <br />

                <TextField
                    label="Tip"
                    placeholder={this.props.location.state.type}
                    onChange={
                        (e) => this.onChange(e, 'type')}
                />

                <TextField
                    label="Email"
                    placeholder={this.props.location.state.contact.email}
                    onChange={
                        (e) => this.onChange(e, 'email')}
                />

                <TextField
                    label="Telefon"
                    placeholder={this.props.location.state.contact.phone}
                    onChange={
                        (e) => this.onChange(e, 'phone')}
                />

                <TextField
                    id="outlined-textarea"
                    label="Descriere"
                    multiline
                    margin="normal"
                    variant="outlined"
                    placeholder={this.props.location.state.description}
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
                    style={{ marginTop: "30px", backgroundColor: '#0075ff' }}> Update
                </Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    places: state.places.places
});

export default connect(mapStateToProps, { updateForm })(MyPlaceUpdate);
