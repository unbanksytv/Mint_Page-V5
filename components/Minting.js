import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useAddress, useDisconnect, useMetamask, useEditionDrop } from '@thirdweb-dev/react';
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import { useRouter } from 'next/router'
import { Button } from "./Button";

const Minting = () => {
  const [totalSupply, setTotalSupply] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const nftDrop = nftDrop("0xf9AA4dccaC356f7eBB5F07A3b4Ece60F8119a219")
  const router = useRouter()

  const mint = async () => {
    if(EditionDrop && address) {
      setInProgress(true);
      try {
        await EditionDrop.claimTo(address, 0, 1);
        setInProgress(false);
        setCompleted(true);
        router.push('/success')
        toast.success('🦄 Mint Successful! LFG')
      } catch (error) {
        console.log(error)
        setInProgress(false)
        setCompleted(false)
        toast.error('Looks like you do are not on the LTL Allowlist to claim a free NFT.')
      }
    }
  }

  useEffect(() => {
    const getTotal = async () => {
      if(EditionDrop) {
        const total = await EditionDrop.totalSupply(0);
        setTotalSupply(total.toNumber());
      }
    }
    getTotal();
  }, [nftDrop])

  return (
    <Container>
      <Mint>
        <TitleContainer>
          <Title>The Photo Labs <br /> by LiveTheLifeTV<br /> Claim Your NFT.</Title>
        </TitleContainer>
        <ButtonContainer>
            {
              address
                ? <>
                {
                  !completed &&
                    <Button
                      disabled={inProgress}
                      onclick={mint}
                    >
                      {
                        inProgress
                        ? <ReactLoading type="bubbles" color="#000" height={64} />
                        : <>Mint</>
                      }
                    </Button>
                }
                <Button
                  style='ghost'
                  disabled={inProgress}
                  onclick={disconnectWallet}
                >
                  Disconnect
                </Button>
                </>
                :<Button onclick={connectWithMetamask}>
                  Connect Wallet
                </Button>
            }
        </ButtonContainer>
      </Mint>
    </Container>
  )
}

export default Minting

const Count = tw.div`
 flex
 grow
 items-center
 justify-center
`

const ButtonContainer = tw.div`
 mt-2
 gap-4
 flex
`

const Mint = tw.div`
 max-w-screen-sm
 lg:w-1/3
 md:w-1/2
 bg-black
 lg:mt-[-200px]

 z-50
 flex
 flex-col
 pb-4
 pr-4
`

const Title = tw.h2`
 uppercase
 text-3xl
 italic
 font-bold
 mt-3
`

const TitleContainer = tw.div`
 flex
`

const Container = tw.div`
 max-w-screen-lg
 w-full
 z-50
`
