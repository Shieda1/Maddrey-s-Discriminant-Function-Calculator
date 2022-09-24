// https://www.omnicalculator.com/health/discriminant-function

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const MDFRadio = document.getElementById('MDFRadio');
const prothrombintimeRadio = document.getElementById('prothrombintimeRadio');
const prothrombintimecontrolRadio = document.getElementById('prothrombintimecontrolRadio');
const bilirubinlevelRadio = document.getElementById('bilirubinlevelRadio');

let MDF;
let prothrombintime = v1;
let prothrombintimecontrol = v2;
let bilirubinlevel = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

MDFRadio.addEventListener('click', function() {
  variable1.textContent = 'Prothrombin time';
  variable2.textContent = 'Prothrombin time - control';
  variable3.textContent = 'Bilirubin level';
  prothrombintime = v1;
  prothrombintimecontrol = v2;
  bilirubinlevel = v3;
  result.textContent = '';
});

prothrombintimeRadio.addEventListener('click', function() {
  variable1.textContent = 'MDF';
  variable2.textContent = 'Prothrombin time - control';
  variable3.textContent = 'Bilirubin level';
  MDF = v1;
  prothrombintimecontrol = v2;
  bilirubinlevel = v3;
  result.textContent = '';
});

prothrombintimecontrolRadio.addEventListener('click', function() {
  variable1.textContent = 'MDF';
  variable2.textContent = 'Prothrombin time';
  variable3.textContent = 'Bilirubin level';
  MDF = v1;
  prothrombintime = v2;
  bilirubinlevel = v3;
  result.textContent = '';
});

bilirubinlevelRadio.addEventListener('click', function() {
  variable1.textContent = 'MDF';
  variable2.textContent = 'Prothrombin time';
  variable3.textContent = 'Prothrombin time - control';
  MDF = v1;
  prothrombintime = v2;
  prothrombintimecontrol = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(MDFRadio.checked)
    result.textContent = `MDF = ${computeMDF().toFixed(2)}`;

  else if(prothrombintimeRadio.checked)
    result.textContent = `Prothrombin time = ${computeprothrombintime().toFixed(2)}`;

  else if(prothrombintimecontrolRadio.checked)
    result.textContent = `Prothrombin time - control = ${computeprothrombintimecontrol().toFixed(2)}`;

  else if(bilirubinlevelRadio.checked)
    result.textContent = `Bilirubin level = ${computebilirubinlevel().toFixed(2)}`;
})

// calculation

// MDF = 4.6 * (prothrombintime - prothrombintimecontrol) + bilirubinlevel

function computeMDF() {
  return 4.6 * (Number(prothrombintime.value) - Number(prothrombintimecontrol.value)) + Number(bilirubinlevel.value);
}

function computeprothrombintime() {
  return ((Number(MDF.value) - Number(bilirubinlevel.value)) + 4.6 * Number(prothrombintimecontrol.value)) / 4.6;
}

function computeprothrombintimecontrol() {
  return (4.6 * Number(prothrombintime.value) - (Number(MDF.value) - Number(bilirubinlevel.value))) / 4.6;
}

function computebilirubinlevel() {
  return Number(MDF.value) - 4.6 * (Number(prothrombintime.value) - Number(prothrombintimecontrol.value));
}