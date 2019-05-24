import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import NavMenu from './NavMenu';

import '../styles/Layout.css'
import '../styles/NavMenu.css'


export default props => (
    <div>
        <Grid fluid>
            <Row>
                <NavMenu/>
            </Row>
            <Row>
                <Col className='layout__body'>
                    {props.children}
                </Col>
            </Row>
        </Grid>
    </div>
);
