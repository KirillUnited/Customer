import React from 'react';

const Footer = () => {
    return (
        <footer className="qkt-bg-white qkt-desktop-block">
            <div className="qkt-container">
                <div className="qkt-flex qkt-justify-content-between qkt-bg-white qkt-pl-5 qkt-pr-5">
      <span>
        <img src="../images/icons/logo.svg" className="qkt-logo"/>
      </span>
                    <span className="qkt-flex qkt-flex-grow-1 qkt-align-items-center qkt-justify-content-right">
        <span className="qkt-mr-3 qkt-font-3">Ready to create an event?</span> <a href="#"
                                                                                  className="qkt-button qkt-btn-orange">Get Started</a>
      </span>
                </div>
                <div className="qkt-flex qkt-justify-content-between qkt-bg-white qkt-pl-5 qkt-pr-5">
      <span>
        <h5 className="qkt-green qkt-m-0">Solutions</h5>
        <ul className="qkt-footer-menu">
          <li><a href="ticketing.html">Tickets</a></li>
          <li><a href="virtual-events.html">Virtual Events</a></li>
          <li><a href="fundraisers.html">Fundraisers</a></li>
          <li><a href="subscriptions.html">Subscriptions</a></li>
        </ul>
      </span>
                    <span>
        <h5 className="qkt-green qkt-m-0">Resources</h5>
        <ul className="qkt-footer-menu">
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Events University</a></li>
          <li><a href="#">Newsroom</a></li>
        </ul>
      </span>
                    <span>
        <h5 className="qkt-green qkt-m-0">Company</h5>
        <ul className="qkt-footer-menu">
          <li><a href="#">Join Our Team</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
        </ul>
      </span>
                    <span>
        <h5 className="qkt-green qkt-m-0">Follow</h5>
        <span className="qkt-mt-3" style={{lineHeight: '2.5rem'}}>
          <a href="http://www.linkedin.com/company/2350818" target="_blank"><span
              className="icon-qkt-social-ln qkt-green qkt-mr-5"/></a>
          <a href="https://twitter.com/QuicketSA" target="_blank"><span
              className="icon-qkt-social-twitter qkt-green qkt-mr-5"/></a>
          <a href="https://www.instagram.com/quicket" target="_blank"><span
              className="icon-qkt-social-instagram qkt-green qkt-mr-5"/></a>
          <a href="https://www.facebook.com/203195039742896" target="_blank"><span
              className="icon-qkt-social-fb qkt-green"/></a>
        </span>
      </span>
                </div>
            </div>
            <div className="qkt-flex qkt-justify-content-center qkt-bg-green qkt-p-5 qkt-mt-5">
    <span className="qkt-mr-5 qkt-white qkt-icon-text">
      <span className="icon-qkt-email"/>
      <a href="mailto:support@quicket.co.za">support@quicket.co.za</a>
    </span>
                <span className="qkt-mr-5 qkt-white qkt-icon-text">
      <span className="icon-qkt-phone"/> +27 21 424 9308
    </span>
                <span className="qkt-mr-5 qkt-white qkt-icon-text">
      © Copyright 2021 Quicket
    </span>
            </div>
        </footer>
    )
};

export default Footer;
