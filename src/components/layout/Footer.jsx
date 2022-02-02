import React from 'react';
import github from './assets/imgs/github.jpg'

const footer = () => {
    const footerYear = new Date().getFullYear()


  return( 
  <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
       <img className='h-32' src={github} />
          <p className='text-cyan-500 text-base'> Copyright &copy; {footerYear} All rights reserved</p>
      </div>

  </footer>
  )
};

export default footer;
