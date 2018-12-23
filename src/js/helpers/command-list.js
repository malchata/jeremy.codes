// The available command list is used to whitelist input, and comes in array
// format. The first array member is the command itself (without any arguments).
// The second is whether the command is "secret", which affects whether or not
// it is placed in the "help" command's list of available commands. The third is
// whether the command should have a server-rendered page. The four is whether
// the command should be hidden from clients without JavaScript.

export default [
  ["about", false, true, false],
  ["articles", false, true, false],
  ["cat", true, false, true],
  ["cd", true, false, true],
  ["clear", false, false, true],
  ["help", false, true, true],
  ["history", false, false, true],
  ["links", false, true, false],
  ["ls", true, false, true],
  ["rm", true, false, true],
  ["sudo", true, false, true],
  ["talks", false, true, false],
  ["touch", true, false, true],
  ["uname", true, false, true],
  ["whoami", true, false, true]
];
