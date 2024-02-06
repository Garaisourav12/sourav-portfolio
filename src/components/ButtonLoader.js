import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

function ButtonLoader() {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <ThreeDots
                visible={true}
                height="20"
                width="50"
                color="var(--bs-white)"
                radius="3"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default ButtonLoader