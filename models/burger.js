console.log("Burger DB loaded");

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("burgers", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Burger.associate = function(models) {
        Burger.belongsTo(models.customers, {
            foreignKey: {
                //allowNull: false
            }
        });
    };

    return Burger;
};