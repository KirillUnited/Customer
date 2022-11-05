import styles from "../../styles/components/Form.module.scss";

const Form = ({id, children}) => {
    return (
        <form className={`${styles["form"]}`} id={id} method="POST" action="">
            <fieldset className={`${styles["form-fieldset"]}`}>
                {children}
            </fieldset>
        </form>
    )
};

const FormInput = ({type, id, children,...rest}) => {
    return (
        <div className={`${styles["form-input"]}`}>
            <input
                type={type}
                id={id}
                name={id}
                {...rest}
            />
            {children}
        </div>
    )
};

export {
    Form as default,
    FormInput
};
