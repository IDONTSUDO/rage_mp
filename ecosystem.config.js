let env = require('./env.json')

module.exports = {
    apps: [{
        name: "rage",
        script: `${env.gamePath}`,
    }]
}