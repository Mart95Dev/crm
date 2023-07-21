import { DataBaseType } from './App';
import './single.css';

type Props = {
  user: DataBaseType;
  deleteUserProfil: (id: string) => void;
};

function single({ user, deleteUserProfil }: Props) {
  return (
    <div>
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <img src="./portrait.jpg" />
            <span className="card-title">
              {user.nom} {user.prenom}
            </span>
          </div>
          <div className="card-content">
            <h5>{user.email}</h5>
            <p>{user.notes}</p>
          </div>
          <div className="card-action ">
            <button
              className="waves-effect waves-light btn red darken-2 left"
              onClick={() => deleteUserProfil(user.id)}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default single;
