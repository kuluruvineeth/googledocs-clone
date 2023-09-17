import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
} from "sequelize-typescript";
import { User } from "./user.model";

@Table({ tableName: "refresh_token", underscored: true })
class RefreshToken extends Model {
  @Column(DataType.STRING)
  token!: string;

  @ForeignKey(() => User)
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}

export { RefreshToken };
