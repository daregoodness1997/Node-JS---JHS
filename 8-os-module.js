const os = require("os");

// info about current user
const user = os.userInfo();

// method returns the system uptime in seconds
console.log(`This system uptime is ${os.uptime()} seconds`);

// storing the values in an object

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
};

console.log(currentOS)
