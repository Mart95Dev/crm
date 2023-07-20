import { collection, addDoc } from 'firebase/firestore';
import db from '../firebase';

function Form() {
  const addContact = (e: Event) => {
    e.preventDefault();
    addDoc(collection(db, 'contacts'), {
      prenom: e.target.prenom.value,
      nom: e.target.nom.value,
      email: e.target.email.value,
      compagnie: e.target.compagnie.value,
      notes: e.target.notes.value,
    });

    //reset formulaire
    document.getElementById('addContact').reset();
  };

  return (
    <div className="row">
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
