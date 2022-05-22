// Code your solution in this file!
const headquarters = 42;

function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return distance - headquarters;
    } else if (distance < 42) {
        return headquarters - distance;
    }
}

const blockLength = 264;

function distanceFromHqInFeet (distance) {
    distanceFromHqInBlocks();
    if (distance > 42) {
        return (distance - headquarters) * blockLength;
    } else if (distance < 42) {
        return (headquarters - distance) * blockLength;
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination) * blockLength; 
        } else if (start < destination) {
        return (destination - start) * blockLength;
        } else if (start = destination) {
            return blockLength;
        }
}




function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)  

if (distance <= 400) {
    return 0;
    } else if (distance >400 && distance <=2000) {
        return (distance - 400)* .02;
    } else if (distance >2000 && distance <2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}