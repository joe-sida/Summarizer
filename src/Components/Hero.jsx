import React from 'react'


import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="Sumz logo" className='w-40 object-contain' />
        </nav>

        <h1 className='head_text'>
            Summarize Article With <br className='max-md:hidden'/>
            <span className='orange_gradient '>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc'>
            Summarize your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries

        </h2>
    </header>
    
  )
}

export default Hero 