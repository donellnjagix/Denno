import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavbarCollapse = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <div className="navbar-container" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#3C8474', color: '#ECF4FC' }}>
      <div className="navbar" style={{ display: 'flex', alignItems: 'center', maxWidth: '600px', width: '100%' }}>
        <button className="navbar-toggle" onClick={handleNavbarCollapse} style={{ borderColor: '#5C9C8C', color: '#ECF4FC' }}>
          <span className="navbar-toggle-icon"></span>
        </button>
        <div className={`navbar-collapse ${isNavbarCollapsed ? 'collapsed' : ''}`} style={{ backgroundColor: '#ACCCC4', marginLeft: '10px' }}>
          <div className="navbar-user">
            <img
              className="navbar-user-image"
              src="/vercel.svg"
              alt="Profile Picture"
              style={{ borderRadius: '50%', border: '2px solid #40847C' }}
            />
            <p className="navbar-user-name" style={{ color: '#295B50', marginLeft: '5px' }}>
              John Doe
            </p>
          </div>
          <Link href="/home">
            <span style={{ color: '#5C9C8C', margin: '5px' }}>Home</span>
          </Link>
          <Link href="/account-profile">
            <span style={{ color: '#5C9C8C', margin: '5px' }}>Account Profile</span>
          </Link>
          <Link href="/bank-balance">
            <span style={{ color: '#5C9C8C', margin: '5px' }}>Bank Balance</span>
          </Link>
          <Link href="/change-password">
            <span style={{ color: '#5C9C8C', margin: '5px' }}>Change Password</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
