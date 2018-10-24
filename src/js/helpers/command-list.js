// The available command list is used to whitelist input, and comes in array
// format. The first array member is the command itself (without any arguments).
// The second is whether the command is "secret", which affects whether or not
// it is placed in the "help" command's list of available commands. The third is
// whether the command should have a server-rendered page.

export default [
  ["about", false, true],
  ["articles", false, true],
  ["cat", true, false],
  ["cd", true, false],
  ["clear", false, false],
  ["help", false, true],
  ["history", false, false],
  ["links", false, true],
  ["ls", true, false],
  ["rm", true, false],
  ["sudo", true, false],
  ["uname", true, false],
  ["whoami", true, false]
];
