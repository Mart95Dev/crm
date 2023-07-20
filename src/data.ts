export type DataBase = {
  prenom: string;
  nom: string;
  email: string;
  compagnie: string;
  notes: string;
};

export const fakeBase: DataBase[] = [
  {
    prenom: 'Emmanuel',
    nom: 'Henri',
    email: 'henri@gmail.com',
    compagnie: 'LinkedIn',
    notes: 'Voici mes notes',
  },
  {
    prenom: 'Bertrand',
    nom: 'Macary',
    email: 'macary@gmail.com',
    compagnie: 'Facebook',
    notes: 'Voici les notes de bertrand',
  },
  {
    prenom: 'jean',
    nom: 'Bernard',
    email: 'bernard@gmail.com',
    compagnie: 'Twitter',
    notes: 'Voici les notes de jean',
  },
];
