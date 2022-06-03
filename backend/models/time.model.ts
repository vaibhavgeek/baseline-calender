import { Model } from "sequelize";

export class Time extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public timestart!: number;
  public timeend!: number;
  public username!: string; // for nullable fields
}
