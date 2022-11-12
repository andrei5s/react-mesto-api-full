import React from 'react';
import logo from '../images/logo.svg';
import info from '../images/info.svg';
import close from '../images/close.svg';
import HeaderInfo from './HeaderInfo';

function Header(props) {
	const [ infoOpen, setInfoOpen ] = React.useState(false);

	function handleInfoChange(e) {
		setInfoOpen(!infoOpen);
	}

	return (
		<header className="header">
     
			{infoOpen && (
        
				<div className="header__info-for-small">
					<HeaderInfo onSignOut={props.onSignOut} email={props.email} />
				</div>
			)}
     
      <div className='header__info-menu'>
      <img className="header__logo" src={logo} alt="Логотип Место" />
				<div className="header__info">
					{infoOpen ? (
						<img className="header__info-close" src={close} alt="закрыть" onClick={handleInfoChange} />
					) : (
						<img className="header__info-icon" src={info} alt="Меню-инфо" onClick={handleInfoChange} />
					)}
				</div>
        
				<div className="header__info-for-big">
					<HeaderInfo onSignOut={props.onSignOut} email={props.email} />
				</div>
        </div>
		</header>
	);
}

export default Header;
