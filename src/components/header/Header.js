import {useEffect, useRef} from 'react'
import './header.css'
import logo from '../../assets/logo3.png'

import {Link, useLocation} from 'react-router-dom'

const headerNav = [
  {
    display: 'Characters',
    path: '/'
  },
  {
    display: 'Episode',
    path: '/episode'
  },
  {
    display: 'Location',
    path: '/location'
  }
]

const Header = () => {

  const {pathname} = useLocation()
  const headerRef = useRef(null)

  const active = headerNav.findIndex(e => e.path === pathname)


  useEffect(() => {
    const shrinkHeader = () => {
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink');
      }
    }

    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    }

  }, [])

  return (
    <div ref={headerRef} className="header">
      <div className='header-container'>
        <div className='logo'>
          
          <Link to="/">
          <img src={logo} className="logo-img" alt= "" ></img>
          </Link>
        </div>
        <ul className='nav-bar'>
          {
            headerNav.map((e,i)=> (
              <li key={i} className="nav-list-item">
                <Link to={e.path}>
                  {e.display}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header