import React from 'react';

import {connect} from "react-redux";

import {getReservations, updateReservation, deleteReservations} from '../../actions/ReservationPlaces'

import TablePagination from '@material-ui/core/TablePagination'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import {withStyles} from "@material-ui/core/styles/index";

import '../../styles/css/ReservationPlaces.css'


let rowsCount = 0, rows = [];

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };

    render() {
        const count = rowsCount;
        const {classes, page, rowsPerPage, theme} = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
                </IconButton>
            </div>
        );
    }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, {withTheme: true})(
    TablePaginationActions,
);

const ColorButton = withStyles(theme => ({
    root: {
        color: '#ffffff',
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
}))(Button);

class ReservationPlaces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reservationsResponse: [],
            reservations: [],
            rows: [],
            ids: [],
            page: 0,
            rowsPerPage: 5
        };
    }

    onSubmit = (e, id) => {
        if (e.target.name) {
            e.target.firstChild.nodeValue = e.target.name
        }

        this.props.updateReservation(id, e.target.firstChild.nodeValue);

    };

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                reservations: this.props.reservations,
                rows: this.props.reservations,
                reservationsResponse: this.props.reservationsResponse
            });
        }

        if(this.props.reservationsResponse !== prevProps.reservationsResponse) {
            window.location.reload();
        }
    }

    componentWillMount() {
        this.props.getReservations();
    }

    handleChangePage = (event, page) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({page: 0, rowsPerPage: parseInt(event.target.value, 10)});
    };

    render() {
        if (this.state.reservations && this.state.reservations.length === 0) {
            return null;
        }
        rowsCount = rows.length;
        return (
            <div className='width'>
                <Paper className='width'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Place</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                <TableCell align="right">fromDate</TableCell>
                                <TableCell align="right">toDate</TableCell>
                                <TableCell align="right">Comentarii</TableCell>
                                <TableCell align="right">status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row, i) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.place}
                                    </TableCell>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.email}</TableCell>
                                    <TableCell align="right">{row.phone}</TableCell>
                                    <TableCell align="right">{new Date(row.fromDateTimestamp *1000).toISOString()}</TableCell>
                                    <TableCell align="right">{new Date(row.toDateTimestamp*1000).toISOString()}</TableCell>
                                    <TableCell align="right">{row.comment}</TableCell>
                                    <TableCell
                                        align="right">{this.state.ids.includes(row.id) ? this.state.status : row.status}</TableCell>
                                    <ColorButton variant="contained"
                                                 color="primary"
                                                 name="Accept"
                                                 className="accept"
                                                 // disabled={!!this.state.status}
                                                 onClick={(e) => this.onSubmit(e, row.id)}> Accept </ColorButton>
                                    <Button variant="contained"
                                            color="secondary"
                                            name="Decline"
                                            // disabled={!!this.state.status}
                                            onClick={(e) => this.onSubmit(e, row.id)}> Decline </Button>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25]}
                                    colSpan={10}
                                    count={rows.length}
                                    rowsPerPage={this.state.rowsPerPage}
                                    page={this.state.page}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActionsWrapped}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    reservations: state.reservations.reservations,
    reservationsResponse: state.reservations.reservationsResponse
});

export default connect(mapStateToProps, {getReservations, updateReservation})(ReservationPlaces);
