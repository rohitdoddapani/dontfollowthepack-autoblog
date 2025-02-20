
import Footer from "@/components/Footer";


export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-[#7F5539]">About DontFollowThePack</h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to DontFollowThePack – your go-to space for curated insights, trends, and expert perspectives.
          Our platform automatically transforms the latest video content into high-quality blogs, keeping you 
          informed and ahead of the curve.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Whether you’re here for knowledge, inspiration, or simply discovering something new, 
          we’ve got you covered. Join us in shaping the future of content automation!
        </p>
      </div>
      <Footer />
    </main>
  );
}