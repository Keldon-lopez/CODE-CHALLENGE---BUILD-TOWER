const buildTower = (floorNum) => {
  let floorArr = [];
  let assembledTowerArr = [];
  let leftSpace = floorNum - 1;
  let rightSpace = floorNum - 1;

  while (assembledTowerArr.length < floorNum) {
    // This will create the floor with the correct number of rooms (spaces)
    while (floorArr.length < floorNum * 2 - 1) {
      floorArr.push(" ");
    }

    // This fills which rooms should be occupied to assemble a tower (the *s)
    for (let index = leftSpace; index <= rightSpace; index++) {
      floorArr[index] = "*";
    }
    leftSpace = leftSpace - 1;
    rightSpace = rightSpace + 1;

    // This contructs the tower with each floor
    let floorString = floorArr.join("");
    assembledTowerArr.push(floorString);
  }
  return assembledTowerArr;
};

console.log(buildTower(6));
