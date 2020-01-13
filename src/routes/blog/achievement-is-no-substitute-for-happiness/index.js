import { h, render } from "preact";
import Blog from "../../../components/Blog";
import CodeBlock from "../../../components/CodeBlock";

export const Metadata = {
  title: "Achievement is No Substitute for Happiness",
  date: "12 January, 2020",
  description: "It's a new decade, and a new chance for a long overdue investment in my own well-being.",
  slug: "/blog/achievement-is-no-substitute-for-happiness/",
  sitemapPriority: 1.0
};

export default () => (
  <Blog title={Metadata.title} date={Metadata.date}>
    <p>It was 2015. I had just paid off my student loans, bought a house with my partner, and gave a couple of talks at some local events. I was beginning to feel better about myself. Confidence had always been elusive for me, but now that I had a taste of it, I decided to double down on what I was doing.</p>
    <p>So over the next four years, I poured myself into various pursuits. I wrote a couple books. I wrote a ton of articles for other publications. I became an editor for one of my favorite web publications. I did technical writing for Google. I spoke at events across the world. This was all in addition to the work I was doing at my day job.</p>
    <p>My goal was to destroy my persistent self-loathing entirely through achievement. I never felt good about myself. So, if anything <em>seemed</em> like the way forward, it would be to achieve so much&mdash;at least by my own standards&mdash;that I could stand to look at myself in the mirror.</p>
    <p>That plan never worked. That confidence I had built up slowly gave way to the thought patterns that had always been there. As Will Smith said, <a href="https://twitter.com/TyreeBP/status/1216019586623008775" rel="noopener">you can't achieve your way out of childhood trauma</a>. He was right. I was trying to repair the emotional trauma I sustained when I was a kid through achievement. That's a road that leads you to a lot of places, some of which can even be incredible. It gave me a lot of experiences I wouldn't trade for anything, but it didn't fix me. Achievement can't <em>fix</em> you when you don't love yourself. It's like renovating your kitchen when the foundation is utterly compromised.</p>
    <p>It's been over four years since I started going down this road. I still struggle to accept compliments. I still don't think most things I write are any good, and I still can't stand to see any video of myself talking on stage. The last of these is not surprising to me, because I still recoil in embarrassment and disgust when I see photos of myself as a child. So why wouldn't it make sense that this would extend into adulthood?</p>
    <p>Self-loathing is a force you don't recognize until you've been steeped in it for a long time. Like the frog that doesn't know its slowly being boiled alive, you don't recognize the litany of self-destructive things you do to undermine yourself until you've been wholly consumed by your own caustic negativity. We talk a lot about imposter syndrome in this field, and the kernel of it is self-loathing in the form of a petty little asshole who can't let you feel good about yourself.</p>
    <p>What I have seems <em>worse</em> than imposter syndrome. It's not a horrible little man who incessantly whispers to me how much of a fraud I am; it's a demon that howls and claws at me, who says I shouldn't <em>exist</em>. That I shouldn't give myself the luxury of being proud of what I've accomplished.</p>
    <p>While I had ostensibly set out to <em>help</em> people in my writing and speaking, there was always an element of egotism involved. I <em>deeply</em> wanted to be recognized and accepted by my peers. While this is a valid need for anyone, it doesn't help the community if it's my sole motivation to do the work. It also doesn't help <em>me</em> if I can't convince myself that I'm worthy of that acceptance.</p>
    <p>It's a new decade, so I'm kicking it off with a long overdue investment in myself. I'm beginning therapy to address the problems I've had my entire life. There's a neglected little kid inside of me who wants to feel better about himself&mdash;and he deserves to. Achievement is a fine end in and of itself, but without the help I need to be a kinder and more positive person to myself and the people I love, it's no substitute for happiness.</p>
  </Blog>
);
