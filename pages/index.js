import Footer from "../components/Footer"
import Header from "../components/Header"
import NavSpaceHolder from "../components/NavSpaceholder"

export default function Home() {
  const onTriggerAccordion = () => {
    // const accordionContent =
    //   document.getElementsByClassName("accordion__content")[0]
    // // console.log("accordion: ", accordionContent[0])
    // accordionContent.classList.toggle("accordion__content-show")
  }
  return (
    <>
      <main className="home-page-wrapper">
        <Header />
        <NavSpaceHolder />
        <div className="home">
          <h1 className="title-primary text-center home__title">
            Unlimited movies, TV shows and more.
          </h1>
          <h2 className="title-secondary text-center">
            Watch anywhere. Cancel anytime.
          </h2>
          <h3 className="title-tertiary home__msg text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form className="home__signup-form">
            <input
              id="user-email"
              type="text"
              className="home__signup-form__email"
              required
            />
            <label
              htmlFor="user-email"
              className="home__signup-form__email-label"
            >
              Email address
            </label>
            <button role="button" className="home__signup-form__btn">
              Get Started
            </button>
          </form>
        </div>
      </main>
      <section className="story">
        <div className="story-card">
          <div className="story-card__1-message">
            <h1 className="title-primary">Enjoy on your TV.</h1>
            <h2 className="title-secondary">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div className="story-card__img-wrapper">
            <img
              className="story-card__img-wrapper__tv img"
              src="/assets/images/tv.png"
              alt="img"
            />
            <video
              className="story-card__img-wrapper__video-1"
              autoPlay
              playsInline
              muted
              loop
            >
              <source
                src="/assets/videos/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="story-card story-card--reverse">
          <div className="story-card__img-wrapper">
            <img
              className="story-card__img-wrapper__tv img"
              src="/assets/images/mobile-0819.jpg"
              alt="img"
            />
            <div className="downloading-card">
              <img
                className="downloading-card__img"
                src="/assets/images/boxshot.png"
                alt=""
              />
              <div className="downloading-card__status">
                <h4 className="title-h4">Stranger Things</h4>
                <span>Downloading...</span>
              </div>
              <div className="downloading-card__loader" />
            </div>
          </div>
          <div className="story-card__2-message">
            <h1 className="title-primary">
              Download your shows to watch offline.
            </h1>
            <h2 className="title-secondary">
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
        </div>
        <div className="story-card">
          <div className="story-card__1-message">
            <h1 className="title-primary">Watch everywhere.</h1>
            <h2 className="title-secondary">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
          <div className="story-card__img-wrapper">
            <img
              className="story-card__img-wrapper__tv img"
              src="/assets/images/device-pile-in.png"
              alt="img"
            />
            <video
              className="story-card__img-wrapper__video-2"
              autoPlay
              playsInline
              muted
              loop
            >
              <source
                src="/assets/videos/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="story-card story-card--reverse">
          <div className="story-card__img-wrapper">
            <img
              className="story-card__img-wrapper__tv img"
              src="/assets/images/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png"
              alt="img"
            />
          </div>
          <div className="story-card__2-message">
            <h1 className="title-primary">Create profiles for children.</h1>
            <h2 className="title-secondary">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h2>
          </div>
        </div>
      </section>
      <section className="FAQ">
        <h1 className="title-primary text-center">
          Frequently Asked Questions
        </h1>
        <div className="accordion-wrapper">
          <ul className="accordion-list">
            <li>
              <div className="accordion">
                <div
                  onClick={onTriggerAccordion}
                  className="accordion__trigger accordion__title title-secondary"
                >
                  What is Netflix?
                  <input
                    type="checkbox"
                    className="accordion__trigger__placeholder"
                  />
                  <span className="accordion__trigger__indicator" />
                </div>
                <div className="accordion__content">
                  <p>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries and
                    more – on thousands of internet-connected devices.
                    <br />
                    <br />
                    You can watch as much as you want, whenever you want,
                    without a single ad – all for one low monthly price.
                    There&apos;s always something new to discover, and new TV
                    shows and movies are added every week!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="accordion">
                <div
                  onClick={onTriggerAccordion}
                  className="accordion__trigger accordion__title title-secondary"
                >
                  How much does Netflix cost?
                  <input
                    type="checkbox"
                    className="accordion__trigger__placeholder"
                  />
                  <span className="accordion__trigger__indicator" />
                </div>
                <div className="accordion__content">
                  <p>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from ₹ 199 to ₹ 799 a month. No extra costs, no
                    contracts.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="accordion">
                <div
                  onClick={onTriggerAccordion}
                  className="accordion__trigger accordion__title title-secondary"
                >
                  Where can I watch?
                  <input
                    type="checkbox"
                    className="accordion__trigger__placeholder"
                  />
                  <span className="accordion__trigger__indicator" />
                </div>
                <div className="accordion__content">
                  <p>
                    Watch anywhere, anytime, on an unlimited number of devices.
                    Sign in with your Netflix account to watch instantly on the
                    web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app,
                    including smart TVs, smartphones, tablets, streaming media
                    players and game consoles.
                    <br />
                    <br />
                    You can also download your favourite shows with the iOS,
                    Android, or Windows 10 app. Use downloads to watch while
                    you&apos;re on the go and without an internet connection.
                    Take Netflix with you anywhere.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="accordion">
                <div
                  onClick={onTriggerAccordion}
                  className="accordion__trigger accordion__title title-secondary"
                >
                  How do I cancel?
                  <input
                    type="checkbox"
                    className="accordion__trigger__placeholder"
                  />
                  <span className="accordion__trigger__indicator" />
                </div>
                <div className="accordion__content">
                  <p>
                    Netflix is flexible. There are no annoying contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="accordion">
                <div
                  onClick={onTriggerAccordion}
                  className="accordion__trigger accordion__title title-secondary"
                >
                  What can I watch on Netflix?
                  <input
                    type="checkbox"
                    className="accordion__trigger__placeholder"
                  />
                  <span className="accordion__trigger__indicator" />
                </div>
                <div className="accordion__content">
                  <p>
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="accordion">
                <div
                  onClick={onTriggerAccordion}
                  className="accordion__trigger accordion__title title-secondary"
                >
                  Is Netflix good for kids?
                  <input
                    type="checkbox"
                    className="accordion__trigger__placeholder"
                  />
                  <span className="accordion__trigger__indicator" />
                </div>
                <div className="accordion__content">
                  <p>
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and films in their own space.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="form-2">
          <h3 className="title-tertiary home__msg text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form className="home__signup-form">
            <input
              id="user-email-1"
              type="text"
              className="home__signup-form__email"
              required
            />
            <label
              htmlFor="user-email-1"
              className="home__signup-form__email-label"
            >
              Email address
            </label>
            <button role="button" className="home__signup-form__btn">
              Get Started
            </button>
          </form>
        </div>
      </section>
      <Footer className="footer--dark" CustomUL={CustomUL} />
    </>
  )
}
const CustomUL = () => {
  const array = [
    "FAQ",
    "Help Centre",
    "Account",
    "Media Centre",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ]
  return (
    <ul className="footer-links">
      {array.map((ele, index) => (
        <li key={index}>
          <a href="#">{ele}</a>
        </li>
      ))}
    </ul>
  )
}
