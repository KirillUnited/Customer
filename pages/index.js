import Head from 'next/head'
import Image from 'next/image'
import Form, { FormInput } from '../components/form/form'
import Layout, { Section } from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quicket Customer Account</title>
        <meta name="description" content="Quicket Customer Account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Section content='header'>
          <h1>Get Started</h1>
          <h3>Create your Quicket account</h3>
          <p>Or Register with</p>
        </Section>
        <Section>
          <Form id={`register_form`}>
            <FormInput id={`register_form_email`} type={`email`}>
              <label>Email</label>
            </FormInput>
            <FormInput id={`register_form_password`} type={`password`}>
              <label>Password</label>
            </FormInput>
          </Form>
        </Section>
      </Layout>
    </>
  )
}
