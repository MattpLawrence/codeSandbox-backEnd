const { Model, DataTypes } = require("sequelize");
//connect to the sequelize server created in config/connection
const sequelize = require("../config/connection");
//set to default value for shortUrl
const shortId = require("shortId");

class Url extends Model {}

// setting basic table for db. id is a primaryKey, fullUrl is required, and shortUrl is generated
Url.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fullUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "https://github.com/MattpLawrence"
    },
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: shortId.generate
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "tblUrl"
  }
);

module.exports = Url;
