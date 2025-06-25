const SpecialSection = () => {
    const items = [
      {
        title: "Handcrafted Art",
        description:
          "Explore our collection of hand-thrown ceramics, each piece uniquely shaped and glazed by skilled artisans. From functional pieces to decorative art, find the perfect addition to your home.",
        image: "/assets/B1.jpg", // Replace with your image path
      },
      {
        title: "Beautiful crafted textiles",
        description:
          "Discover handwoven textiles that blend traditional techniques with contemporary design. Our collection features unique patterns and textures that bring warmth to any space.",
        image: "/assets/Macrame.jpg",
      },
      {
        title: "Custom Orders",
        description:
          "Work directly with our artisans to create bespoke pieces tailored to your vision. From concept to creation, we’ll bring your ideas to life with care and craftsmanship.",
        image: "/assets/wool.jpg",
      },
      {
        title: "Textile Arts",
        description:
          "Discover handwoven textiles that blend traditional techniques with contemporary design. Our collection features unique patterns and textures that bring warmth to any space.",
        image: "/assets/Kurti.htm",
      },
    ];
  
    return (
      <section className="px-6 py-12 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8 flex flex-col items-center text-center">
          <p className="text-lg text-violet-500 font-medium">What makes us special?</p>
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 to-orange-600 text-transparent bg-clip-text">
            Artistry and craftsmanship at your fingertips.
          </h2>
          <p className="mt-5 text-gray-800 max-w-xl">
            Discover unique handcrafted pieces that bring beauty and character to your space. Each item tells a story of artistic dedication and masterful craftsmanship.
          </p>
        </div>
  
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gradient-to-br from-blue-900 to-black text-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SpecialSection;
  