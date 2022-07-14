import "../css/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.min.css'

export const activeChainId = ChainId.Rinkeby;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}
      chainRpc={{
        [ChainId.Rinkeby]: 'https://mainnet.infura.io/v3/8939c7d1d5d44d7aa151d4173f5b8189'
      }}>
      <Component {...pageProps} />
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThirdwebProvider>
  )
}

export default MyApp
