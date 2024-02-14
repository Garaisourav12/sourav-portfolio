import React, { useEffect, useRef } from 'react';
import './style.scss';

function CustomPointer() {
    const ring = useRef(null);
    const center = useRef(null);


    // Function to check if two elements overlap
    function isOverlapping(event, elem2) {
        // const rect1 = elem1.getBoundingClientRect();
        const rect2 = elem2.getBoundingClientRect();

        return !(event.clientX <= rect2.left ||
                event.clientX >= rect2.right ||
                event.clientY <= rect2.top ||
                event.clientY >= rect2.bottom);
    }

    // Function to check if the moving element is overlapping with any target element
    function checkOverlap(event) {
        let overlapped = false;
        const targetElements = document.querySelectorAll('.pointers');

        targetElements.forEach(targetElement => {
            if (isOverlapping(event, targetElement)) {
                ring.current.style.display = 'none';
                center.current.style.display = 'none';
                overlapped = true
            }
        });
        if(!overlapped){
            ring.current.style.display = 'block';
            center.current.style.display = 'block';
        }
    }

    const handleMouseMove = (event) => {
        if (ring && center) {
            ring.current.style.left = `${event.clientX}px`;
            ring.current.style.top = `${event.clientY}px`;
            center.current.style.left = `${event.clientX}px`;
            center.current.style.top = `${event.clientY}px`;
            checkOverlap(event);
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

    useEffect(() => {
        window.addEventListener('scroll', handleMouseMove);
        // return () => {
        //     window.removeEventListener('scroll', handleMouseMove);
        // };
    }, []);

    return (
        <>
        <div ref={ring} className="ring"></div>
        <div ref={center} className="center"></div>
        </>
    );
}

export default CustomPointer;
