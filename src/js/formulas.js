function uniPolarNRZ(c, BINARY, HEIGHT, WIDTH) {
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

function NRZI(c, BINARY, HEIGHT, WIDTH) {
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

function AMI(c, BINARY, HEIGHT, WIDTH) {
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

function MAN(c, BINARY, HEIGHT, WIDTH) {
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
function diffMan(c, BINARY, HEIGHT, WIDTH) {
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

function B8ZS(c, BINARY, HEIGHT, WIDTH) {
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
      console.log(zeroCount);
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

function selectMethod(method , c, BINARY, HEIGHT, WIDTH){
  switch (method) {
    case 'uniPolarNRZ':
        uniPolarNRZ(c, BINARY, HEIGHT, WIDTH);
        break;
    case 'NRZI':
        NRZI(c, BINARY, HEIGHT, WIDTH)
        break;
    case 'AMI':
        AMI(c, BINARY, HEIGHT, WIDTH)
        break;
    case 'diffMan':
        diffMan(c, BINARY, HEIGHT, WIDTH)
        break;
    case 'MAN':
        MAN(c, BINARY, HEIGHT, WIDTH)
        break;
        case 'B8ZS':
         B8ZS(c, BINARY, HEIGHT, WIDTH)
          break;
    
    }
}
module.exports = { uniPolarNRZ, NRZI, AMI, diffMan, MAN, B8ZS , selectMethod };
