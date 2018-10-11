import { h, render, Component } from "preact";

export default () => {
  return [
    <p>I hang out on the web in a lot of places. Here's some links to those places:</p>,
    <ul>
      <li><strong>Github: </strong> <a href="https://github.com/malchata" rel="noopener">https://github.com/malchata</a></li>
      <li><strong>Twitter: </strong> <a href="https://twitter.com/malchata" rel="noopener">https://twitter.com/malchata</a></li>
      <li><strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/jeremy-wagner/" rel="noopener">https://www.linkedin.com/in/jeremy-wagner</a></li>
    </ul>
  ];
};
