const USER = require('../model/User');
const CHAPTER = require('../model/Chapter');
const INVENTORY = require('../model/InventoryAbstract');
const OWNERSHIP = require('../model/OwnerShip');

const InventoryType = require('../rage/mocks/inventory.json');
const { userStateLogining, UserIsLoging } = require('../util/cache');

/**
 *
 *
 * @param {email,password} req
 * @returns {bollean}
 */
function valid(req) {
  if (req.email === undefined && req.password === undefined) {
    return Error('Its dont a valid req');
  } else {
    return true;
  }
}

/**
 * @function NewUser new person created
 * @param {email,password} req
 * @returns {Error|Document}
 */

exports.NewUser = async (req) => {
  if (valid(req)) {
    let { email } = req;

    const userExists = await USER.findOne({ email: email }).exec();

    if (userExists) {
      return Error('Email is taken');
    }
    const user = await new USER(req);
    await user.save();

    return user;
  } else {
    return Error('request is not valid');
  }
};
/**
 * @function UserLogin user authorized
 * @param {email,password} req
 * @returns {Document|Error}
 */

exports.UserLogin = async (req, rageContext) => {
  let result = valid(req);
  if (result) {
    let { email, password } = req;
    let user = await USER.findOne({ email });
    if (!user) {
      return Error('User with that email not exist');
    }
    if (password != user.password) {
      return Error('Email or password do not match');
    }
    let resultCh = userStateLogining(rageContext.player.socialClub, user);
    if (resultCh) {
      return user;
    } else {
      return Error('Hello russia hackers?');
    }
  } else {
    return result;
  }
};
/**
 *
 *
 * @param { player } rageContext
 * @returns {Document|Error}
 */
exports.UserNewChapter = async (req, rageContext) => {
  let SessionResult = UserIsLoging(rageContext.player.socialClub);

  if (SessionResult) {
    let { _id } = SessionResult;
    let chapter = new CHAPTER(req);
    chapter.userId = _id;
    let chapterResult = await chapter.save();
    chapterSaveHelper(chapterResult, _id);
    return chapterResult;
  } else {
    return Error('Hello russia hackers?');
  }
};
exports.UserSelectChapter = async (req, rageContext) => {};

function chapterSaveHelper(chapter, UserId) {
  let inv = new INVENTORY();
  let owner = new OWNERSHIP();
  let { chapterType } = InventoryType;
  inv.Owner = chapter._id;
  inv.InventoryType = chapterType.type;
  inv.capacity = chapterType.capacity;
  console.log(inv);
  console.log(owner);
  // inv.save()
  // owner.save()
  // USER.findByIdAndUpdate(UserId,{ $push: { chapters: req.body.followId } })
}
