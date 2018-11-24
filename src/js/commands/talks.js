import { h, render, Component } from "preact";

export default () => {
  return [
    h("p", null, "Sometimes I speak at conferences. While the list below isn't comprehensive, it's a few videos of talks I've given about web stuff at events kind enough to invite me:"),
    h("ol", null,
      h("li", null, h("strong", null, "Full Stack Fest 2018: "),
        h("a", {
          href: "https://www.youtube.com/watch?v=md7Ua82fPe4",
          rel: "noopener"
        }, "Take a (Client) Hint!"),
        " (",
        h("a", {
          href: "https://jlwagner.net/talks/take-a-client-hint/",
          rel: "noopener"
        }, "Slides"),
        ")"
      ),
      h("li", null, h("strong", null, "CSSConf AU 2018: "),
        h("a", {
          href: "https://www.youtube.com/watch?v=iEinIwNppW4",
          rel: "noopener"
        }, "Faster Fonts for Speed Fanatics"),
        " (",
        h("a", {
          href: "https://jlwagner.net/talks/faster-fonts/",
          rel: "noopener"
        }, "Slides"),
        ")"
      )
    ),
    h("p", null, "Note: check out my ", h("a", {
      href: "https://noti.st/malchata",
      rel: "noopener"
    }, h("em", null, "noti.st"), " profile"), " for a much more attractive presentation of this list!")
  ];
};
