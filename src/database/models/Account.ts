import { DECIMAL } from 'sequelize';
import { Model, INTEGER, STRING, DATEONLY } from 'sequelize';
import db from '.';
import User from './User';

class Account extends Model {
  id!: number;
  balance!: number;
}

Account.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: DECIMAL,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'accounts',
  timestamps: false
});

Account.hasOne(User, { foreignKey: 'accountId', as: "accounts", onDelete: 'CASCADE', });

User.belongsTo(Account, { foreignKey: 'accountId', as: "users", onDelete: 'CASCADE', });


export default Account;
