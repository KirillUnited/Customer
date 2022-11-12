import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/button/button'
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
            <Button type={`submit`} state={`primary`}>
              Primary
            </Button>
            <Button type={`submit`} state={`secondary`}>
              Secondary
            </Button>
            <Button type={`submit`} state={`invert`}>
              
            </Button>
            <Button type={`submit`} disabled>
              Disabled
            </Button>
          </Form>
        </Section>
      </Layout>
    </>
  )
}
