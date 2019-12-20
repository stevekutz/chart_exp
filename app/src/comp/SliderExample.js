import React from 'react';
import { Slider } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 700,
};

class SliderExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 200,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                
                <div
                    className="rainbow-m-vertical_xx-large rainbow-p-around_large rainbow-m_auto"
                    style={containerStyles}
                >
                    <Slider
                        label="Slider label"
                        min="100"
                        max="400"
                        step="50"
                        value={value}
                        onChange={this.onChange}
                    />
                </div>
            </div>
        );
    }
}

export default SliderExample;