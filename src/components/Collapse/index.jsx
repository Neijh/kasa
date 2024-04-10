import chevron from '../../assets/arrow_back.png'
import { useState, useRef } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentHeight = useRef()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse__title">
        <p>{title}</p>
        <button onClick={handleClick} className="collapse__btn">
        
          <img
            className={isOpen ? 'rotate' : ''}
            src={chevron}
            alt="chevron icon"
          />
        </button>
      </div>

      <div 
        ref={contentHeight}
        className='collapse__content'
        style={
          isOpen 
          ? { height: contentHeight.current.scrollHeight } 
          : { height: '0px' }
        }
      >
        <p >
          {content}
          </p>
      </div>
    </div>
  )
}

export default Collapse