import './Header.css'
import React, {useEffect, useState} from 'react'

export default function Header({current, hidden, elements, click}) {

  const [hovered,setHovered] = useState(false)

  useEffect(() => {
    const menu = document.querySelector('header').childNodes.item(0).childNodes
    menu.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        setHovered(true)
      })

      item.addEventListener('mouseout', () => {
        setHovered(false)
      })
    })

  })

  return (
    <header
      id="main"
      className={`${(!hidden ? 'fixed ' : '')}${hovered ? 'hovered ' : ''}`}
    >
      <ul>
        {elements.map((value, index) =>
          <li key={value}
              onClick={() => click(value)}
              className={current === index ? 'colored' : ''}
          >
            <p> {value} </p>
          </li>)
        }
      </ul>
    </header>
  )
}

