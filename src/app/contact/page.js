import Footer from '../../Components/Footer/index.js';

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-[#7F5539]">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">Have questions? We'd love to hear from you!</p>

        <form action="mailto:your-email@example.com" method="post" enctype="text/plain" className="mt-6">
          <input type="text" name="name" placeholder="Your Name" required
            className="w-full max-w-md p-2 border rounded mb-4 text-gray-800"/>
          <input type="email" name="email" placeholder="Your Email" required
            className="w-full max-w-md p-2 border rounded mb-4 text-gray-800"/>
          <textarea name="message" placeholder="Your Message" required
            className="w-full max-w-md p-2 border rounded mb-4 text-gray-800"></textarea>
          <button type="submit"
            className="bg-[#9C6644] text-white font-medium rounded px-6 py-2 hover:bg-[#7F5539]">
            Send Message
          </button>
        </form>

        <p className="mt-4 text-gray-700">Or reach us via email: <a href="mailto:your-email@example.com" className="underline">your-email@example.com</a></p>
      </div>
      <Footer />
    </main>
  );
}