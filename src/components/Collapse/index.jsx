import chevron from '../../assets/arrow_back.png'
import { useState, useRef } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false) // State to manage collapse open/close
  const contentHeight = useRef() // Reference for content height

  // Toggle collapse open/close
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      {/* Collapse title */}
      <div className="collapse__title">
        <p>{title}</p>
        {/* Button to toggle collapse */}
        <button onClick={handleClick} className="collapse__btn">
          <img
            className={isOpen ? 'rotate' : ''}
            src={chevron}
            alt="chevron icon"
          />
        </button>
      </div>

      {/* Collapse content */}
      <div
        ref={contentHeight}
        className="collapse__content"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: '0px' }
        }
      >
        {/* Render content */}
        {Array.isArray(content) ? (
          // If content is an array, render each item individually
          content.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          // If content is not an array, render it as is
          <p>{content}</p>
        )}
      </div>
    </div>
  )
}

export default Collapse
