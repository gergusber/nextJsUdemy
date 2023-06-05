import ContactForm from "../../components/contact/contact-form"
import Head from "next/head";

const Contact = () => {
  return <>
    <Head>
      <title >Contact me</title>
      <meta name='description' content='Send me your messages' />
    </Head>
    <ContactForm />
  </>
}

export default Contact