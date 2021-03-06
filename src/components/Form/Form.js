import React, {Component} from 'react';
import {connect} from "react-redux";
import TextField from '@material-ui/core/TextField';
import '../../styles/css/Course.css'
import Button from "@material-ui/core/Button";
import InputDropdown from '../core/InputDropdown'
import {Redirect} from 'react-router-dom'

import {submitForm, getRooms} from '../../actions/Reservation'

let ids = [];

class Form extends React.Component {

    componentWillMount() {
        this.props.getRooms(this.props.location.pathname.split('/')[2]);
    }

    constructor() {
        super();

        this.state = {
            email: "",
            phone: "",
            name: "",
            fromDate: "",
            toDate: "",
            submitted: "",
            comment: "",
            room: "",
            reminder: "",
            reservations: "",
            rooms: "",
            errors: null
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                reservations: this.props.reservations,
                rooms: this.props.rooms
            });

        }
    }

    onChange(event, key) {
        if (event.value) {
            event.target = {
                value: event.value
            }
        }
        this.setState({
            [key]: event.target.value,
        });
    };

    onSubmit(event) {
        const formData = {
            email: this.state.email,
            name: this.state.name,
            // fromDateTimestamp: parseInt(Date.now(this.state.fromDate) / 1000),
            fromDateTimestamp: new Date(this.state.fromDate).getTime() / 1000,
            // toDateTimestamp: parseInt(Date.now(this.state.toDate) / 1000),
            toDateTimestamp: new Date(this.state.toDate).getTime() / 1000,
            comment: this.state.comment,
            nrRemindHours: this.state.reminder,
            phone: this.state.phone,
            wasReminded: false,
            status: "pending",
            roomId: ids[this.state.room],
            placeId: this.props.location.pathname.split('/')[2]
        };
        this.props.submitForm(formData);
        this.setState({submitted: true})
    }

    render() {
        if (!this.state.rooms) {
            return null
        }
        if (this.state.submitted) {
            return <Redirect to='/places'/>
        }
        let rooms = this.state.rooms.map((room, key) => {
            ids[room.name] = room.id;
            return room.name
        });

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
                    defaultValue="2019-05-31T10:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={
                        (e) => this.onChange(e, 'fromDate')}

                />
                <TextField
                    label="Pana la"
                    type="datetime-local"
                    defaultValue="2019-05-31T10:30"
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

                <InputDropdown
                    style={{marginTop: "10px"}}
                    title="Camere"
                    value={this.state.room}
                    onChange={(e) => this.onChange(e, 'room')}
                    options={rooms}
                    placeholder='Alege o camera   '
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
    reservations: state.reservations.reservations,
    rooms: state.reservations.rooms
});

export default connect(mapStateToProps, {submitForm, getRooms})(Form);
