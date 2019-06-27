// Rover Object Goes Here
// ======================

// ======================
var rover = {direction: 'N', x: 0, y: 0, movs: []};
var movments = 'ffrffrfflfrff';
commands(movments, rover);

function turnLeft(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
}

function turnRight(rover){
  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
}

function moveForward(rover){
  if(rover.direction == 'N'){
    if (rover.y !=  0)--rover.y;
  }

  else if(rover.direction == 'E'){
    if (rover.y !=  9)++rover.x;
  }
      
  else if(rover.direction == 'S'){
    if (rover.y !=  9)++rover.y;
  }

  else if(rover.direction == 'W'){
    if (rover.y !=  0)--rover.x;
  }
  rover.movs.push(rover.x, rover.y);
}

function commands() {
  for(var i = 0; i < movments.length; i++) {
    if(movments[i] == 'l') {
      turnLeft(rover);
    }
    else if(movments[i] == 'r') {
      turnRight(rover);
    }
    else if(movments[i] == 'f') {
      moveForward(rover);
    }
  }
  travelLog();
}

function travelLog () {
  console.log(rover.movs);
}