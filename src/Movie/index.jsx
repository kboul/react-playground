import React from 'react';
import PropTypes from 'prop-types';
import withTooltip from '../hocs/withTooltip';
import styles from './index.module.css';

const Movie = ({ showTooltip }) => {
    return (
        <>
            Movie
            {showTooltip && <div className={styles.tooltip}>Some tooltip</div>}
        </>
    );
};

Movie.propTypes = {
    showTooltip: PropTypes.bool.isRequired
};

export default withTooltip(Movie);
