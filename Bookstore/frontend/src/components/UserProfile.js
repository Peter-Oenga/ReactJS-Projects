import React, { useEffect, useState } from 'react';
import API from '../api';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get('users/1/').then(res => {
      setUser(res.data);
    });
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
