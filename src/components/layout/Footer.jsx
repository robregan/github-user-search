import React from 'react';

const footer = () => {
    const footerYear = new Date().getFullYear()


  return( 
  <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <div>
        {/* put svg path here later  */}
          <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>

  </footer>
  )
};

export default footer;
