const data = "2022-01-22";
const novaData = data.replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$3/$2/$1");
console.log(novaData);