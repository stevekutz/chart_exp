import React from 'react';
import {
    VisualPicker,
    VisualPickerOption,
    VisualPickerOptionFooter,
} from 'react-rainbow-components';

const headerStyles = {
    fontSize: 24,
    color: '#061c3f',
    fontWeight: 300,
};

const titleStyles = {
    fontSize: 36,
    color: '#061c3f',
    fontWeight: 200,
};

const descriptionStyles = {
    fontSize: 14,
    color: '#a4a7b5',
    fontWeight: 300,
};

class SimpleVisualPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        return this.setState({ value });
    }

    render() {
        return (
            <VisualPicker
                id="visual-picker-component-5"
                label="Our Rainbow Options"
                value={this.state.value}
                onChange={this.handleOnChange}
            >
                <VisualPickerOption
                    name="option-1"
                    footer={
                        <VisualPickerOptionFooter
                            label="Rainbow Basic"
                            description="Complete service for teams of any size."
                        />
                    }
                >
                    <h2 style={titleStyles}>$30</h2>
                    <h3 style={descriptionStyles}>user/month</h3>
                </VisualPickerOption>
                <VisualPickerOption
                    name="option-2"
                    footer={
                        <VisualPickerOptionFooter
                            label="Rainbow Basic"
                            description="Everything you need to take support."
                        />
                    }
                >
                    <h2 style={titleStyles}>$60</h2>
                    <h3 style={descriptionStyles}>user/month</h3>
                </VisualPickerOption>
                <VisualPickerOption
                    name="option-3"
                    footer={
                        <VisualPickerOptionFooter
                            label="Rainbow Basic"
                            description="Complete support with customization."
                        />
                    }
                >
                    <h2 style={titleStyles}>$90</h2>
                    <h3 style={descriptionStyles}>user/month</h3>
                </VisualPickerOption>
            </VisualPicker>
        );
    }
}

export default SimpleVisualPicker;