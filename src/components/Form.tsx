import './form.css';
import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase';
import { FormEvent } from 'react';

type AddContactFunction = (e: FormEvent<HTMLFormElement>) => Promise<void>;

function Form() {
  const addContact: AddContactFunction = async (e) => {
    e.preventDefault();
    const resetForm = document.getElementById('addContact') as HTMLFormElement;

    const target = e.target as typeof e.target & {
      prenom: { value: string };
      nom: { value: string };
      email: { value: string };
      compagnie: { value: string };
      notes: { value: string };
    };

    const contactData = {
      prenom: target.prenom.value,
      nom: target.nom.value,
      email: target.email.value,
      compagnie: target.compagnie.value,
      notes: target.notes.value,
    };

    await addDoc(collection(db, 'contacts'), contactData);

    resetForm.reset();
  };

  return (
    <div className="row form-space-top">
      <form className="col s12" id="addContact" onSubmit={addContact}>
        <div className="row">
          <div className="input-field col s6">
            <input type="text" id="prenom" className="validate" />
            <label htmlFor="prenom">Prénom</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="nom" className="validate" />
            <label htmlFor="nom">Nom de famille</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input type="text" id="email" className="validate" />
            <label htmlFor="email">email</label>
          </div>
          <div className="input-field col s6">
            <input type="text" id="compagnie" className="validate" />
            <label htmlFor="compagnie">Compagnie</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input type="text" id="notes" className="validate" />
            <label htmlFor="notes">Notes</label>
          </div>
          <div className="input-field col s4">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
