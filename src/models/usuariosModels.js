import  Sequilize from "sequelize";
import db from "../db.js";

export default db.define("usuario", {
    id: {
        type: Sequilize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    nome: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequilize.STRING,
        allowNull: false,
        unique: true,
    }
});