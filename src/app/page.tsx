"use client"

import { ConnectButton, MediaRenderer, TransactionButton, useReadContract, useActiveAccount } from "thirdweb/react"
import { getContractMetadata } from "thirdweb/extensions/common"
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { claimTo } from "thirdweb/extensions/erc721"

const client = createThirdwebClient({
  clientId: "923890477f58245d479a38743c65f25f",
});

const contract = getContract({
  client,
  chain: defineChain(93384),
  address: "0xD6224c1E5e93383d62796A8939cde02e8F4FFcaF",
});

export default function NFTLandingPage() {
  const account = useActiveAccount();

  const { data: contractMetadata } = useReadContract(getContractMetadata, {
    contract: contract
  });

  return (
    <div className="min-h-screen bg-[#121221] text-white flex flex-col">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto w-full flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-[#98ff99]">teaBOSS</div>
        {/*<Button className="bg-[#98ff99] text-black hover:bg-[#7aff7c]">Connect Wallet</Button> */}
        <ConnectButton 
          client={client}
          connectButton={{
            label: "Connect",
            className: "bg-[#98ff99] hover:bg-[#98ff99]/80",
          }}
        />
      </nav>

      {/* Dividing line between header and content */}
      <hr className="border-t border-[#98ff99] w-full" />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
            {/* Content */}
            <div className="w-full md:w-2/3 space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">Exclusive NFT Collection</h1>
              <p className="text-lg">
                Unique digital art by renowned artists. Secure blockchain ownership. Join our exclusive community and
                unlock special benefits.
              </p>
              {/* <Button size="lg" className="bg-[#98ff99] text-[#121221] hover:bg-[#7aff7c]">
                Claim Your NFT
              </Button> */}
              <TransactionButton
                    className="bg-[#98ff99] hover:bg-[#98ff99]/80"
                    transaction={() => claimTo({
                      contract:contract,
                      to: account?.address as string,
                      quantity: BigInt(1),
                    })}
                    onTransactionConfirmed={async () => alert("Transaction Confirmed")}
                  >
                    Claim NFT
                  </TransactionButton>
            </div>
            {/* NFT Image */}
            <div className="w-full md:w-1/3">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                {/*<Image
                  src="/placeholder.svg?height=400&width=400&text=Featured NFT"
                  alt="Featured NFT"
                  layout="fill"
                  objectFit="cover"
                /> */}
                <MediaRenderer
                client={client}
                src={contractMetadata?.image}
                width="400"
                height="400"
                style={{
                  borderRadius: "1rem",
                  border: "1px solid #98ff99",
                  boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features and Benefits Section */}
        <section className="container mx-auto px-4 py-2">
          <h2 className="text-3xl font-bold mb-8 text-center">Holder Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Exclusive Events", description: "Access to VIP art shows and gallery openings" },
              { title: "Community Access", description: "Join our private Discord channel for collectors" },
              { title: "Future Drops", description: "Priority access to future NFT releases" },
              
            ].map((benefit, index) => (
              <div key={index} className="bg-[#1d1d35] p-4 rounded-lg border border-[#98ff99]">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                {benefit.description}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Dividing line between content and footer */}
      <hr className="border-t border-[#98ff99] w-full" />

      {/* Footer */}
      <footer className="text-center py-6">
        <p>© 2025 Built with ❤️ by Aazda</p>
      </footer>
    </div>
  )
}
