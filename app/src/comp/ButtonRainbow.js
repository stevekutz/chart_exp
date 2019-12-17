import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-rainbow-components';

function ButtonRainbow() {
    return (
        <Button
            label="Hello World!"
            variant="brand"
            onClick={() => alert('Hello World!')}
        />
    );
}

export default ButtonRainbow;