import * as React from "react"
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/layout/Layout.module.scss";

const Layout = ({children, header = true, footer = true}) => {
    return (
        <div className={`${styles["wrapper"]}`}>
            {header && <Header/>}
            <main className={`${styles["content"]}`}>{children}</main>
            {footer && <Footer/>}
        </div>
    )
};

const Section = ({children, content = "inner", ...rest}) => {
    return (
        <section className={`${styles["section"]} ${rest.classes ? rest.classes : ""}`} {...rest}>
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
