module.exports = (sequelize, Sequelize) => {
    const FavouriteGift = sequelize.define("favouriteGift", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      }
    });
  
    return FavouriteGift;
  };