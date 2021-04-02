import Document, { Html, Head, Main, NextScript } from 'next/document';
import ScriptTag from 'react-script-tag';
import { withPrefix } from '../utils';


class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-FY7XJ61B78"></script>
            <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-FY7XJ61B78');
            </script>
                </Head>
                <body>
                    <Main />
                    <ScriptTag src={withPrefix('js/init.js')}/>
                    <ScriptTag src={withPrefix('js/page-load.js')}/>
                    <ScriptTag src={withPrefix('js/page-unload.js')}/>
                    <NextScript />
                    <ScriptTag src={withPrefix('js/tawk.js')}/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
