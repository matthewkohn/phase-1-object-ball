function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        },
        "Reggie Evans": {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 12,
          "blocks": 12,
          "slamDunks": 7,
        },
        "Brook Lopez": {
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 15,
        },
        "Mason Plumlee": {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 8,
          "slamDunks": 5,
        },
        "Jason Terry": {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 4,
          "blocks": 11,
          "slamDunks": 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 1,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2,
        },
        "Bismak Biyombo": {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 4,
          "assists": 7,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10,
        },
        "DeSagna Diop": {
          "number": 2,
          "shoe": 14,
          "points": 24,
          "rebounds": 12,
          "assists": 12,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 5,
        },
        "Ben Gordon": {
          "number": 8,
          "shoe": 15,
          "points": 33,
          "rebounds": 3,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0,
        },
        "Brendan Haywood": {
          "number": 33,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 12,
          "steals": 22,
          "blocks": 5,
          "slamDunks": 12,
        },
      },
    },
  }
}

//_______________________________________________________
// Helper functions
function homeTeam() {
  return gameObject().home;
}

function awayTeam() {
  return gameObject().away;
}

function homeTeamPlayers() {
  return Object.assign({}, homeTeam().players);
}

function awayTeamPlayers() {
  return Object.assign({}, awayTeam().players);
}
//________________________________________________________
// Breaks gameObject() into 2 arrays- home & away
function arrayOfTeams() {
  return Object.values(gameObject());
}

// Makes a copy of the gameObject() at the player level
function players() {
  return Object.assign({}, homeTeam().players, awayTeam().players);
}
function playersArray() {
  return Object.entries(players());
}

// Returns the number of points a player has scored
function numPointsScored(playerInput) {
  for (const playerName in players()) {
    if (playerName === playerInput) {
      let points = players()[playerName].points;
      return `${playerInput} scored ${points} points.`;
    }
  }
}

// Returns a string stating the player's shoe size
function shoeSize(playerInput) {
  const shoe = players()[playerInput].shoe;
  return `${playerInput} has size ${shoe} shoes.`
}

// Returns a team's colors
function teamColors(team) {
  if (team === homeTeam().teamName) {
    return homeTeam().colors;
  } else if (team === awayTeam().teamName) {
    return awayTeam().colors;
  }
}

// Returns a list of team names
function teamNames() {
  return [homeTeam().teamName, awayTeam().teamName];
}

// Returns an array of player numbers depending on which team is inputted
function playerNumbers(teamName) {
  let arrayOfNumbers = [];
  if (teamName === homeTeam().teamName) {
    let teamPlayers = homeTeam().players;
    let teamValues = Object.values(teamPlayers);
    for (let player of teamValues) {
      arrayOfNumbers.push(player.number);
    }
  } else if (teamName === awayTeam().teamName) {
    let teamPlayers = awayTeam().players;
    let teamValues = Object.values(teamPlayers);
    for (let player of teamValues) {
      console.log(player.number)
      arrayOfNumbers.push(player.number);
    }
  }
  return arrayOfNumbers;
}

// Returns an object with the inputted player's stats
function playerStats(playerInput) {
  for (const playerName in players()) {
    if (playerName === playerInput) {
      return players()[playerName];
    }
  }
}

// Returns the number of rebounds associated with the player that has the largest shoe size
function bigShoeRebounds() {
  let arr = Object.values(players());
  let shoeBox = []
  for (let val of arr) {
    let shoe = val.shoe;
    shoeBox.push(shoe);
  }
  let biggestShoe = Math.max(...shoeBox);
  for (let val of arr) {
    let shoe = val.shoe;
    if (shoe === biggestShoe) {
      return val.rebounds;
    }
  }
}

// Which player has the most points?
function mostPointsScored() {
  let arr = Object.values(players());
  let pointsArr = [];
  for (let val of arr) {
    let points = val.points;
    pointsArr.push(points);
  }
  let mostPoints = Math.max(...pointsArr);
  for (let players of playersArray()) {
    console.log(players[0])
    if (players[1].points === mostPoints) {
      return `${players[0]} has the most points, scoring ${mostPoints} points.`;
    }
  }
}

// Which team has the most points?
// function winningTeam() {
//   homePoints = playersArray().reduce((player, points) => {

//   }
//   )
// }

console.log(mostPointsScored())
console.log(playersArray())