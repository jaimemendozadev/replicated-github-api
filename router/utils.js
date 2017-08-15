var rp = require('request-promise');


var gatherSSHKeys = (userArray, callback) => {
    
    var totalAPICalls = userArray.length;
    var counter = 0;

    var UserGitKeys = {}

    for (var idx in userArray)
      UserGitKeys[userArray[idx]] = null;


    //queryGitAPI will query Git and create UserGitKeys obj 
    var queryGitAPI = (username) => {
        var options = {
            uri: `https://api.github.com/users/${username}/keys`,
            qs: {
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET
            },
            headers: {
                'User-Agent': process.env.USER_AGENT
            },
            json: true // Automatically parses the JSON string in the response 
        };
         
        rp(options)
            .then(data => {
              console.log(`successfully got the GitHub Keys for ${username}: ${JSON.stringify(data)}`);
    
              //if we get the data, assign data to username key in ObjKeys
              UserGitKeys[username] = data
    
              //increment counter
              counter++;
    
              if (counter === totalAPICalls) {
                callback(UserGitKeys);
              }
    
            })
            .catch(err => {
              console.log(`whoops! got an error fetching keys for ${username}: ${err}`);
              UserGitKeys[username] = ["Error getting API Keys"];
    
              counter++;
              
              if (counter === totalAPICalls) {
                callback(UserGitKeys);
              }
    
            });
    }


    //call queryGitAPI for each user
    for (var i = 0; i < userArray.length; i++){
        queryGitAPI(userArray[i]);
    }

}

module.exports = {
  gatherSSHKeys: gatherSSHKeys
}