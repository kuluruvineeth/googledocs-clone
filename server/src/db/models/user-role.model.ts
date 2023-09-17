import {
  BelongsTo,
  Column,
  ForeignKey,
  PrimaryKey,
  Table,
  Model,
} from "sequelize-typescript";
import { User } from "./user.model";
import { Role } from "./role.model";

@Table({ tableName: "user_role", underscored: true })
class UserRole extends Model {
  @BelongsTo(() => User)
  user!: User;

  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  userId!: number;

  @BelongsTo(() => Role)
  role!: Role;

  @ForeignKey(() => Role)
  @PrimaryKey
  @Column
  roleId!: number;
}

export { UserRole };
