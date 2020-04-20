import React from 'react';
import CONSTANTS from '../../constants';
import CustomerDashboard from '../../components/CustomerDashboard/CustomerDashboard';
import CreatorDashboard from '../../components/CreatorDashboard/CreatorDashboard';
import Header from '../../components/Header/Header';
import {connect} from 'react-redux';
import styles from "../Home/Home.module.sass";
import {Link} from "react-router-dom";


const Dashboard = (props) => {
    const {role, history} = props;
    return (
        <div>
            <Header/>
            {
                role === CONSTANTS.CUSTOMER ?
                    <CustomerDashboard history={history} match={props.match}/>
                    :
                    <CreatorDashboard history={history} match={props.match}/>
            }

               <p className={styles.center}><div className={styles.button}><Link className={styles.button__link}  to="/transactions">transactions</Link></div></p>

        </div>
    );
};

const mapStateToProps = (state) => {
    return state.userStore.data
};

export default connect(mapStateToProps)(Dashboard);
