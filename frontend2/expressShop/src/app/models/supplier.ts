import { BD_User } from './user';

export class Supplier extends BD_User {
    public description: string;
    public nbEtoiles: number;
    public logoGUID: string;
    public tags: string[];
}