import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Programs from './components/Programs'
import Committee from './components/Committee'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />
      <About />
      <Programs />
      <Committee />
    </div>
  )
}

export default App