import React from 'react';
import loading from './Rocket-Loading-Screen.gif'


const Loading = () => {
    return (
        <div style={loadStyle}>
        </div>
    )
}

const loadStyle = {
    backgroundImage: loading,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

export default Loading;