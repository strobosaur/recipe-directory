import { Link } from 'react-router-dom'

// CSS STYLES
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Recipe Wizard</h1>
        </Link>
        <Link to="/create">
          Create Recipe
        </Link>
      </nav>      
    </div>
  )
}
