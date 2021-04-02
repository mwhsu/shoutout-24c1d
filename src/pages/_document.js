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
                <Head></Head> />
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
