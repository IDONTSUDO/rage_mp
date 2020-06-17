const rpc = require('rage-rpc');
const { NewUser } = require('../../service/auth.с');

rpc.register('registration', async (args, req) => {
  let res = await NewUser(args, req);
  return res;
});
