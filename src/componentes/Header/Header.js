import React from 'react';
import Nike from '../../img/images/Nike.jpg';
import { Link } from 'react-router-dom';



function Header() {
  return (
      <header>
            <Link to='#'>
              <div className='logo'>
                <img src={Nike} alt ="logo" width='150'/>
              </div>
            </Link>
            <ul>
              <li>
                <Link to='/'> Inicio </Link> {/* // estos para cuando le demos click funciones la con dom router */}
              </li>
              <li>
                <Link to='/productos'>Productos</Link>
              </li>
            </ul>
            <div className=' cart'>
              <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span>

            </div>
      </header>
  );
}

export default Header;
