// Require in trails module from trails.js
const trails = require('./trails.js');
// Require in util module here
const util = require('util');

// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
    return setTimeout(() => {
        if (trails.hasOwnProperty(trail)) {
            const foundTrail = trails[trail];
            callback(null, foundTrail)
        } else {
            callback(new Error('Trail not found!'))
        }
    }, 1000);
}

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback(error, trailData) {
    if (error) {
        console.error(error.message)
        process.exit(1)
    } else {
        const mi = trailData.miles;
        const nickname = trailData.nickname;
        console.log(`The ${nickname} is ${mi} miles long!`)
    }
}

getTrailDistance('North Country', callback)

// Promisfy below!
const getTrailDistancePromise = util.promisify(getTrailDistance);
getTrailDistancePromise('North Country').then(
    (res) => {
        console.log(`The ${res.nickname} is ${res.miles} miles long!`)
    }
).catch(err => console.error(err.message));
