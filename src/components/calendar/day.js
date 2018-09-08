import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Day = (props) => {
    const {
        index,
        date,
        currentDay,
        firstDayInMonth,
    } = props;

    return (
        <div
            className={classNames('date', { 'date--today': index === currentDay - 1 })}
            style={{ gridColumnStart: index === 0 ? firstDayInMonth : '' }}
        >
            { date }
        </div>
    );
};

Day.propTypes = {
    index: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    currentDay: PropTypes.number.isRequired,
    firstDayInMonth: PropTypes.number.isRequired,
};

export default Day;
