import React, { useEffect, useState } from 'react';
import { useAuth, logout as firebaseLogout } from '../../firebase';
import './profileComponent.css';

function ProfilePage() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      setUserData({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await firebaseLogout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="container mt-5">
      {userData ? (
        <div className="card profile-card">
          <img src={userData.photoURL} className="card-img-top profile-image" />
          <div className="card-body">
            <h1 className="card-title">Perfil</h1>
            <p className="card-text"><strong>Nome:</strong> {userData.name}</p>
            <p className="card-text"><strong>Email:</strong> {userData.email}</p>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
