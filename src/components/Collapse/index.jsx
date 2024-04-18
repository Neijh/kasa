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

// import chevron from '../../assets/arrow_back.png'
// import { useState } from 'react'

// function Collapse({ title, content }) {
//   const [isOpen, setIsOpen] = useState(false)

//   const handleClick = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <div className="collapse">
//       <div className="collapse__title" onClick={handleClick}>
//         <p>{title}</p>
//         <button className="collapse__btn">
//           <img
//             className={isOpen ? 'rotate' : ''}
//             src={chevron}
//             alt="chevron icon"
//           />
//         </button>
//       </div>

//       <div className='collapse__content' style={{ maxHeight: isOpen ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
//         {Array.isArray(content) ? (
//           // If content is an array, render each item individually
//           content.map((item, index) => <p key={index}>{item}</p>)
//         ) : (
//           // If content is not an array, render it as is
//           <p>{content}</p>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Collapse