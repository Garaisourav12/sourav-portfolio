import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles if not already imported
import './style.scss'; // Assuming you have a separate style file

function SkillMeter({ percent }) {
    const [val, setVal] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            setVal((prevVal) => {
                const nextVal = prevVal + 1;
                if(nextVal > percent) clearInterval(timer);
                return nextVal > percent ? percent : nextVal;
            });
        }, 500 / percent);

        // return () => clearInterval(timer);
    }, []);

    return (
        <div className='skill-meter'>
            <CircularProgressbar
                value={val}
                maxValue={100}
                styles={buildStyles({
                    // Customize the path color based on the value
                    pathColor: val < 50 ? 'red' : val < 75 ? 'orange' : 'green',
                })}
            />
            <p>{val}%</p>
        </div>
    );
}

export default SkillMeter;