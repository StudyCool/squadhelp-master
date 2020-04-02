import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FormInput = (props) => {  const { label, input, type, classes, meta: { touched, error } } = props;

    const inputClassName = classNames(classes.input,
        {
            [classes.notValid]: touched && error,
            [classes.valid]: touched && !error,
        });

    return (
        <div className={classes.container}>
            <input {...input}
                   placeholder={label}
                   type={type}
                   className={inputClassName}/>
            {
                classes.warning && touched && error &&
                <span className={classes.warning}>
          {
              error
          }
        </span>
            }
        </div>
    );
};

FormInput.propTypes = {
        label: PropTypes.string,
        type: PropTypes.string,
        className: PropTypes.string,
        classes: PropTypes.string,
        placeholder: PropTypes.string,
    };

export default FormInput;