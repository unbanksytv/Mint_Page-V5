import tw from "tailwind-styled-components";

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
      Photography and photogrammetry-centric NFT art gallery. © 2022 Degen Vibes LLC
      </FooterContainer>
    </Container>
  )
}

export default Footer

const FooterContainer = tw.div`
 max-w-screen-lg
 w-full
`

const Container = tw.div`
 flex
 justify-center
 my-5
 text-center
`
