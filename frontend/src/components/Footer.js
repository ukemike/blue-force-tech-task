import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer-area bg-1F242F pt-100 pb-75">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h3>About</h3>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet. Nulla porttitor accumsan.
                  </p>
                  <ul className="footer-information">
                    <li>
                      <i className="ri-phone-fill" />{" "}
                      <a href="tel:0485443322">(04) 8544 3322</a>
                    </li>
                    <li>
                      <i className="ri-mail-line" />{" "}
                      <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#3e565b5252517e555f5a57105d5153">
                        <span
                          className="__cf_email__"
                          data-cfemail="1c71797e75785c7b717d7570327f7371"
                        >
                          [email&nbsp;protected]
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="ri-map-pin-fill" /> 24 Newport road, carlton
                      IP19
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget ps-5">
                  <h3>Our departments</h3>
                  <ul className="quick-links">
                    <li>
                      <a href="department-details.html">Orthopedic</a>
                    </li>
                    <li>
                      <a href="department-details.html">Dental service</a>
                    </li>
                    <li>
                      <a href="department-details.html">Neurology</a>
                    </li>
                    <li>
                      <a href="department-details.html">Emergency department</a>
                    </li>
                    <li>
                      <a href="department-details.html">Diagnosis department</a>
                    </li>
                    <li>
                      <a href="department-details.html">Therapy department</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget ps-3">
                  <h3>Useful link</h3>
                  <ul className="quick-links">
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="find-doctor.html">Find a doctor</a>
                    </li>
                    <li>
                      <a href="patients-and-visitors.html">
                        Patients and visitors
                      </a>
                    </li>
                    <li>
                      <a href="department-details.html">
                        International services
                      </a>
                    </li>
                    <li>
                      <a href="terms-of-service.html">Terms and conditions</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-footer-widget">
                  <h3>Newsletter</h3>
                  <div className="widget-newsletter-content">
                    <p>Sign up now for weekly news and updates</p>
                    <form
                      className="newsletter-form"
                      data-bs-toggle="validator"
                    >
                      <input
                        type="email"
                        className="input-newsletter"
                        placeholder="Email address"
                        name="EMAIL"
                        required
                        autoComplete="off"
                      />
                      <button type="submit">
                        <i className="flaticon-right-arrow" />
                      </button>
                      <div id="validator-newsletter" className="form-result" />
                    </form>
                    <ul className="footer-widget-social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="ri-facebook-line" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="ri-twitter-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="ri-instagram-fill" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="ri-linkedin-fill" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-shape-1">
            <img src="/assets/images/footer-shape-2.png" alt="image" />
          </div>
        </footer>
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-content">
              <p>
                Copyright © 2021 Mebid All Rights Reserved by
                <a href="https://envytheme.com/" target="_blank">
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="go-top">
          <i className="ri-arrow-up-s-line" />
        </div>
      </div>
    </>
  );
};

export default Footer;
