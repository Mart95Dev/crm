import Single from './Single';
import { DataBaseType } from './App';

export type PropsUser = {
  users: DataBaseType[];
  deleteUserProfil: (id: string) => void;
};

function Grid({ users, deleteUserProfil }: PropsUser) {
  return (
    <div>
      <div className="row">
        <ul>
          {users.map((user, key: number) => (
            <Single
              key={key + 1}
              user={user}
              deleteUserProfil={deleteUserProfil}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Grid;
