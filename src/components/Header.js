import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <img src="http://i.imgur.com/KDIDiSE.png" />
        <div>
          <span>Meu Perfil &nbsp;</span>
          
          <img className="avatar" src="https://avatars2.githubusercontent.com/u/12152636?v=4" />
        </div>
      </nav>
    </header>
  );
}

export default Header;