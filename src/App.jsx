import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [input, setInput] = useState('')
  const [sum, setSum] = useState(null)
  const [result, setResult] = useState()
  const [stack, setStack] = useState([])
  const ops = ['/', '*', "+", "-"]

  useEffect(() => {
    let savedTheme = window.localStorage.getItem('theme')
    if(savedTheme != null)
      return setSelectedTheme(savedTheme)
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    if (darkModeMediaQuery.matches) {
      return setSelectedTheme(2)
    } else if (lightModeMediaQuery.matches) {
      return setSelectedTheme(1)
    } else {
      return setSelectedTheme(0)
    }
  }, []);

  useEffect(()=>{
    console.log("selected theme in effect", selectedTheme)
    if(selectedTheme !== null)
      window.localStorage.setItem('theme', selectedTheme)
  },[selectedTheme])

  useEffect(()=>{
    if(stack[stack.length-1] == '='){
      let sum = stack.join('').replaceAll(',','.');
      let res = eval(sum.substring(0,sum.length-1)).toString()
      if (res.length > 12)
        res = res.substring(0, 12)
      setSum(res)
      setResult(res)
    }
  }, [stack])

  useEffect(()=>{
    if(result)
      setStack([result])
  },[result])
  

  function handleClick(e){
    setSum(null)
    if(stack.length==1)
      setStack([])
    setInput(prev => prev + e.target.getAttribute('name'))
  }

  function handleClickOperation(e){
    setSum(null)  
    if(stack.length < 2 && e.target.getAttribute('name') == '=')
      return
    if(input == '' && ops.includes(stack.at(stack.length-1))){
      setStack(prev => {
        prev.pop()
        prev.push(e.target.getAttribute('name'))
        return  [...prev]
      })
      return
    }
    setStack(prev => [...prev, input, e.target.getAttribute('name')])
    setInput('')
  }

  function deleteSymbol(){
    setInput(prev => prev.substring(0,prev.length-1))
  }

  function reset(){
    setInput('')
    setStack([])
    setResult(null)
    setSum(null)
  }

  function selectTheme(){
    setSelectedTheme(prev => prev == 2 ? 0 : parseInt(prev+1))
  }

  const activeStyle = {
    left: `${selectedTheme* 50}%`, 
    transform: `translateX(-${selectedTheme* 50}%`
  }
  
  return (
    <main data-theme={`theme-${selectedTheme}`}>
      <div className='main-wrapper'>
        <section className='header'>
          <p className='title'>calc</p>
          <div className='theme-choose-container'>
              <div className='theme-choose-wrapper'>
                <div className='theme-choose-numbers'>
                  <p className='theme-choose-numbers-item'>1</p>
                  <p className='theme-choose-numbers-item'>2</p>
                  <p className='theme-choose-numbers-item'>3</p>
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
            <p className='result-text'>{sum ? sum : input}</p>
        </section>
        <section className='calc-grid'>
            <div className='calc-number calc-item' >
              <div className='calc-item-text' name='7' onClick={handleClick}>7</div>
            </div>
            <div className='calc-number calc-item' >
              <div className='calc-item-text' name='8' onClick={handleClick}>8</div>
            </div>
            <div className='calc-number calc-item' >
              <div className='calc-item-text' name='9' onClick={handleClick}>9</div>
            </div>
            <div className='calc-del calc-item' >
              <div className='calc-del-item calc-item-text' onClick={deleteSymbol}>DEL</div>
            </div>
            <div className='calc-number calc-item'  >
              <div className='calc-item-text' name='4' onClick={handleClick}>4</div>
            </div>
            <div className='calc-number calc-item' >
              <div className='calc-item-text' name='5' onClick={handleClick}>5</div>
            </div>
            <div className='calc-number calc-item' >
              <div className='calc-item-text' name='6' onClick={handleClick}>6</div>
            </div>
            <div className='calc-sum calc-item' >
              <div className='calc-item-text' name='+' operation='plus' onClick={handleClickOperation}>+</div>
            </div>
            <div className='calc-number calc-item'>
              <div className='calc-item-text'  name='1' onClick={handleClick}>1</div>
            </div>
            <div className='calc-number calc-item' >
              <div className='calc-item-text' name='2' onClick={handleClick}>2</div>
            </div>
            <div className='calc-number calc-item' >
              <div className='calc-item-text' name='3' onClick={handleClick}>3</div>
            </div>
            <div className='calc-minus calc-item' >
              <div className='calc-item-text' name='-' operation='minus' onClick={handleClickOperation}>-</div>
            </div>
            <div className='calc-dot calc-item'>
              <div className='calc-item-text'  name=',' onClick={handleClick}>.</div>
            </div>

            <div className='calc-number calc-item' >
              <div className='calc-item-text' name='0' onClick={handleClick}>0</div>
            </div>
            <div className='calc-divide calc-item' >
              <div className='calc-item-text' name='/' operation='divide' onClick={handleClickOperation}>/</div>
            </div>
            <div className='calc-multiply calc-item' >
              <div className='calc-item-text' name='*' operation='multiply' onClick={handleClickOperation}>x</div>
            </div>
            <div className='calc-reset calc-item' >
              <div className='calc-reset-item calc-item-text' onClick={reset}>RESET</div>
            </div>
            <div className='calc-equal calc-item' >
              <div className='calc-equal-item calc-item-text' name='=' operation='equal' onClick={handleClickOperation} >=</div>
            </div>
        </section>
      </div>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </main>
  )
}

export default App
