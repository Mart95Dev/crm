import './App.css';
import db from '../firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import Grid from './Grid';
import Form from './Form';

export type DataBaseType = {
  id: string;
  prenom: string;
  nom: string;
  email: string;
  compagnie: string;
  notes: string;
};

function App() {
  const initialUserprofil: DataBaseType[] = [];
  const [userProfil, setUserProfil] = useState(initialUserprofil);

  const getUserProfil = () => {
    getDocs(collection(db, 'contacts'))
      .then((querySnapshot) => {
        const newUserProfil: DataBaseType[] = querySnapshot.docs.map((doc) => {
          const data = doc.data() as DataBaseType;
          return {
            id: doc.id,
            prenom: data.prenom || '',
            nom: data.nom || '',
            email: data.email || '',
            compagnie: data.compagnie || '',
            notes: data.notes || '',
          };
        });
        setUserProfil(newUserProfil);
      })
      .catch((error) => {
        console.error(
          'Erreur lors de la récupération des profils utilisateur :',
          error
        );
      });
  };

  const deleteUserProfil = async (id: string) => {
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
