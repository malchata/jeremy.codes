import { h, render } from "preact";
import Blog from "../../../components/Blog";
import CodeBlock from "../../../components/CodeBlock";

export const Metadata = {
  title: "Indelible Lines",
  date: "9 October, 2019",
  description: "What we're willing to accept as our ethical responsibility as web developers will define what we stand for, and what we will not tolerate.",
  slug: "/blog/indelible-lines/",
  sitemapPriority: 1.0
};

export default () => (
  <Blog title={Metadata.title} date={Metadata.date}>
    <p>The world is a harsh place to exist for those who are acutely aware of human suffering. I've been livid about the current state of political affairs, and how this country is sliding into a real-life reenactment of <em><a href="https://en.wikipedia.org/wiki/Idiocracy" rel="noopener">Idiocracy</a></em>, albeit a rendition which is more <a href="https://www.theatlantic.com/ideas/archive/2018/10/the-cruelty-is-the-point/572104/" rel="noopener">enthusiastically cruel</a> and willfully ignorant than I ever thought possible.</p>
    <p>As web developers, our role in creating and maintaining systems is central to the functioning of organizations. Yet, I'm reminded on a depressingly frequent basis that the very systems we create with the purest intentions can nevertheless become instruments of cruelty and outright violence.</p>
    <p>I'm encouraged by <a href="https://firstdonoharm.dev/" rel="noopener">people in our field who are actively seeking to reduce or eliminate the harm the software they make can be party to</a>. Yet, I'm <em>discouraged</em> by <a href="https://github.com/lerna/lerna/pull/1633" rel="noopener">how such efforts are often curtailed</a> or even ridiculed by those in positions of privilege. This curtailment frequently occurs when one of the iron laws of capitalism is threatened, which is <em>don't fuck with the money</em>. When you start fucking with the money, that's when you'll be met with challengers offering amoral appeals to <a href="https://opensource.org/faq#evil" rel="noopener">a woefully inadequate credo</a> A credo, by the way, which begs to be realigned to meaningfully address the ethical challenges we face.</p>
    <p>One of the bleak truths about how we make a living in tech is that it's far easier to ignore your ethical responsibilities to those who use or are otherwise affected by the software you build and the systems you maintain. The most privileged among us have never had to trouble ourselves with such thoughts. Our careers have been myopically fixed on merely shipping code and getting paid, as though those actions constituted the entirety of our professional obligations.</p>
    <p>While compensation&mdash;and <em>fair</em> compensation at that&mdash;is a vital component of a life lived with dignity, excruciating care must be taken to not debase ourselves in the pursuit of material wealth. What you build will reach into the ether at one end of our medium, and&mdash;depending on how you act on your responsibilities&mdash;may cause harm when it emerges through the other side.</p>
    <p><em>How</em> what we make as web developers can cause harm isn't as starkly defined as, say, writing missile guidance software for a weapons contractor. Yet this much should be <em>painfully</em> clear: <a href="https://www.vice.com/en_us/article/wjw4az/internal-email-github-plans-to-renew-ice-immigration-customs-enforcement-contract" rel="noopener">providing software services for a law enforcement agency</a> with a documented history of <a href="https://www.aclu.org/blog/immigrants-rights/ice-and-border-patrol-abuses/ice-separates-18-month-old-mother-months" rel="noopener">human rights abuses</a>, <a href="https://www.vice.com/en_us/article/43banm/ice-just-deported-25-somalis-who-said-they-were-physically-and-sexually-abused-in-detention" rel="noopener">violence committed against marginalized people</a>, and <a href="https://www.aclu.org/blog/immigrants-rights/ice-and-border-patrol-abuses/justice-jose-antonio-16-year-old-boy-killed-us" rel="noopener">outright murder</a> is <em>itself</em> an abuse no ethical technologist should be party to.</p>
    <p>Now that technology is omnipresent in nearly every part of our lives, we must meaningfully acknowledge that politics and tech are irrevocably fused. A new and vital aspect of our work will require that we understand what constitutes a violation of our professional ethics and responsibilities. <a href="https://vimeo.com/339383874" rel="noopener">We <em>must</em> organize</a> in order to meaningfully resist demands to build and maintain systems which violate human rights as well as our principles. If we attempt to go it alone, we can only draw lines in the sand. If we organize and resist collectively, we will etch inedible lines in stone which will force bad actors to abandon their malpractice.</p>
  </Blog>
);