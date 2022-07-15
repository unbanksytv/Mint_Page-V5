import Head from "next/head";
import tw from "tailwind-styled-components";

// Components
import Header from "../components/Header";
import Collection from "../components/Collection";
import Footer from "../components/Footer";

export default function NFTCollection() {
  const nftCollection = useNFTCollection("0xf9AA4dccaC356f7eBB5F07A3b4Ece60F8119a219");
  const { data: nfts, isLoading } = useNFTs(nftCollection);

  return (
    <Container>
      <Head>
        <title>The Photo Labs - Your NFT</title>
        <meta name="description" content="Made with love by LiveTheLifeTV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Collection />
      <Footer />
    </Container>
  )
}

const Container = tw.div`
 w-screen
 h-screen
 bg-black
 text-white
 px-7
 flex
 flex-col
 justify-between
`