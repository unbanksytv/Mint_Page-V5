import tw from "tailwind-styled-components";
import { useNFTCollection, MediaRenderer, useNFT } from "@thirdweb-dev/react";
import { Button } from "./Button";

const Collection = () => {
  const nftCollection = useNFTCollection('0xf9AA4dccaC356f7eBB5F07A3b4Ece60F8119a219');
  const {
    data: nft,
    isLoading,
    error,
  } = useNFT(nftCollection, 0)

  async function getNFTs() {
    const nfts = await nftCollection.getAll()
    return nfts
  }
  
  return (
    !isLoading && 
    <Container>
      <VideoContainer>
        <MediaRenderer
          src={nft?.metadata.animation_url}
          alt={nft?.metadata.name}
        />
      </VideoContainer>
      <TitleContainer>
        <Title>
          {nft?.metadata.name}
        </Title>
      </TitleContainer>
      <DescriptionContainer>
        {nft?.metadata.description}
      </DescriptionContainer>
      <ButtonContainer>
        <GhostButtonLink href="https://livethelife.tv/" target="_blank">Stake</GhostButtonLink>
        <GhostButtonLink href="https://livethelife.tv/" target="_blank">Claim</GhostButtonLink>
      </ButtonContainer>
    </Container>
  )
}

export default ViewCollection

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