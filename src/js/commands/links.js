import { h, render, Component } from "preact";

export default () => {
  return [
    h("p", null, "I hang out on the web in a lot of places. Here's some links to those places:"),
    h("ul", null,
      h("li", null,
        h("strong", null, "Github: "),
        h("a", null, {
          href: "https://github.com/malchata",
          rel: "noopener"
        }, "https://github.com/malchata")
      ),
      h("li", null,
        h("strong", null, "Twitter: "),
        h("a", null, {
          href: "https://twitter.com/malchata",
          rel: "noopener"
        }, "https://twitter.com/malchata")
      ),
      h("li", null,
        h("strong", null, "LinkedIn: "),
        h("a", null, {
          href: "https://www.linkedin.com/in/jeremy-wagner/",
          rel: "noopener"
        }, "https://www.linkedin.com/in/jeremy-wagner")
      )
    )
  ];
};
