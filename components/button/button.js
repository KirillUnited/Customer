import styles from "../../styles/components/Button.module.scss";
import React from "react";

const Button = ({ children, state = null, ...rest }) => {
    return (
        <button className={`${styles["btn"]} ${state ? styles["btn-" + state] : ""}`} {...rest}>{children || "Button"}</button>
    )
};

export default Button;
