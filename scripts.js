let homepoints = 0;
let awaypoints = 0;
let strikes = 0;
let balls = 0;
let outs = 0;
let inn = 1;
let innhalf = 0;
let base1 = false;
let base2 = false;
let base3 = false;

function updatePoints(elementId, points) {
  document.getElementById(elementId).innerHTML = points;
}

function classadd(elementId, classtype){
  document.getElementById(elementId).classList.add(classtype);
}

function classremove(elementId, classtype){
  document.getElementById(elementId).classList.remove(classtype);
}

document.getElementById("homeplus").addEventListener("click", function () {
  updatePoints("points_1", ++homepoints);
});

document.getElementById("homeminus").addEventListener("click", function () {
  updatePoints("points_1", --homepoints);
});

document.getElementById("awayplus").addEventListener("click", function () {
  updatePoints("points_2", ++awaypoints);
});

document.getElementById("awayminus").addEventListener("click", function () {
  updatePoints("points_2", --awaypoints);
});

document.getElementById("strikesbt").addEventListener("click", function () { if (strikes > 1){
    updatePoints("strikes", strikes = 0);
    updatePoints("balls", balls = 0);
    if (outs < 2){
    updatePoints("outs", ++outs)
    }
    else{
    updatePoints("outs", outs = 0);
    }
  }
  else{
    updatePoints("strikes", ++strikes);
  }});

document.getElementById("ballsbt").addEventListener("click", function () { if (balls > 2){
    updatePoints("balls", balls = 0);
    updatePoints("strikes", strikes = 0);
  }
  else{
    updatePoints("balls", ++balls);
  }});

document.getElementById("outsbt").addEventListener("click", function () { if (outs > 1){
    updatePoints("outs", outs = 0);
}
  else{
    updatePoints("outs", ++outs);
    updatePoints("strikes", strikes = 0);
    updatePoints("balls", balls = 0);
  }});

document.getElementById("innplus").addEventListener("click", function () {
if (innhalf === 0){
  ++innhalf;
  classadd("awayservice", "okservice");
  classremove("awayservice", "noservice");
  classadd("homeservice", "noservice");
  classremove("homeservice", "okservice");
}
else if (innhalf === 1){
  innhalf = 0;
  updatePoints("innings", ++inn);
  classadd("awayservice", "noservice");
  classremove("awayservice", "okservice");
  classadd("homeservice", "okservice");
  classremove("homeservice", "noservice");
}});

document.getElementById("innminus").addEventListener("click", function () { updatePoints("innings", --inn) });

document.getElementById("base1").addEventListener("click", function () { 
  if (base1 === false){
    base1 = true;
    classadd("b1", "boxon");
    classremove("b1", "boxbasesoff");
    classadd("base1", "w3-yellow");
    classremove("base1", "w3-black");
}
  else{
    base1 = false;
    classadd("b1", "boxbasesoff");
    classremove("b1", "boxon");
    classadd("base1", "w3-black");
    classremove("base1", "w3-yellow");
  }
})

document.getElementById("base2").addEventListener("click", function () {
  if (base2 === false){
    base2 = true;
    classadd("b2", "boxon");
    classremove("b2", "boxbasesoff");
    classadd("base2", "w3-yellow");
    classremove("base2", "w3-black");
  }
  else{
    base2 = false;
    classadd("b2", "boxbasesoff");
    classremove("b2", "boxon");
    classadd("base2", "w3-black");
    classremove("base2", "w3-yellow");
  }
})

document.getElementById("base3").addEventListener("click", function () {
  if (base3 === false){
    base3 = true;
    classadd("b3", "boxon");
    classremove("b3", "boxbasesoff");
    classadd("base3", "w3-yellow");
    classremove("base3", "w3-black");
  }
  else{
    base3 = false;
    classadd("b3", "boxbasesoff");
    classremove("b3", "boxon");
    classadd("base3", "w3-black");
    classremove("base3", "w3-yellow");
  }
})

document.getElementById("send").addEventListener("click", function () { 
  let homename = document.getElementById("homename").value;
  let awayname = document.getElementById("awayname").value;
  updatePoints("team_1", homename);
  updatePoints("team_2", awayname);
});