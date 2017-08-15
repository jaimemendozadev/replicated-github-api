var utils = require('./utils.js');


var fetchOneKeyPair = (req, res) => {
  var username = [req.params.username];  

  utils.gatherSSHKeys(username, (GitKeys)=>{
    console.log(`the GitKeys are ${GitKeys}`);
    res.send(GitKeys);
  });

}


var fetchKeyPairs = (req, res) => {
  //req.body.users should be JSON 
  //{"users": ["kennethreitz", "gvanrossum"]}
  var users = req.body.users;

  console.log(`the users are ${users} and typeof is ${typeof users}`)

  utils.gatherSSHKeys(users, (GitKeys)=>{
    console.log(`the GitKeys are ${GitKeys}`);
    res.send(GitKeys);
  });

}


module.exports = {
  fetchOneKeyPair: fetchOneKeyPair,
  fetchKeyPairs: fetchKeyPairs
}