// global object



console.log(global)

setTimeout(() => {
   clearInterval(inter);
},1000);
let count=0;

const inter = setInterval(() =>{
count++;
    console.log(count +" Times")
},2000)


console.log(__dirname);
console.log(__filename);

