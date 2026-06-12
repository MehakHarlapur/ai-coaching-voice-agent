export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Text Section */}
        <div className="max-w-3xl">
          <p className="text-lg text-gray-600 mb-4">
            We are a team of passionate educators and technologists dedicated to
            revolutionizing the way people learn through AI-powered voice coaching.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our mission is to make personalized education accessible to everyone,
            everywhere, through the power of artificial intelligence and natural
            language processing.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
            Our Story
          </h2>
          <p className="text-gray-600">
            Founded in 2025, our journey began with a simple idea: what if we could
            create an AI that doesn't just teach, but understands and adapts to each
            learner's unique needs?
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://www.cryptopolitan.com/wp-content/uploads/2024/01/Leonardo_Diffusion_XL_Create_an_image_of_AI_doing_a_tv_present_0.jpg"
            alt="AI giving a presentation to a person"
            className="rounded-2xl shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
