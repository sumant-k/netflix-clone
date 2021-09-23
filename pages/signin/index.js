import NavSpaceHolder from "../../components/NavSpaceholder";
import Header from "../../components/Header";

export default function index(props) {
  return (
    <>
      <Header />
      <section className={"signin-page"}>
        <NavSpaceHolder />
        <main className="signin-box">
          <form action="" className="signin-form">
            <h3 className={"signin-form__header"}>Sign In</h3>
            <div className="form-group">
              <input
                required={true}
                id={"input-email"}
                type="text"
                className="form-control"
              />
              <label htmlFor="input-email" className="form-label">
                Email or phone number
              </label>
              <span className="form-error-label">Please enter valid email</span>
            </div>
            <div className="form-group">
              <input
                required={true}
                id={"input-password"}
                type="password"
                className="form-control"
              />
              <label htmlFor="input-password" className="form-label">
                password
              </label>
            </div>
            <div className="form-group mt-md">
              <button className="btn btn-primary">Sign In</button>
            </div>
            <div className="remember">
              <div className="remember__checkbox">
                <input className={""} id={"input-remember"} type="checkbox" />
                <label className={"remember__label"} htmlFor="input-remember">
                  Remember me
                </label>
              </div>
              <a href={"#"} className={"remember__help"}>
                Need Help?
              </a>
            </div>
            <div className="facebook-signin">
              <img
                src="/assets/images/FB-f-Logo__blue_57.png"
                alt="Facebook"
                className="facebook-signin__fb-logo"
              />
              <span className={"facebook-signin__fb-message"}>
                Login with Facebook
              </span>
            </div>
            <div className={"signup-message"}>
              <span className={"text-gray-2"}>New to Netflix?</span>{" "}
              <stron className="text-white">Sign up Now</stron>
            </div>
            <div className="captcha">
              <p className={"text-gray-2"}>
                This page is protected by Google reCAPTCHA to ensure
                you&lsquo;re not a bot.&nbsp;
                <a className={"color-dark-blue-1"} href="#">
                  Learn More
                </a>
              </p>
            </div>
          </form>
        </main>
        <footer className="footer">
          <div className="footer__wrapper">
            <p className="footer-top">
              Questions?&nbsp;Call&nbsp;
              <a className={"text-gray-2"} href={"tel:000-800-040-1843"}>
                &nbsp;000-800-040-1843
              </a>
            </p>
            <ul className="footer-links">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Help Centre</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
            </ul>
            <div className={"footer-lang-select"}>
              <select name="language-selector" id="language-selector">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
