import React, { useEffect, useRef } from 'react';
import './style.scss';

function CustomPointer() {
    const ring = useRef(null);
    const center = useRef(null);

    const handleMouseMove = (event) => {
        if (ring && center) {
            ring.current.style.left = `${event.pageX}px`;
            ring.current.style.top = `${event.pageY}px`;
            center.current.style.left = `${event.pageX}px`;
            center.current.style.top = `${event.pageY}px`;
        }
        else{
            setTimeout(handleMouseMove, 100);
        }
    };

    useEffect(() => {
        handleMouseMove({ clientX: 0, clientY: 0 }); // Initial position
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleMouseMove);
        return () => {
            window.removeEventListener('resize', handleMouseMove);
        };
    }, []);

    return (
        <>
        <div ref={ring} className="ring"></div>
        <div ref={center} className="center"></div>
        </>
    );
}

export default CustomPointer;
