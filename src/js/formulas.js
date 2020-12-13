function uniPolarNRZ(c, BINARY, HEIGHT) {
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);
  for (let i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
    } else {
      c.lineTo(i, HEIGHT / 2);
      c.lineTo(i + 50, HEIGHT / 2);
    }
  }
  c.stroke();
  c.closePath();
}
function NRZL(c, BINARY, HEIGHT) {
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  startPoint = BINARY.charAt(0) == 1 ? 50 : -50;
  c.moveTo(50, HEIGHT / 2 + startPoint);
  for (let i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      c.lineTo(i, HEIGHT / 2 + 50);
      c.lineTo(i + 50, HEIGHT / 2 + 50);
    } else {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
    }
  }
  c.stroke();
  c.closePath();
}

function NRZI(c, BINARY, HEIGHT) {
  let inverse = true;
  let currentlvl = HEIGHT / 2;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);

  for (let i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1 && inverse) {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
      inverse = false;
      currentlvl = HEIGHT / 2 - 50;
    } else if (BINARY.charAt(j) == 1 && !inverse) {
      c.lineTo(i, HEIGHT / 2 + 50);
      c.lineTo(i + 50, HEIGHT / 2 + 50);
      inverse = true;
      currentlvl = HEIGHT / 2 + 50;
    } else {
      c.lineTo(i + 50, currentlvl);
    }
  }
  c.stroke();
  c.closePath();
}

function AMI(c, BINARY, HEIGHT) {
  let inverse = true;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);

  for (let i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1 && inverse) {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
      inverse = false;
    } else if (BINARY.charAt(j) == 1 && !inverse) {
      c.lineTo(i, HEIGHT / 2 + 50);
      c.lineTo(i + 50, HEIGHT / 2 + 50);
      inverse = true;
    } else {
      c.lineTo(i, HEIGHT / 2);
      c.lineTo(i + 50, HEIGHT / 2);
    }
  }
  c.stroke();
  c.closePath();
}

function PST(c, BINARY, HEIGHT) {
  let inverse = true;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);

  for (let i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 0 && inverse) {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
      inverse = false;
    } else if (BINARY.charAt(j) == 0 && !inverse) {
      c.lineTo(i, HEIGHT / 2 + 50);
      c.lineTo(i + 50, HEIGHT / 2 + 50);
      inverse = true;
    } else {
      c.lineTo(i, HEIGHT / 2);
      c.lineTo(i + 50, HEIGHT / 2);
    }
  }
  c.stroke();
  c.closePath();
}

function MLT3(c, BINARY, HEIGHT) {
  let inverse = true;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);
  let stage = 0;
  let currentlvl = HEIGHT / 2;
  for (let i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1 && stage == 0) {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
      currentlvl = HEIGHT / 2 - 50;
      stage++;
    } else if (BINARY.charAt(j) == 1 && stage == 2) {
      c.lineTo(i, HEIGHT / 2 + 50);
      c.lineTo(i + 50, HEIGHT / 2 + 50);
      currentlvl = HEIGHT / 2 + 50;
      stage = 0;
    } else if (BINARY.charAt(j) == 1 && stage == 1) {
      c.lineTo(i, HEIGHT / 2);
      c.lineTo(i + 50, HEIGHT / 2);
      currentlvl = HEIGHT / 2;
      stage++;
    } else {
      c.lineTo(i, currentlvl);
      c.lineTo(i + 50, currentlvl);
    }
  }
  c.stroke();
  c.closePath();
}

function MAN(c, BINARY, HEIGHT) {
  let currentlvl = HEIGHT / 2;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  if (BINARY.charAt(0) == 1) currentlvl = +50;
  else currentlvl = -50;
  c.moveTo(50, HEIGHT / 2 + currentlvl);

  for (let i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      currentlvl = 50;
      c.lineTo(i, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      currentlvl = currentlvl * -1;
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    } else {
      currentlvl = -50;
      c.lineTo(i, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      currentlvl = currentlvl * -1;
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    }
  }
  c.stroke();
  c.closePath();
}
function diffMan(c, BINARY, HEIGHT) {
  let currentlvl = HEIGHT / 2;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  if (BINARY.charAt(0) == 1) currentlvl = -50;
  else currentlvl = +50;
  c.moveTo(50, HEIGHT / 2 + currentlvl);
  for (let i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      currentlvl = currentlvl * -1;
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    } else {
      currentlvl = currentlvl * -1;
      c.lineTo(i, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      currentlvl = currentlvl * -1;
      c.lineTo(i + 25, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    }
  }
  c.stroke();
  c.closePath();
}

function B8ZS(c, BINARY, HEIGHT) {
  let inverse = true;
  let zeroCount = 0;
  let currentlvl = 50;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);

  for (let i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      currentlvl *= -1;
      c.lineTo(i, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    } else {
      for (let index = j; index < BINARY.length; index++) {
        if (BINARY.charAt(index) == 1) break;
        else zeroCount++;
      }
      if (zeroCount >= 8) {
        c.lineTo(i, HEIGHT / 2);
        c.lineTo(i + 150, HEIGHT / 2);
        c.lineTo(i + 150, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 200, HEIGHT / 2 + currentlvl);
        currentlvl *= -1;
        c.lineTo(i + 200, HEIGHT / 2 + currentlvl);

        c.lineTo(i + 250, HEIGHT / 2 + currentlvl);

        c.lineTo(i + 250, HEIGHT / 2);
        c.lineTo(i + 300, HEIGHT / 2);
        c.lineTo(i + 300, HEIGHT / 2);
        c.lineTo(i + 300, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 300, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 350, HEIGHT / 2 + currentlvl);
        currentlvl *= -1;
        c.lineTo(i + 350, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 400, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 400, HEIGHT / 2);
        i += 350;
        j += 7;
      } else {
        c.lineTo(i, HEIGHT / 2);
        c.lineTo(i + 50, HEIGHT / 2);
      }
      zeroCount = 0;
    }
  }
  c.stroke();
  c.closePath();
}

function HDB3(c, BINARY, HEIGHT) {
  // counts the number of zero and ones then apply the HDB3 formula
  let inverse = true;
  let zeroCount = 0;
  let currentlvl = 50;
  c.beginPath();
  c.lineWidth = 2.5;
  c.setLineDash([0, 0]);
  c.strokeStyle = "red";
  c.moveTo(50, HEIGHT / 2);
  let oneCount = 0;
  for (let i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      oneCount++;
      currentlvl *= -1;
      c.lineTo(i, HEIGHT / 2 + currentlvl);
      c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
    } else {

      for (let index = j; index < BINARY.length; index++) {
        if (BINARY.charAt(index) == 1 || zeroCount == 4) break;
        else zeroCount++;
      }
      if (zeroCount == 4 && oneCount % 2 == 0) {
        currentlvl *= -1;
        c.lineTo(i, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 50, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 50, HEIGHT / 2);
        c.lineTo(i + 150, HEIGHT / 2);
        c.lineTo(i + 150, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 200, HEIGHT / 2 + currentlvl);
        i += 150;
        j += 3;
      } else if (zeroCount == 4 && oneCount % 2 != 0) {
        c.lineTo(i, HEIGHT / 2);
        c.lineTo(i + 150, HEIGHT / 2);
        c.lineTo(i + 150, HEIGHT / 2 + currentlvl);
        c.lineTo(i + 200, HEIGHT / 2 + currentlvl);
        i += 150;
        j += 3;
      } else {
        c.lineTo(i, HEIGHT / 2);
        c.lineTo(i + 50, HEIGHT / 2);
      }
      oneCount = 0;
      zeroCount = 0;
    }
  }
  c.stroke();
  c.closePath();
}
function selectMethod(method, c, BINARY, HEIGHT) {
  switch (method) {
    case "uniPolarNRZ":
      uniPolarNRZ(c, BINARY, HEIGHT);
      break;
    case "NRZI":
      NRZI(c, BINARY, HEIGHT);
      break;
    case "AMI":
      AMI(c, BINARY, HEIGHT);
      break;
    case "diffMan":
      diffMan(c, BINARY, HEIGHT);
      break;
    case "MAN":
      MAN(c, BINARY, HEIGHT);
      break;
    case "B8ZS":
      B8ZS(c, BINARY, HEIGHT);
      break;
    case "NRZL":
      NRZL(c, BINARY, HEIGHT);
      break;
    case "PST":
      PST(c, BINARY, HEIGHT);
      break;
    case "MLT3":
      MLT3(c, BINARY, HEIGHT);
      break;

    case "HDB3":
      HDB3(c, BINARY, HEIGHT);
      break;
  }
}
module.exports = { selectMethod };
