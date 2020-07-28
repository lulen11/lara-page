import Head from 'next/head'
import Layout from '../components/layout'
// import Logo from '../components/logo'
import Title from '../components/title'

export default function Home() {

  return (
    <Layout>

      <Head>
        <title>Lara Salameh | Frontend Designer</title>
        <meta name="title" content="Lara Salameh | Frontend Designer" />
        <meta name="description" content="I'm a frontend designer - I proudly sit in middle ground between design and development. I love coding the frontend of websites, apps, digital products just as much as I love designing them. I have over 10 years industry experience in UX, UI, Frontend Design & Development." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://larasalameh.com" />
        <meta property="og:title" content="Lara Salameh | Frontend Designer" />
        <meta property="og:description" content="I'm a frontend designer - I proudly sit in middle ground between design and development. I love coding the frontend of websites, apps, digital products just as much as I love designing them. I have over 10 years industry experience in UX, UI, Frontend Design & Development." />
        <meta property="og:image" content="/images/laraMeta@2x.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://larasalameh.com" />
        <meta property="twitter:title" content="Lara Salameh | Frontend Designer" />
        <meta property="twitter:description" content="I'm a frontend designer - I proudly sit in middle ground between design and development. I love coding the frontend of websites, apps, digital products just as much as I love designing them. I have over 10 years industry experience in UX, UI, Frontend Design & Development." />
        <meta property="twitter:image" content="/images/laraMeta@2x.png" />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon@2x.png" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <main>

        {/* <Logo /> */}
        <Title>
          G'day, my name's Lara Salameh. I'm a frontend designer and I'm looking for new opportunities. I'm working on something beautiful to sit here soon. <a href="mailto:hello@larasalameh.com?subject=Hey, I've got something to say!">I'd love to talk!</a>
        </Title>
        
      </main>
    </Layout>
  )
}
