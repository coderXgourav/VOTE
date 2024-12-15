import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='nav'>
                <div><img className='logo' src="https://img.freepik.com/premium-vector/word-vote-green-checkmark-instead-letter-v-box-frame-electorate_165079-2948.jpg?w=1060" alt="" /></div>
                <div>
                    <ul className='navMenu'>
                        <Link to="/"><li className='menu'>Home</li></Link>
                        <li className='menu'>Contact Us</li>
                        <Link to="/login"><li className='menu'>Login</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
