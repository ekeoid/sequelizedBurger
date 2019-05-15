module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("customers", {
        name: DataTypes.STRING
    });

    Customer.associate = function(models) {
        Customer.hasMany(models.burgers, {
            onDelete: "cascade"
        });
    };

    return Customer;
};