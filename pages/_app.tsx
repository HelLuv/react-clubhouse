import '../styles/globals.scss'
import {AppContext} from "next/app";

function MyApp({ Component, pageProps }:any) {
  return <Component {...pageProps} />
}

export default MyApp
