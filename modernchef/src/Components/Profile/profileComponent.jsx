import React, { useEffect, useState } from 'react';
<<<<<<< Updated upstream
import { useAuth, logout as firebaseLogout } from '../../firebase';
import './profileComponent.css';

function ProfilePage() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
=======
import { useAuth, logout } from '../../firebase';
import { storage } from '../../firebase'; // Importando o storage
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import styled from 'styled-components';
import AddItem from '../AddItem';
import DeleteItem from '../DeleteItem';
import GetItem from '../GetItem';
import './profileComponent.css';

const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 40px auto;
    font-family: 'Sora', sans-serif;
`;

const ProfileHeader = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const ProfileImage = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: cover;
`;

const ProfileInfo = styled.div`
    margin-top: 20px;
    text-align: center;
`;

const ProfileName = styled.h1`
    font-size: 1.8rem;
    margin: 0;
    color: #333;
`;

const ProfileEmail = styled.p`
    font-size: 1rem;
    color: #666;
    margin: 5px 0;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    margin: 5px;

    &:hover {
        background-color: #0056b3;
    }
`;

const CrudButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

function ProfilePage() {
    const { user } = useAuth();
    const [userData, setUserData] = useState(null);
    const [view, setView] = useState('');
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
>>>>>>> Stashed changes

  useEffect(() => {
    if (user) {
      setUserData({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

<<<<<<< Updated upstream
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
=======
    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (image && user) {
            const imageRef = ref(storage, `profileImages/${user.uid}/${image.name}`);
            uploadBytes(imageRef, image).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setUrl(url);
                    updateProfile(user, { photoURL: url }).then(() => {
                        setUserData({
                            ...userData,
                            photoURL: url,
                        });
                        console.log('Profile updated successfully!');
                    }).catch((error) => {
                        console.error('Error updating profile:', error);
                    });
                });
            });
        }
    };

    const handleLogout = async () => {
        try {
            await logout(); // Certifique-se de que `logout` é exportado corretamente de 'firebase.js'
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="container mt-5">
            <Card>
                {userData ? (
                    <div className="profile-card">
                        <ProfileHeader>
                            <ProfileImage src={userData.photoURL} alt="Profile" />
                            <ProfileInfo>
                                <ProfileName>{userData.name}</ProfileName>
                                <ProfileEmail>{userData.email}</ProfileEmail>
                            </ProfileInfo>
                        </ProfileHeader>
                        <input type="file" onChange={handleImageChange} />
                        <Button onClick={handleUpload}>Upload</Button>
                        <Button onClick={handleLogout}>Logout</Button>
                        <CrudButtons>
                            <Button onClick={() => setView('ADD')}>ADICIONAR</Button>
                            <Button onClick={() => setView('DELETE')}>REMOVER</Button>
                            <Button onClick={() => setView('GET')}>CONSULTAR</Button>
                        </CrudButtons>
                        {view === 'ADD' && <AddItem />}
                        {view === 'DELETE' && <DeleteItem />}
                        {view === 'GET' && <GetItem />}
                    </div>
                ) : (
                    <div className="text-center">Loading...</div>
                )}
            </Card>
>>>>>>> Stashed changes
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
