import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Calendar.module.css';
import CalendarReact from 'react-calendar';
import {render} from "@testing-library/react";
import DayTimePicker from '@mooncake-dev/react-day-time-picker';



function Calendar() {

    // const [date, setDate] = useState(new Date());
    // const onChange = date => {
    //     setDate(date);
    // };

    const [date, setDate] = useState(new Date());

    const [isScheduling, setIsScheduling] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduleErr, setScheduleErr] = useState('');


    const handleScheduled = date => {
        setIsScheduling(true);
        setScheduleErr('');
        fakeRequest(date)
            .then(json => {
                setScheduleErr('');
                setIsScheduled(true);
                console.log('fake response: ', json);
            })
            .catch(err => {
                setScheduleErr(err);
            })
            .finally(() => {
                setIsScheduling(false);
            });
    }

    return (

        <div>
            {/*<CalendarReact onChange={onChange} value={date} />*/}
            {/*{console.log(date)}*/}
            {/*{date.toString()}*/}

            <DayTimePicker timeSlotSizeMinutes={30}
                           timeSlotValidator={timeSlotValidator}
                           onConfirm={handleScheduled}
                           isLoading={isScheduling}
                           isDone={isScheduled}
                           err={scheduleErr}/>


            <stuff></stuff>

        </div>


    )


}

function timeSlotValidator(slotTime) {
    const eveningTime = new Date(
        slotTime.getFullYear(),
        slotTime.getMonth(),
        slotTime.getDate(),
        18,
        0,
        0
    );
    const isValid = slotTime.getTime() > eveningTime.getTime();
    return isValid;
};

function fakeRequest(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Uncomment below to trigger error:
            // return reject('Error: KABOOM!');
            resolve({
                status: 'ok',
                scheduled: data
            });
        }, 2e3);
    });
}

const handleScheduled = dateTime => {
    console.log('scheduled: ', dateTime);
};


Calendar.propTypes = {};

Calendar.defaultProps = {};
// render(<Calendar />, document.querySelector("#root"));


export default Calendar;
