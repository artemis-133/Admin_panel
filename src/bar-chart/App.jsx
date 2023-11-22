import React, { useState } from 'react';
import ComponentA from './Home';
import ComponentB from './CustComponent';
import ComponentC from './SaleComponent';
import Login from './Login';

const App = () => {
  const [userType, setUserType] = useState(null);

  

  const handleLogin = (username, password) => {
    // Simulating login based on different users
    if (username === 'user1' && password === 'pass1') {
      setUserType('user1');
    } else if (username === 'user2' && password === 'pass2') {
      setUserType('user2');
    }
  };

  const handleLogout = () => {
    setUserType(null);
  };

  return (
    <div>
      {!userType ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <div>
          {userType === 'user1' && <ComponentA />}
          {userType === 'user2' && (
            <div>
              <ComponentB />
              <ComponentC />
            </div>
          )}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
