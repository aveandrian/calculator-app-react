import { useState } from 'react'
import './App.css'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(0)
  function selectTheme(){
    setSelectedTheme(prev => prev == 2 ? 0 : prev+1)
  }
  const activeStyle = {
    left: `${selectedTheme* 50}%`, 
    transform: `translateX(-${selectedTheme* 50}%`
  }
  
  return (
    <>
      <main>
        <section className='header'>
          <p className='title'>calc</p>
          <div className='theme-choose-container'>
              <div className='theme-choose-wrapper'>
                <div className='theme-choose-numbers'>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
                <div className='theme-choose-slider-wrapper'>
                  <p className='theme-selector-title'>THEME</p>
                  <div className='slider' onClick={selectTheme}>
                    <div className='slider-circle' style={activeStyle}></div>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className='result'>

        </section>
        <section className='calc-grid'>
            <div className='calc-number'>7</div>
            <div className='calc-number'>8</div>
            <div className='calc-number'>9</div>
            <div className='calc-del'>DEL</div>
            <div className='calc-number'>4</div>
            <div className='calc-number'>5</div>
            <div className='calc-number'>6</div>
            <div className='calc-sum'>+</div>
            <div className='calc-number'>1</div>
            <div className='calc-number'>2</div>
            <div className='calc-number'>3</div>
            <div className='calc-minus'>-</div>
            <div className='calc-dot'>.</div>
            <div className='calc-number'>0</div>
            <div className='calc-divide'>/</div>
            <div className='calc-multiply'>X</div>
            <div className='calc-reset'>RESET</div>
            <div className='calc-equal'>=</div>
        </section>
      </main>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </>
  )
}

export default App
