import React from 'react';
import { TimePicker } from 'react-rainbow-components';
import { render } from '@testing-library/react';

const containerStyles = {
    maxWidth: 400,
};

class TimePickerExample extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            time: undefined,
            isLoading: true,
        };
    }
    render() {
        return (
            <TimePicker
                id="time-picker-1"
                value={this.state.time}
                label="TimePicker Label"
                onChange={value => this.setState({ time: value })}
                style={containerStyles}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
        )




    }

}

export default TimePickerExample;
