// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

var defangIPaddr = function (address) {
  let defangedAddress = '';
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      defangedAddress += '[.]';
    } else {
      defangedAddress += address[i];
    }
  }
  return defangedAddress;
};

// example solutions

var defangIPaddr2 = function (address) {
  return address.split('.').join('[.]');
};
