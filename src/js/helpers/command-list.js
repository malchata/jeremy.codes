// The available command list is used to whitelist input, and comes in array
// format. The first array member is the command itself (without any arguments).
// The second is whether the command is "secret", which affects whether or not
// it is placed in the "help" command's list of available commands.

export default [
  ["about", false],
  ["articles", false],
  ["cat", true],
  ["cd", true],
  ["clear", false],
  ["help", false],
  //["history", false],
  ["links", false],
  ["ls", true],
  ["rm", true],
  ["sudo", true],
  ["uname", true],
  ["whoami", true]
];
