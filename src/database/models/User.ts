import { Model, INTEGER, STRING, DATEONLY } from 'sequelize';
import db from '.';
import Account from './Account';

class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  accountId!: number;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  accountId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false
});

User.belongsTo(Account, { foreignKey: 'accountId', onDelete: 'CASCADE', });

Account.belongsTo(User, { foreignKey: 'accountId', onDelete: 'CASCADE', });


export default User;
