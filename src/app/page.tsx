import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function NFTLandingPage() {
  return (
    <div className="min-h-screen bg-[#121221] text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">NFT Collection</div>
        <Button className="bg-[#98ff99] text-black hover:bg-[#7aff7c]">Connect Wallet</Button>
      </nav>

      {/* Dividing line between header and content */}
      <hr className="border-t border-gray-600 w-full" />

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
              <Button size="lg" className="bg-[#98ff99] text-[#121221] hover:bg-[#7aff7c]">
                Claim Your NFT
              </Button>
            </div>
            {/* NFT Image */}
            <div className="w-full md:w-1/3">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Featured NFT"
                  alt="Featured NFT"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features and Benefits Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Holder Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Exclusive Events", description: "Access to VIP art shows and gallery openings" },
              { title: "Community Access", description: "Join our private Discord channel for collectors" },
              { title: "Future Drops", description: "Priority access to future NFT releases" },
              { title: "Voting Rights", description: "Influence the direction of our NFT project" },
              { title: "Physical Prints", description: "Receive high-quality prints of your digital NFTs" },
              { title: "Artist Interactions", description: "Meet-and-greet opportunities with featured artists" },
            ].map((benefit, index) => (
              <div key={index} className="bg-[#1d1d35] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Dividing line between content and footer */}
      <hr className="border-t border-gray-600 w-full" />

      {/* Footer */}
      <footer className="text-center py-6">
        <p>2025 ❤️ by Anshorul azda</p>
      </footer>
    </div>
  )
}

