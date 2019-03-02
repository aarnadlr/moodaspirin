import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <meta name="keywords" content="moodaspirin, mood, cbd, thc, aspirin, vitamin"/>
          <meta name="description" content="moodaspirin"/>
          <meta name="subject" content="moodaspirin"/>
          <meta name="copyright"content="moodaspirin"/>
          <meta name="language" content="EN"/>
          <meta name="robots" content="index,follow" />

          <meta name="og:title" content="moodaspirin"/>
          <meta name="og:type" content="website"/>
          <meta name="og:url" content="https://moodaspirin.com/"/>
          <meta name="og:image" content="../static/logo-files/logo-preview-1200sq.jpg"/>
          <meta name="og:site_name" content="IMDb"/>
          <meta name="og:description" content="A group of U.S. Marines, under command of..."/>
          <meta name="tweetmeme-title" content="moodaspirin" />


          <link rel="apple-touch-icon" sizes="180x180" href="../static/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png"/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument