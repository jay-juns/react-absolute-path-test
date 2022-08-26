import React, { useState, useEffect, useRef } from 'react'
import Dev from 'dev/dev'


function Test() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOption = () => setIsOpen((show) => !show)
  const ref = useRef(null);

  const handleClickOutSide = (e) => {
    console.log(ref.current.contains(e.target))
    if (isOpen && !ref.current.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) document.addEventListener('mousedown', handleClickOutSide)
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide)
    }
  },[isOpen])

  return (
    <div className='wrapper'>
        <button className='btn' onClick={toggleOption}>클릭</button>
        {isOpen ? (
          <div className='open_area' ref={ref}>
            open?
          </div>
        ) : ''}
        <Dev />
        <button className='btn'>다른 btn</button>
    </div>
  )
}

export default Test