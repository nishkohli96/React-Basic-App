import React, { useState, useEffect } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import TextField from '@material-ui/core/TextField';

/* Check this sandbox 
    https://codesandbox.io/s/distracted-hopper-31666?file=/src/MultiDatePicker.js:373-386 */

const MultiDatePicker = ({ inputDate }) => {
    const [pickerDate, setPickerDate] = useState(new DateObject());

    const CustomComponent = (props) => {
        return (
            <TextField
                label="Choose Date(s)"
                onClick={props.openCalendar}
                value={props.stringDate}
            />
        );
    };

    useEffect(() => setPickerDate(inputDate), [inputDate]);

    return (
        <DatePicker
            format="DD MMM YYYY"
            value={pickerDate}
            onChange={setPickerDate}
            multiple={true}
            style={styles.picker}
            calendarPosition="top-center"
            type="custom"
            render={<CustomComponent />}
            minDate={new DateObject()} //{inputDate}
            maxDate={new DateObject().add(7, 'days')}
        />
    );
    /**
     * You must install version 1.7.2 for this
     * availble positions :
     * "auto",
     * "top-left", "bottom-left",
     * "top-right", "bottom-right",
     * "top-center", "bottom-center"
     */
};

const styles = {
    picker: {
        backgroundColor: 'white',
        height: 25,
        borderRadius: '8px',
        fontSize: '15px',
        padding: '3px 10px',
        width: 200,
    },
};

export default MultiDatePicker;
