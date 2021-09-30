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
// console.log(gameObject());

function homeTeam() {
  return gameObject().home;
}

function awayTeam() {
  return gameObject().away;
}
// console.log(homeTeam(), awayTeam());

// Makes a copy of the gameObject()
function players() {
  // const homePlayers = gameObject().home.players;
  // const awayPlayers = gameObject().away.players;
  // return {...homePlayers, ...awayPlayers};
  return Object.assign({}, homeTeam().players, awayTeam().players);
}
console.log(players());

function numPointsScored(playerInput) {
  for (const playerName in players()) {
    if (playerName === playerInput) {
      let points = players()[playerName].points;
      return `${playerInput} scored ${points} points.`;
    }
  }
  /*  const playerArrays = Object.entries(players())
      let points;
      playerArrays.forEach(playerArray => {
        if (playerArray[0] === playerInput) {
        points = playerArray[1].points;
        }
      }) 
      return points;
  */
  /*  const playerArrays = Object.entries(players());
      const player = playerArrays.find(playerArray => playerArray[0] === playerInput);
      return player[1].points;
      */

  /*                                               // OR MORE SIMPLY:
      return players()[playerInput].points;
  */

}
// console.log(numPointsScored("Jeff Adrien"));

function shoeSize(playerInput) {
  const shoe = players()[playerInput].shoe;
  return `${playerInput} has size ${shoe} shoes.`
}
// console.log(shoeSize("Mason Plumlee"));

function teamColors(team) {
  if (team === homeTeam().teamName) {
    return homeTeam().colors;
  } else if (team === awayTeam().teamName) {
    return awayTeam().colors;
  }
}
// console.log(teamColors('Charlotte Hornets'));

function teamNames() {
  return [homeTeam().teamName, awayTeam().teamName];
}
// console.log(teamNames())

function playerNumbers(teamName) {
  return 
}
// console.log(playerNumbers('Brooklyn Nets'));

function playerStats(playerInput) {
  return players()[playerInput].value;
}
console.log(players()['DeSagna Diop'].value)
console.log(playerStats('DeSagna Diop'));