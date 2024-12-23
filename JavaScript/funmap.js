const map=new Map([
    ["stringkey", 21],
    [2,"numberedkey"]
]);
map.set(false,0);
map.set(1,true);
console.log(map.get("stringkey"),
map.get(2),
map.get(false),
map.get(1));
console.log(map);

//set
const set = new Set(["stringvalue","stringvalue"]);
set.add(25);
set.add(28);
set.add(28);
set.add(10);
console.log(set);