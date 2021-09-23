import Document, { Head, Html, Main, NextScript } from 'next/document';

class AppDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name={"viewport"} content={"width=device-width, initial-scale=1.0"} />
          <title>Clubhouse: The Social Audio App
          </title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap"
                rel="stylesheet"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default AppDocument;