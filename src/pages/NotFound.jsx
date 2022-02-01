import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'



const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
          <div className="max-w-lg">
              <h1 className="text-6xl font-bold mb-8">
                   what do now?
              </h1>
              <p className="text-5xl mb-8">404 - page not found </p>
              <div>
              <span> ..oops </span>
              </div>
              <Link to="/" className="btn btn-primary btn-lg">
                <FaHome className="mr-2"/>
                    Back to Home
              </Link>
          </div>
      </div>
    </div>

  )
};

export default NotFound;
