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
                <Head />
                <body>
                    <Main />
                    <ScriptTag src={withPrefix('js/init.js')}/>
                    <ScriptTag src={withPrefix('js/page-load.js')}/>
                    <ScriptTag src={withPrefix('js/page-unload.js')}/>
                    <NextScript />
                    /** Start of Tawk.to Script-->
                    <script type="text/javascript">
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/60664d0f067c2605c0be90f5/1f27pq0tu';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
                    </script>
                    <!--End of Tawk.to Script-->
                </body>
            </Html>
        );
    }
}

export default MyDocument;
