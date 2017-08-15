var rp = require('request-promise');


var fetchSSHKeys = (req, res) => {
    var username = req.params.username;
    
    var options = {
        uri: `https://api.github.com/users/${username}/keys`,
        qs: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET
        },
        headers: {
            'User-Agent': 'jmwebdev-github-api'
        },
        json: true // Automatically parses the JSON string in the response 
    };
     
    rp(options)
        .then(data => {
          console.log(`successfully got the GitHub Keys ${JSON.stringify(data)} and the type is ${typeof data}`);
          
          res.status(200).send(`data received from GitHub is ${JSON.stringify(data)}`);
        })
        .catch(err => {
          console.log(`whoops! got an error in fetchSSHKeys ${err}`);
          res.status(400).send('there was an error with your request, try again later');
        });

}


module.exports = {
  fetchSSHKeys: fetchSSHKeys
}