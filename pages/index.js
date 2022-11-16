import Head from 'next/head'
import Layout, {Section} from '../components/layout'
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Quicket Customer Account</title>
                <meta name="description" content="Quicket Customer Account"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Section>
                    <h1>Get Started</h1>
                    <h2>Create your Quicket account</h2>
                    <p>Or Register with</p>
                    <p><Link href={`/login/signup`}>Sign Up</Link></p>
                    <p><Link href={`/login/signin`}>Sign In</Link></p>
                </Section>
            </Layout>
        </>
    )
}
