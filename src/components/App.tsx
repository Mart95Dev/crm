import './App.css';
import db from '../firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import Grid from './Grid';
import Form from './Form';

export type DataBaseType = {
  prenom: string;
  nom: string;
  email: string;
  compagnie: string;
  notes: string;
};

function App() {
  const [userProfil, setUserProfil] = useState<DataBaseType>([]);

  const getUserProfil = async () => {
    await getDocs(collection(db, 'contacts')).then((querySnapshot) => {
      const newUserProfil = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUserProfil(newUserProfil);
    });
  };

  const deleteUserProfil = async (id: number) => {
    await deleteDoc(doc(db, 'contacts', id));
  };

  useEffect(() => {
    getUserProfil();
  }, [userProfil]);

  return (
    <div>
      <div className="navbar-fixed">
        <nav className="blue lighten-2">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Contacts
            </a>
          </div>
        </nav>
      </div>
      <div>
        <Form />
        <Grid users={userProfil} deleteUserProfil={deleteUserProfil} />
      </div>
    </div>
  );
}

export default App;
