import React, { useEffect, useState } from 'react';
import { useAuth, logout as firebaseLogout } from '../../firebase'; // ou o caminho correto para o arquivo firebase.js

function ProfilePage() {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Verificar se o usuário está autenticado
    if (user) {
      // Aqui você pode acessar os dados do usuário e atualizar o estado para renderizar na página
      setUserData({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        // Outras informações que você queira exibir
      });
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await firebaseLogout(); // Chama a função de logout do Firebase
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  // Renderizar os dados do usuário na página
  return (
    <div>
      {userData ? (
        <div>
          <h1>Perfil do Usuário</h1>
          <p>Nome: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Aqui você pode adicionar mais informações do usuário */}
          <img src={userData.photoURL} alt="Foto de Perfil" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default ProfilePage;
