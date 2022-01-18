import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  function logout() {
      setIsAuth(false);
      localStorage.removeItem('auth');
  }

  return (
    <div className='navbar'>
      <MyButton onClick={ logout }>
        Выйти
      </MyButton>
      <div className='navbar__item'>
        <Link to='/about'>О нас</Link>
        <Link to='/posts'>Посты</Link>
      </div>
    </div>
  );
}

export default Navbar;