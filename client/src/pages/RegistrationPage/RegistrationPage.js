import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import article from './data/articles.json';

const listArticles = article.map((article) => {
    return (<>
        <h4 key={article.title}>{article.title}</h4>
        <p>{article.content}</p>
    </>)
});

const RegistrationPage = (props) => {
    props.clearError();
    return (
        <div className={styles.signUpPage}>
            <div className={styles.signUpContainer}>
                <div className={styles.headerSignUpPage}>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/login' style={{textDecoration: 'none'}}><span>Login</span></Link>
                    </div>
                </div>
                <div className={styles.signUpInfo}>
                    <h2>
                        CREATE AN ACCOUNT
                    </h2>
                    <h3>
                        We always keep your name and email address private.
                    </h3>
                </div>
                <RegistrationForm/>
            </div>
            <section>
                <div className={styles.articlesMainContainer}>
                    <div className={styles.ColumnContainer}>
                        {listArticles}
                    </div>
                </div>
            </section>
        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(RegistrationPage);