import './App.css'

function App() {

  return (
    <>
      <main>
        <section className='header'>
          <img className='logo' />
         
          <div className='theme-choose-container'>
            
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

      <footer class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </>
  )
}

export default App
