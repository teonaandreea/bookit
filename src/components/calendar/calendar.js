import React from 'react';
import PropTypes from 'prop-types';
import Day from './day';

class Calendar extends React.Component {
    static handleDayClick() {
        console.log('hello');
    }

    render() {
        const {
            months,
            days,
            dates,
            currentMonth,
            currentYear,
            currentDay,
            firstDayInMonth,
        } = this.props;

        return (
            <div className="calendar">
                <div className="month">
                    <h2>
                        {`${months[currentMonth]} ${currentYear}`}
                    </h2>
                </div>
                <div className="row">
                    {
                        days.map(day => (
                            <div className="day" key={day}>
                                { day }
                            </div>
                        ))
                    }
                </div>
                <div className="row">
                    {
                        dates.map((date, i) => (
                            <Day
                                key={date}
                                index={i}
                                date={date}
                                currentDay={currentDay}
                                firstDayInMonth={firstDayInMonth}
                                onClick={this.handleDayClick}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

Calendar.propTypes = {
    months: PropTypes.arrayOf(PropTypes.string).isRequired,
    days: PropTypes.arrayOf(PropTypes.string).isRequired,
    dates: PropTypes.arrayOf(PropTypes.number).isRequired,
    currentMonth: PropTypes.number.isRequired,
    currentYear: PropTypes.number.isRequired,
    currentDay: PropTypes.number.isRequired,
    firstDayInMonth: PropTypes.number.isRequired,
};

export default Calendar;
