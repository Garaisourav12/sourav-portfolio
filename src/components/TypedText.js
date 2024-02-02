import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';

function TypedText() {
    // const texts = ['React Frontend Developer', 'NodeJs Backend Developer', 'Mern Fullstack Developer'];
    const texts = ['React Frontend Developer'];

    return (
        <ReactTyped
            strings={texts}
            typeSpeed={90}
            backSpeed={90}
            backDelay={1500}
            loop
        />
    );
}

export default TypedText;
