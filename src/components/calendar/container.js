import _ from 'lodash';
import React from 'react';
import Calendar from './calendar';
import * as constants from './constants';

function CalendarContainer() {
    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const firstDayInMonth = (month, year) => new Date(`${year.toString()}-${(month + 1).toString()}-01`).getDay();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();

    const dates = _.range(1, daysInMonth(currentMonth, currentYear) + 1);
    const firstDay = firstDayInMonth(currentMonth, currentYear);

    return (
        <Calendar
            dates={dates}
            days={constants.DAYS}
            months={constants.MONTHS}
            currentMonth={currentMonth}
            currentYear={currentYear}
            currentDay={currentDay}
            firstDayInMonth={firstDay}
        />
    );
}

export default CalendarContainer;
