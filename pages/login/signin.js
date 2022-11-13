import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Button from '../../components/button/button'
import Layout, {Section} from '../../components/layout'
import LoginBg from "../../images/login/login-bg.png"
import styles from "../../styles/pages/login/Login.module.scss";
import Link from "next/link";
import {Form, FormInput} from "./signup";

export default function SignIn() {
    return (
        <>
            <Head>
                <title>Quicket Customer Account</title>
                <meta name="description" content="Quicket Customer Account"/>
            </Head>
            <Layout>
                <Section>
                    <div className={`${styles["inner"]}`}>
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
                                    <FormInput id={`register_form_email`} type={`email`}>
                                        Email
                                    </FormInput>
                                    <FormInput id={`register_form_password`} type={`password`}>
                                        Password
                                    </FormInput>
                                </>
                            }
                        >
                            <Button type={`submit`} state={`primary`}>
                                SIGN IN
                            </Button>
                            <p>Don’t have an account? <Link href="/">Register Here</Link></p>
                        </Form>
                        <Image
                            className={`${styles["inner-img"]}`}
                            src={LoginBg}
                            width={500}
                            height={500}
                            alt="Login"
                        />
                    </div>
                </Section>
            </Layout>
        </>
    )
}
