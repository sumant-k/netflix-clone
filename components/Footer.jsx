import Link from "next/link"
export default function Footer(props) {
  return (
    <footer className={"footer " + props.className}>
      <div className="footer__wrapper">
        <p className="footer-top">
          Questions?&nbsp;Call&nbsp;
          <a className={"text-gray-2"} href={"tel:000-800-040-1843"}>
            &nbsp;000-800-040-1843
          </a>
        </p>
        {props.CustomUL ? (
          <props.CustomUL />
        ) : (
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
        
        )}

        <div className={"footer-lang-select"}>
          <select name="language-selector" id="language-selector">
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      {props.children}
      </div>
    </footer>
  )
}
