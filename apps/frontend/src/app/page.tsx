import Link from "next/link";
import { Sparkles, Gem, Palette, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            KarasuProjectD
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            AI-Powered Ring Design & 3D Generation Platform
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Create personalized rings with artificial intelligence, visualize them in stunning 3D, 
            and bring your dream jewelry to life with our cutting-edge e-commerce platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/design" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Designing
            </Link>
            <Link 
              href="/gallery" 
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Revolutionary Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">AI Design</h3>
            <p className="text-gray-600">
              Generate unique ring designs using advanced AI models trained on thousands of jewelry patterns.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gem className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">3D Visualization</h3>
            <p className="text-gray-600">
              See your ring come to life with real-time 3D rendering, materials, and lighting effects.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Customization</h3>
            <p className="text-gray-600">
              Personalize every aspect - materials, size, style, and intricate design details.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Easy Ordering</h3>
            <p className="text-gray-600">
              Seamless e-commerce experience from design to delivery with secure payment processing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Perfect Ring?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who found their dream jewelry with AI assistance.
          </p>
          <Link 
            href="/design" 
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
