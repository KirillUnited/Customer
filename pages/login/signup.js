import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Button from '../../components/button/button'
import Layout, { Section } from '../../components/layout'
import LoginBg from "../../images/login/login-bg.png"
import styles from "../../styles/pages/login/Login.module.scss";
import Link from "next/link";
import logo from "../../images/icons/logo.svg";
import pswdIcon from "../../images/icons/Eye.svg";

const Form = ({ id, legend = "Form", fieldset, children }) => {
    return (
        <form className={`${styles["form"]}`} id={id} method="POST" action="">
            <legend className={`${styles["form-legend"]}`}>{legend}</legend>
            <fieldset className={`${styles["form-fieldset"]}`}>
                {fieldset}
            </fieldset>
            {children}
        </form>
    )
};

const FormInput = ({ type, id, label, children, ...rest }) => {
    return (
        <div className={`${styles["form-group"]}`}>
            {
                label
                    ? <label className={`${styles["form-label"]}`} htmlFor={id}>{label}</label>
                    : ""
            }
            <div className={`${styles["form-input"]}`}>
                <input
                    className={`${styles["form-input-field"]}`}
                    type={type}
                    id={id}
                    name={id}
                    autoComplete={id}
                    {...rest}
                />
                {children}
            </div>
        </div>
    )
};

function SignUp() {
    return (
        <>
            <Head>
                <title>Sign Up | Quicket Customer Account</title>
                <meta name="description" content="Quicket Customer Account" />
            </Head>
            <Layout header={false} footer={false}>
                <Section>
                    <div className={`${styles["inner"]}`}>
                        <Image
                            className={`${styles["qkt-logo"]}`}
                            src={logo}
                            width={170}
                            height={60}
                            alt={`Logo`}
                        />
                        <Form
                            className={`${styles["inner-form"]}`}
                            id={`register_form`}
                            legend={
                                <>
                                    <h1>Get Started</h1>
                                    <h2>Create your Quicket account</h2>
                                    <p className={`text-line-through`} style={{ marginTop: "25px" }}>Or Register with</p>
                                </>
                            }
                            fieldset={
                                <>
                                    <FormInput
                                        id={`register_form_email`}
                                        type={`email`}
                                        label="Email"
                                        required>
                                    </FormInput>
                                    <FormInput
                                        id={`register_form_password`}
                                        type={`password`}
                                        label="Password"
                                        required>
                                        <Image
                                            src={pswdIcon}
                                            width={20}
                                            height={20}
                                            className={`${styles["form-input-icon"]}`}
                                            alt=""
                                        />
                                    </FormInput>
                                </>
                            }
                        >
                            <Button type={`submit`} state={`primary`}>
                                REGISTER
                            </Button>
                            <p>Already have an account? <Link href={`/login/signin`}>Sign In</Link></p>
                        </Form>
                        <Image
                            className={`${styles["inner-img"]}`}
                            src={LoginBg}
                            width={500}
                            height={500}
                            alt="Login"
                            placeholder={`blur`}
                        />
                    </div>
                </Section>
            </Layout>
        </>
    )
}

export {
    SignUp as default,
    Form,
    FormInput
};
