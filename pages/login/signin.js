import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Button from '../../components/button/button'
import Layout, {Section} from '../../components/layout'
import LoginBg from "../../images/login/login-bg.png"
import styles from "../../styles/pages/login/Login.module.scss";
import Link from "next/link";
import {Form, FormInput} from "./signup";
import logo from "../../images/icons/logo.svg";
import pswdIcon from "../../images/icons/Eye.svg";

export default function SignIn() {
    return (
        <>
            <Head>
                <title>Sign In | Quicket Customer Account</title>
                <meta name="description" content="Quicket Customer Account"/>
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
                                    <h1>Welcome Back</h1>
                                    <h2>Sign In To Your Quicket account</h2>
                                    <p className={`text-line-through`} style={{marginTop: "25px"}}>Or Sign In with</p>
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
                                SIGN IN
                            </Button>
                            <p>Don’t have an account? <Link href={`/login/signup`}>Register Here</Link></p>
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
