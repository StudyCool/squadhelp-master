import React from 'react';
import Header from '../../components/Header/Header';
import styles from "../Home/Home.module.sass";
import {Link} from "react-router-dom";
import MocksData from "../../components/MocksData/MocksData";

const Transactions = (props) => {
    //const {role, history} = props;
    return (
        <div>
            <Header/>
            <section id="tableData">
                        <MocksData/>
            </section>
            <p className={styles.center}><div className={styles.button}><Link className={styles.button__link}  to="/dashboard">dashboard</Link></div></p>
        </div>
    );
};

export default Transactions;
