import "../styles/globals.css";
import Layout from "../layout/layout";
// import { AuthProvider } from "./context/Auth";
import { AuthProvider } from "../context/auth";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    );
}

export default MyApp;
