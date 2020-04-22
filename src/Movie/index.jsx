import React from 'react';
import PropTypes from 'prop-types';
import withTooltip from '../hocs/withTooltip';
import styles from './index.module.css';

const Movie = ({ showTooltip }) => {
    return (
        <>
            <span>Movie</span>
            <br />
            {showTooltip && <div className={styles.tooltip}>Some tooltip</div>}
            <br />
        </>
    );
};

Movie.propTypes = {
    showTooltip: PropTypes.bool.isRequired
};

export default withTooltip(Movie);
