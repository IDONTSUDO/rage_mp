const NodeCache = require('node-cache');
const userState = new NodeCache();

exports.userStatePreGame = (socialClubId) => {
  userState.set(socialClubId, 'PreGame', 10000000);
};
exports.userStateLogining = (socialClubId, userModel) => {
  console.log(userModel);
  let setCh = userState.set(socialClubId, userModel, 10000000);
  if (setCh) {
    return true;
  } else {
    return false;
  }
};
exports.UserInGame = (socialClubId) => {};
exports.UserIsLoging = (socialClubId) => {
  let value = userState.get(socialClubId);
  if (value) {
    return value;
  } else {
    return false;
  }
};
