import { Model } from "sequelize";

export class Appointment extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public fromUsername!: string;
  public toUsername!: string;
  public timestart!: number; // for nullable fields
  public timeend!: number;
  public status!: string;
}
