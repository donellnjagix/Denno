import Link from 'next/link';
import { useState } from 'react';


const Navbar: React.FC = () => {
 const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

 const handleNavbarCollapse = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
 };

 return (
    <div className="navbar">
      <button className="navbar-toggle" onClick={handleNavbarCollapse}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className={`navbar-collapse ${isNavbarCollapsed ? 'collapsed' : ''}`}>
        <div className="navbar-user">
          <img className="navbar-user-image" src="public\vercel.svg" alt="Profile Picture" />
          <p className="navbar-user-name">John Doe</p>
        </div>
        <Link href="/home">
          <span>Home</span>
        </Link>
        <Link href="/account-profile">
          <span>Account Profile</span>
        </Link>
        <Link href="/bank-balance">
          <span>Bank Balance</span>
        </Link>
        <Link href="/change-password">
          <span>Change Password</span>
        </Link>
      </div>
    </div>
 );
};

export default Navbar;