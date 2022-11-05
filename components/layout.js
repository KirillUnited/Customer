import * as React from "react"
import PropTypes from "prop-types"

// import Header from "./header/header";
// import Footer from "./footer/footer";
import styles from "../styles/layout/Layout.module.scss";

const Layout = ({children}) => {
    return (
        <div className={`${styles["wrapper"]}`}>
            {/* <Header/> */}
            <main className={`${styles["content"]}`}>{children}</main>
            {/* <Footer/> */}
        </div>
    )
};

const Section = ({children, content = "content", ...rest}) => {
    return (
        <section className={`${styles["section"]} ${rest.classes? rest.classes:""}`} {...rest}>
            <div className={`${styles["container"]}`}>
                <div className={`${styles["section-" + content]}`}>{children}</div>
            </div>
        </section>
    )
};

export {
    Layout as default,
    Section
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
