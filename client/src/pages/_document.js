import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Generated by create next app" />
          {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
          {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
          <link rel="icon" href="/assets/illustrations/favicon_io/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
          {/* <script>
            {(function(d) {
              var config = {
                kitId: 'oqz1idy',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document)}
          </script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* The core Firebase JS SDK is always required and must be listed first */}
          <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js"></script>

          {/* TODO: Add SDKs for Firebase products that you want to use
              https://firebase.google.com/docs/web/setup#available-libraries */}
          <script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-analytics.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument