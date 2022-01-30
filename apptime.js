const km = 10;

const hr = 1;
const min = 13;
const sec = 0;


const totalMin = (hr * 60) + min;
console.log("Total min :", totalMin);

var h = Math.floor(totalMin / 60);



const paceH = Math.floor(totalMin / km);
const paceM = Math.floor(((totalMin / km) % 1) * 60);

const paceS = ((((totalMin / km) % 1) * 60) % 1);

// const paceS = Math.floor(((totalMin / km) % 1) * 60);



// totalMin.toFixed(2);
console.log(`PaceH is > ${paceH} < Min per KM`);
console.log(`PaceM is > ${paceM} < Min per KM`);
console.log(`PaceS is > ${paceS} < Min per KM`);

