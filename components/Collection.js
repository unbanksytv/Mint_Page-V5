import tw from "tailwind-styled-components";
import { useNFTCollection, ThirdwebNftMedia, useNFT } from "@thirdweb-dev/react";

const Collection = () => {
  const nftCollection = useNFTCollection('0xf9AA4dccaC356f7eBB5F07A3b4Ece60F8119a219');
  const {
    data: nft,
    isLoading,
    error,
  } = useNFT(nftCollection, { start: 0, count: 100 })

  async function getNFTs() {
    const nfts = await nftCollection.getAll()
    return nfts
  }
  
  return (
    <div>
      {!isLoading && nft ? (
        <ThirdwebNftMedia metadata={nft.metadata} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Collection

const VideoContainer = tw.div`
 mt-12
 max-w-screen-lg
`

const Container = tw.div`
 flex
 flex-col
 items-center
`

const TitleContainer = tw.div`
 text-white
 flex
`

const DescriptionContainer = tw.div`
 flex
 max-w-screen-lg
 justify-center
 text-center
 text-lg
 font-bold
`

const Title = tw.h2`
 uppercase
 text-3xl
 italic
 font-bold
 mt-3
`

const ButtonContainer = tw.div`
  flex
`

const SolidButtonLink = tw.a`
 flex
 justify-center
 items-center
 bg-[#f9d500]
 hover:bg-white
 transition-all
 text-black
 font-bold
 py-2
 px-4
 rounded
 uppercase
 h-14
 mx-3
 my-6
`

const GhostButtonLink = tw(SolidButtonLink)`
 bg-black
 text-[#f9d500]
 border-2
 border-[#f9d500]
 hover:bg-[#f9d500]
 hover:text-black
`