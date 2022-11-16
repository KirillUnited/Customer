import * as React from "react";
import Image from 'next/image';
import logo from "../images/icons/logo.svg";

const Header = (props) => {
    return (
        <>
            <div>
                <nav className="nav desktop-nav qkt-visible-sm qkt-align-items-center">
                    <span className="qkt-mobile-menu"/>
                    <Image src={logo} className="qkt-logo" width={179} height={50} alt={"logo"}/>
                    <div className="qkt-search qkt-ml-auto">
                          <span>
                            <i className="icon-qkt-search"/>
                          </span>
                        <input type="text" className="qkt-search" placholder="Search"/>
                    </div>
                    <ul>
                        <li>
                            <a href="#" className="qkt-flex">
                                <span>Products</span>
                                <i className="icon-qkt-chevron-down"/>
                            </a>
                            <ul>
                                <li><a href="ticketing.html">Ticketing</a></li>
                                <li><a href="virtual-events.html">Online Event</a></li>
                                <li><a href="fundraisers.html">Fundraisers</a></li>
                                <li><a href="subscriptions.html">Subscriptions</a></li>
                            </ul>
                        </li>
                        <li><a href="#"/>Help</li>
                        <li><a href="#"/>Browse Events</li>
                    </ul>
                    <span><button className="qkt-cta-button qkt-btn-green">LOGIN</button></span>
                </nav>
                <nav className="qkt-mobile-nav qkt-hidden-sm">
                    <div id="qkt-mobile-nav"
                         className="qkt-mobile-nav qkt-flex qkt-m-4 qkt-mr-3 qkt-ml-3 qkt-align-items-center">
                        <span className="icon-qkt-menu hideSearch qkt-pointer" data-toggle-class="menuXpanded"
                              data-target="qkt-mobile-nav" style={{fontSize: '1.5rem'}}/>
                        <span className="qkt-flex-grow-1 hideSearch hideMenu">
                        <Image src={logo} className="qkt-logo" width={179} height={50} alt={"logo"}/>
      </span>
                        <span className="qkt-flex qkt-align-items-center">
        <i className="icon-qkt-search hideSearch qkt-pointer" data-toggle-class="searchXpanded"
           data-target="qkt-mobile-nav" style={{fontSize: '1.5rem'}}/>
        <div className="qkt-search qkt-ml-auto showSearch" style={{display: 'none'}}>
          <span>
            <i className="icon-qkt-search"/>
          </span>
          <input type="text" className="qkt-search" placholder="Search"/>
        </div>
        <i className="icon-qkt-cross showSearch qkt-pointer" data-toggle-class="searchXpanded"
           data-target="qkt-mobile-nav"/>
      </span>
                        <div className="showMenu" style={{
                            display: 'none',
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,.75)',
                            zIndex: 10
                        }}/>
                        <div className="mobileNav showMenu qkt-flex-column qkt-pt-4 qkt-pl-2 qkt-pr-2"
                             style={{display: 'none', maxWidth: 310, zIndex: 20}}>
                            <div className="qkt-flex qkt-justify-content-between qkt-align-items-center">
          <span className="flex-grow-1">
          <Image src={logo} className="qkt-logo" width={179} height={50} alt={"logo"}/>
          </span>
                                <i className="icon-qkt-cross qkt-pointer qkt-pr-2" data-toggle-class="menuXpanded"
                                   style={{fontSize: '1.5rem'}} data-target="qkt-mobile-nav"/>
                            </div>
                            <ul className="qkt-mb-5">
                                <li className="submenu" id="qkt-mobile-home" data-toggle-class="active"
                                    data-target="qkt-mobile-home">
                                    <span className="qkt-flex qkt-justify-content-between">Home <i
                                        className="icon-qkt-chevron-down qkt-p-1"/></span>
                                </li>
                                <li className="submenu" id="qkt-mobile-solutions" data-toggle-class="active"
                                    data-target="qkt-mobile-solutions">
                                    <span className="qkt-flex qkt-justify-content-between">Solutions <i
                                        className="icon-qkt-chevron-down qkt-p-1"/></span>
                                </li>
                                <li className="submenu" id="qkt-mobile-resources" data-toggle-class="active"
                                    data-target="qkt-mobile-resources">
                                    <span className="qkt-flex qkt-justify-content-between">Resources <i
                                        className="icon-qkt-chevron-down qkt-p-1"/></span>
                                </li>
                                <li className="submenu" id="qkt-mobile-company" data-toggle-class="active"
                                    data-target="qkt-mobile-company">
                                    <span className="qkt-flex qkt-justify-content-between">Company <i
                                        className="icon-qkt-chevron-down qkt-p-1"/></span>
                                    <ul>
                                        <li>Join our Team</li>
                                        <li>Contact Us</li>
                                        <li>Privacy Policy</li>
                                        <li>Terms &amp; Conditions</li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="qkt-social qkt-pt-2" style={{borderTop: '1px solid #c0c0c0'}}>
                                <div className="qkt-p-2">
                                    <h6 className="qkt-m-0 qkt-subtitle-1">Follow Us</h6>
                                    <span className="qkt-mt-3" style={{lineHeight: '2.5rem'}}>
              <span className="icon-qkt-social-ln qkt-green qkt-mr-4"/>
              <span className="icon-qkt-social-twitter qkt-green qkt-mr-4"/>
              <span className="icon-qkt-social-instagram qkt-green qkt-mr-4"/>
              <span className="icon-qkt-social-fb qkt-green"/>
            </span>
                                </div>
                            </div>
                            <button className="qkt-button qkt-mt-5 qkt-bg-green qkt-white">SIGN IN</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default Header;
