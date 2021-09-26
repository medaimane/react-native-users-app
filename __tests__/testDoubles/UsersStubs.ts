import {UserJSON} from '../../src/services/api/models/UserJSON';

export const UserStub: UserJSON = {
  age: 1,
  name: 'user',
};

export const UsersStub: UserJSON[] = [
  {
    age: 1,
    name: 'user one',
  },
  {
    age: 2,
    name: 'user two',
  },
  {
    age: 3,
    name: 'user three',
  },
];
