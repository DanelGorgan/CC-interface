import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
    <div className='exam-panel panel panel-sm'>
        <h1>Hello, Lume!</h1>
        <p>Autori:</p>
        <ul>
            <li><strong>Dani</strong></li>
            <li><strong>Gabi</strong></li>
            <li><strong>Silviu</strong></li>
            <li><strong>Robert</strong></li>
        </ul>
    </div>
);

export default connect()(Home);
