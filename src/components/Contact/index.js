import { h, render } from "preact";

export default () => (
  <main>
    <section className="subpage__intro subpage__intro--alternate">
      <h1 className="subpage__header">Get in touch</h1>
      <h4 className="subpage__subheader">Interested in working with me, or want to book me to speak at your event? Or maybe you just want to say &quot;hello&quot;? The form below will deliver your message to my inbox in no time.</h4>
    </section>
    <section className="contact">
      <form className="contact__form" method="POST" action="https://formspree.io/jeremy.l.wagner@gmail.com">
        <fieldset>
          <div className="contact__form__field-group">
            <label className="contact__form__label" for="name">Your name?</label>
            <input className="contact__form__field" type="text" name="name" id="name" required />
          </div>
          <div className="contact__form__field-group">
            <label className="contact__form__label" for="email">Email, please!</label>
            <input className="contact__form__field" type="email" name="email" id="email" required />
          </div>
          <div className="contact__form__field-group">
            <label className="contact__form__label" for="message">Tell me what's on your mind.</label>
            <textarea className="contact__form__field contact__form__field--textarea" name="message" id="message" required></textarea>
          </div>
        </fieldset>
        <p className="contact__form__note">Dotted all your i's and crossed your t's? Then click the button below:</p>
        <button className="contact__form__button" type="submit">Send message</button>
      </form>
    </section>
  </main>
);
