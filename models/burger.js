module.exports = function(sequelize, DataTypes) {
    let Burger = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deourved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return Burger;
};