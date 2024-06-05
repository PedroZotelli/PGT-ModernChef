import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth'; // Adicionando signOut
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage'; // Importando getStorage

const firebaseConfig = {
  apiKey: "AIzaSyBNZcR8-ZjrUlSLWmX5ccE-wvo_WUWVdcQ",
  authDomain: "modernchef-8e8a2.firebaseapp.com",
  projectId: "modernchef-8e8a2",
  storageBucket: "modernchef-8e8a2.appspot.com",
  messagingSenderId: "177934182775",
  appId: "1:177934182775:web:034f6ec7278ffa54f45972",
  measurementId: "G-BQFNBNHRXT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app); // Inicializando o Storage

// Hook personalizado para gerenciar o estado de autenticação
export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return { user };
};

// Função para criar um novo usuário com e-mail e senha
export const signUpWithEmailPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

// Função para fazer logout
export const logout = async () => {
  try {
    await signOut(auth); // Chama a função de logout do Firebase
  } catch (error) {
    throw error;
  }
};

// Exporte o objeto de autenticação (auth), o objeto do aplicativo Firebase (app) e o storage
export { auth, app, storage };

// Função para inicializar o aplicativo Firebase
export const initializeFirebaseApp = () => {
  return app;
};