import React from 'react'
import './style.scss'

function Wrapper({children}) {
  return (
    <div className='wrapper'>
        {children}
    </div>
  )
}

export default Wrapper