// a named import from the react router library
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
        {/* like saying <a href='/'> */}
        <Link to='/'>
            <div>
                Crypto Prices
            </div>
        </Link>
        <Link to='/currencies'>
            <div>
                Currencies
            </div>
        </Link>
    </div>
  )
}
