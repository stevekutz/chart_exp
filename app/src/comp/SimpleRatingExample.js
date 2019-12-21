import React from 'react';
import { Card, ButtonGroup, ButtonIcon, Rating } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const cardStyles = {
    width: 300,
};

const imageStyles = {
    borderTopLeftRadius: '0.875rem',
    borderTopRightRadius: '0.875rem',
    height: 170,
    width: '100%',
    backgroundImage: 'url(images/illustrations/Illustration-rainbow-4.svg)',
    backgroundSize: 'cover',
};

class SimpleRatingExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '3',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        return this.setState({ value: event.target.value });
    }

    render() {
        return(
            <div className="rainbow-p-bottom_xx-large">

            <div className="rainbow-align-content_center">
                <Card
                    style={cardStyles}
                    footer={
                        <div>
                            <div className="rainbow-flex rainbow-flex_column rainbow-align_start rainbow-m-bottom_x-small">
                                <h3 className="rainbow-font-size-heading_medium rainbow-color_dark-1">
                                    Rainbow
                                </h3>
                                <p className="rainbow-color_gray-4">
                                    Give us your rate about how you like this…
                                </p>
                            </div>
                        </div>
                    }
                >
                    <div style={imageStyles} />
                </Card>
            </div>
            <Rating value={this.state.value} onChange={this.handleOnChange} />
        </div>
            ) 
    }
}


export default SimpleRatingExample;