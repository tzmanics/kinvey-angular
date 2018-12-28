import { Kinvey } from 'kinvey-angular2-sdk';

export class Chore implements Kinvey.Entity {
  _id: string;
  duration: number;
  description: string;
  name: string;
}
