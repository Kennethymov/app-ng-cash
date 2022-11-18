import { DECIMAL } from 'sequelize';
import { Model, INTEGER } from 'sequelize';
import db from '.';
import Account from './Account';

class Transaction extends Model {
  id!: number;
  Transactionname!: string;
  password!: string;
  accountId!: number;
}

Transaction.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  debitedAccountId: {
    type: INTEGER,
    allowNull: false,
  },
  creditedAccountId: {
    type: INTEGER,
    allowNull: false,
  },
  value: {
    type: DECIMAL,
    allowNull: false,
  },
  createdAt: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'transactions',
  timestamps: false
});

Transaction.belongsTo(Account, { foreignKey: 'debitedAccountId', as: "transactions", onDelete: 'CASCADE', });
Transaction.belongsTo(Account, { foreignKey: 'creditedAccountId', as: "transactions", onDelete: 'CASCADE', });


Account.hasOne(Transaction, { foreignKey: 'debitedAccountId', as: "accounts", onDelete: 'CASCADE', });
Account.hasOne(Transaction, { foreignKey: 'creditedAccountId', as: "accounts", onDelete: 'CASCADE', });


export default Transaction;
