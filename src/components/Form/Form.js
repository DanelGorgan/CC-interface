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
            fromDate: "",
            toDate: "",
            comment: "",
            reminder: "",
            reservations: "",
            errors: null
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                reservations: this.props.reservations
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
            email: this.state.email,
            name: this.state.name,
            fromDateTimestamp: Date.now(this.state.fromDate),
            toDateTimestamp: Date.now(this.state.toDate),
            comment: this.state.comment,
            nrRemindHours: this.state.reminder,
            phone: this.state.phone,
            wasReminded: false,
            status: "pending",
            placeId: this.props.location.pathname.split('/')[2]
        };
        this.props.submitForm(formData);
    }

    render() {
        if (this.state.reservations) {
            return <Redirect to='/places'/>
        }

        return (
            <div className='course panel'>
                <p className="course__title">Form rezervare </p> <br/><br/>
                <TextField
                    label="Nume"
                    onChange={
                    (e) => this.onChange(e, 'name')}
            />
                <TextField
                label="Telefon"
                onChange={
                    (e) => this.onChange(e, 'phone')}
            />
                <br/>
                <TextField
                    label="De la"
                    type="datetime-local"
                    defaultValue="2019-05-30T10:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={
                    (e) => this.onChange(e, 'fromDate')}

                     />
                <TextField
                    label="Pana la"
                    type="datetime-local"
                    defaultValue="2017-05-30T10:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={
                    (e) => this.onChange(e, 'toDate')}
                />
                <br/>

                <TextField
                    label="Email"
                    onChange={
                        (e) => this.onChange(e, 'email')}
                />

                <TextField
                label="La cate ore doresti sa primesti reminder?"
                type="number"
                onChange={
                    (e) => this.onChange(e, 'reminder')}
                />

                <TextField
                id="outlined-textarea"
                label="Comentarii"
                multiline
                margin="normal"
                variant="outlined"
                onChange={
                    (e) => this.onChange(e, 'comment')}
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
