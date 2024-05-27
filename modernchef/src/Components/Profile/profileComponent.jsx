import React, { useEffect, useState } from 'react';
import { useAuth, logout } from '../../firebase'; // Verifique se o `logout` é exportado corretamente de 'firebase.js'
import styled from 'styled-components';
import AddItem from '../AddItem';
import DeleteItem from '../DeleteItem';
import './profileComponent.css';

const Card = styled.div`
    background: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: auto;
`;

const Button = styled.button`
    padding: 10px;
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

function ProfilePage() {
    const { user } = useAuth();
    const [userData, setUserData] = useState(null);
    const [view, setView] = useState('');

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
            await logout(); // Certifique-se de que `logout` é exportado corretamente de 'firebase.js'
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div className="container mt-5">
            <Card>
                {userData ? (
                    <div className="card profile-card">
                        <img src={userData.photoURL} className="card-img-top profile-image" alt="Profile" />
                        <div className="card-body">
                            <h1 className="card-title">Perfil</h1>
                            <p className="card-text"><strong>Nome:</strong> {userData.name}</p>
                            <p className="card-text"><strong>Email:</strong> {userData.email}</p>
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">Loading...</div>
                )}
                <div className="crud-buttons">
                    <Button onClick={() => setView('ADD')}>ADICIONAR</Button>
                    <Button onClick={() => setView('DELETE')}>REMOVER</Button>
                </div>
                {view === 'ADD' && <AddItem />}
                {view === 'DELETE' && <DeleteItem />}
            </Card>
        </div>
    );
}

export default ProfilePage;