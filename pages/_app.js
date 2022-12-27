
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer.jsx'
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
        <div className="font-creato min-h-screen max-h-screen bg-[#121212]">
          <Navbar />
          <Component />
        </div>

        <Script src="https://kit.fontawesome.com/4e0b8e54bb.js" crossOrigin="anonymous" />
    </ThirdwebProvider>
  );
}

export default MyApp;
