import './App.css';
import React, {useEffect, useState} from "react";
import Header from './header/Header'

function App() {

  function move(to) {
    document.querySelector(`#${to}`).scrollIntoView(
      {
        behavior: "smooth"
      }
    )
  }

  const [hidden, setHidden] = useState(true)
  const [currentMenuElement, setCurrentMenuElement] = useState(0)
  const menuElements = [
    'home',
    'portfolio',
    'resume',
    'about',
    'contact'
    ]
  // TODO make count not 2!
  const blockSize = window.innerHeight / 2

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const position = Math.max(0, Math.ceil(window.pageYOffset / blockSize) - 1)
      // console.log(position);
      if (position !== currentMenuElement) {
        setCurrentMenuElement(position)
      }
      if (window.pageYOffset >= window.innerHeight / 100 * 8) {
        if (hidden) {
          setHidden(false)
        }
      } else {
        if (!hidden) {
          setHidden(true)
        }
      }
    })
  })

  return (
    <div className="App">
      <div className="background"/>
      <section id="home">
        <Header
          hidden={hidden}
          elements={menuElements}
          current={currentMenuElement}
          click={move}
        />
        <div className="content">
          <div className={`text${!hidden ? ' fixed' : ''}`}>
            <p> Hello, I'm </p>
            <p><strong> Gleb Voitenko </strong></p>
          </div>
          <div className="spacer"/>
        </div>
      </section>
      <section id="portfolio">
      </section>
    </div>
  )
}

export default App
