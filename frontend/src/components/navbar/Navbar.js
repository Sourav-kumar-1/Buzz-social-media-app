import Logo from '../../assets/logo.png';
import UserPhoto from '../../assets/user-photo.avif'
import { BsMessenger, BsPersonFill } from 'react-icons/bs';
import './navbar.css'
const Navbar = () => {
    return (
        <nav className="main-nav">

            <div className="left-nav">
                <a href= "#"><img src={Logo} alt='' className='logo'></img></a>
                
            </div>

            <div className="right-nav">
                <div className='username'>
                    <img src={UserPhoto} alt='' className='user-image'></img>
                    <div>Shekhar Aggarwal</div>
                </div>
                <div className='icons'>
                    <div className='msg-icon'><BsMessenger/></div>
                    <div className='person-icon'><BsPersonFill/></div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar