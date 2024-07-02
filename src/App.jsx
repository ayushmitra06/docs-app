import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900'>
      <Background/>
      <Foreground/>
    </div>
    
  )
}

export default App