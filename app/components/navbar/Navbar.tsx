import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);

  const handleNavbarCollapse = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed);
  };

  return (
    <div className="navbar-container" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#3C8474', color: '#ECF4FC' }}>
      <div className="navbar" style={{ display: 'flex', alignItems: 'center', maxWidth: '800px', width: '100%' }}>
        <button className="navbar-toggle" onClick={handleNavbarCollapse} style={{ borderColor: '#5C9C8C', color: '#ECF4FC', fontSize: '1.5rem' }}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
        <div className={`navbar-collapse ${isNavbarCollapsed ? 'collapsed' : ''}`} style={{ backgroundColor: '#ACCCC4', marginLeft: '10px', padding: '10px' }}>
          <Link href="/home">
            <span style={{ color: '#5C9C8C', margin: '5px', fontSize: '1.2rem' }}>Home</span>
          </Link>
          <Link href="/account-profile">
            <span style={{ color: '#5C9C8C', margin: '5px', fontSize: '1.2rem' }}>Account Profile</span>
          </Link>
          <Link href="/bank-balance">
            <span style={{ color: '#5C9C8C', margin: '5px', fontSize: '1.2rem' }}>Bank Balance</span>
          </Link>
          <Link href="/change-password">
            <span style={{ color: '#5C9C8C', margin: '5px', fontSize: '1.2rem' }}>Change Password</span>
          </Link>
        </div>
        {/* Username moved to the right */}
        <p className="navbar-user-name" style={{ color: '#295B50', marginLeft: 'auto', marginRight: '10px', fontSize: '1.2rem' }}>
          John Doe
        </p>
      </div>
    </div>
  );
};

export default Navbar;
