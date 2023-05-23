import Document, { Html, Head, Main, NextScript } from 'next/document'


// this one can be helpfull to render things that are common
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <div id='overlays' />{/*overlays = this one could be helpfull to use with portals to render something like a modal. */}

          <Main /> {/*main: the application is runnning in this one  */}

          <NextScript />
        </body>
      </Html>)
  }
}

