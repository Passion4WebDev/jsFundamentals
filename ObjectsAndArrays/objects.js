/* 
OBJECTS

-objects are used to store multiple sets of data in the key/ value pair format
-denoted by {}
*/

let netflix = {
    // name: value
    id: 1,
    name: 'The Office',
    genre: 'Comedy',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {
                    episode: 1,
                    episodeName: 'Pilot'
                },
                {
                    episode: 2,
                    episodeName: 'Diversity Day'
                },
                {
                    episode: 3,
                    episodeName: 'Health Care'
                },
                {
                    episode: 4,
                    episodeName: 'The Alliance'
                },
                {
                    episode: 5,
                    episodeName: 'Basketball'
                },
                {
                    episode: 6,
                    episodeName: 'Hot Girl'
                }
            ]
        }
    }
}
// dot notation: when we know the name of the 
//dey/value information we want, we will use dot notation
console.log('All Data:', netflix.name);

console.log('Just season info:', netflix.season1.seasonInfo);

// !console log any single episode name from season 1

console.log(`Episode ${netflix.season1.seasonInfo.episodeInfo[4].episode}:`, 
netflix.season1.seasonInfo.episodeInfo[4].episodeName);

/* 
JSON OBJECTS
-Json stands for JavaScript Object Notation
-The JSON syntax is derived from JavaScript Object syntax, but the JSON
the JSON format is text only
-JSON exists as a string -useful when fetching a data from a server. it need to be translated into a native JavaScript
object if we want to access the data.
*/
let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
// We can use some Object methods to help information we might not otherwise know

// Object.keys()
console.log(Object.keys(spaceJam.toonSquad));// gives an array of the keys in an object

console.log(object.keys(spaceJam.toonSquad.duck));// gives us the index numbers for the string 'Duffy Duck'

console.log(Ojbect.values(spaceJam.toonSquad));// gives us an array with the values of each key in an object
/* 
OBJECT BRACKET NOTATION
-object bracket notation can allow us to fin a value in an object we wonldn't 
be able to access using dot notation.
-we can also object bracket notation to store a key in a variable
and use that variable to access information in an object 
-this works becasue all key names in an object are startings
*/

let garden = {
    vegetable: 'Zucchini',
    flower: 'Orchild',
    fruit: 'Kiwi',
water: true,
size: 10
}
let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

// Dot Notation
console.log(garden.flower);

// square Braket Notation
console.log(garden['flower']);

 
let baking = {};
console.log(baking);
baking['zucchini'] = 'better make some bread!';
baking.bakeTime = 60;
baking.bakeTime = 45
console.log(baking);
// console.log(baking);


let garden = {
vegetable: 'zucchini',
flower: 'Orchid',
fruit: 'Kiwi',
water: true,
sun: true,
size: 10,
}

// console.log(baking [garden ['vegetable]]);

console.log(baking[garden['vegetable']]);

// Using square brackets can also be a good idea if the object's key has a space in the name
let testObj = {
"Spaces Here": true,
noSpaces: true

}
console.log(testObj.noSpaces);
console.log(testObj['Spaces Here']);

 