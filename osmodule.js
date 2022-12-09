// first of all we will import the module 

const os = require('node:os');

//now we can access all the functions of this module

console.log(os.freemem()); // this shows the free memory on our machine

console.log(os.homedir()); // this shows the home directory

console.log(os.hostname()); // hostname of machine

console.log(os.release()); // current version of os