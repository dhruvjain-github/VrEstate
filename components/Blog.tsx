// 'use client';
// import { motion } from 'framer-motion';
// import { BackgroundGradient } from "./ui/background-gradient";
// import { TextGenerateEffect } from "./ui/text-generate-effect";
// import Image from 'next/image';

// const Blog = () => {
//   const introText = "Stay informed with our blog, featuring industry insights, guides, and the latest trends in VR real estate technology.";

//   // const blogCategories = [
//   //   {
//   //     title: "Industry Insights",
//   //     description: "Learn how VR is reshaping real estate",
//   //     icon: "🎯",
//   //     color: "from-blue-500 to-purple-500"
//   //   },
//   //   {
//   //     title: "Guides & Tutorials",
//   //     description: "Step-by-step resources for using VR tools effectively",
//   //     icon: "📚",
//   //     color: "from-purple-500 to-pink-500"
//   //   },
//   //   {
//   //     title: "Trends",
//   //     description: "Keep up with the latest developments in VR and real estate tech",
//   //     icon: "📈",
//   //     color: "from-pink-500 to-red-500"
//   //   }
//   // ];

//   const blogPosts = [
//     {
//       title: "The Future of Real Estate in VR",
//       excerpt: "Discover how virtual reality is transforming property viewings and sales.",
//       image: "/Images/image05.jpg",
//       date: "March 15, 2024",
//       category: "Industry Insights"
//     },
//     {
//       title: "Simplified Property Tours with Expert Guidance",
//       excerpt: "At The VR Estate, we ensure that exploring properties is a smooth and stress-free experience. Whether you’re using VR, a PC, or a mobile device, our expertly designed guided walkthroughs and tutorials provide all the support you need to make informed decisions.

// Effortless Navigation: Our guided tours take you step-by-step through each property, highlighting key features, layouts, and unique details to ensure you don’t miss anything important.

// Comprehensive Tutorials: First time using VR or digital property tours? Our clear, user-friendly tutorials help you get started in minutes, no technical expertise required.

// Accessible for Everyone: Not using VR? No problem. Our walkthroughs are optimized for PC and mobile, so you can explore properties anytime, anywhere.


// Experience innovation and convenience with The VR Estate. Let us guide you to your perfect property effortlessly!
// ",
//       image: "/Images/image06.jpg",
//       date: "March 10, 2024",
//       category: "Guides & Tutorials"
//     },
//     {
//       title: "2024 VR Real Estate Trends",
//       excerpt: "Exploring the latest innovations in virtual property showcasing.",
//       image: "/Images/image07.jpg",
//       date: "March 5, 2024",
//       category: "Trends"
//     }
//   ];

//   return (
//     <div className="container mx-auto px-4 py-16" id="blog">
//       <div className="text-center mb-16">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
//         >
//           Blog & Resources
//         </motion.h2>
//         <div className="max-w-3xl mx-auto">
//           <TextGenerateEffect words={introText} />
//         </div>
//       </div>

//       {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
//         {blogCategories.map((category, index) => (
//           <BackgroundGradient key={index} className="rounded-xl bg-black p-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="text-center space-y-4"
//             >
//               <span className="text-4xl">{category.icon}</span>
//               <h3 className="text-xl font-bold text-white">{category.title}</h3>
//               <p className="text-gray-400">{category.description}</p>
//             </motion.div>
//           </BackgroundGradient>
//         ))}
//       </div> */}

//       <div className="grid md:grid-cols-3 gap-8 mb-24">
//         {blogPosts.map((post, index) => (
//           <BackgroundGradient key={index} className="rounded-xl bg-black p-2">
//             <motion.article
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="overflow-hidden rounded-lg"
//             >
//               <div className="relative h-48">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   priority
//                   className="object-cover"
//                   sizes= "(max-width : 768px )  (max-width: 1200px) 50vw, 33vw"

//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-sm text-blue-400">{post.category}</span>
//                   <span className="text-sm text-gray-400">{post.date}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
//                 <p className="text-gray-400 mb-4">{post.excerpt}</p>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="text-blue-400 hover:text-blue-300 transition-colors"
//                 >
//                   Read More →
//                 </motion.button>
//               </div>
//             </motion.article>
//           </BackgroundGradient>
//         ))}
//       </div>
      
//       <BackgroundGradient className="rounded-xl bg-black p-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="max-w-2xl mx-auto"
//         >
//           <h3 className="text-2xl font-bold text-white mb-4">
//             Stay Updated with VR Estate
//           </h3>
//           <p className="text-gray-400 mb-6">
//             Subscribe to our newsletter for the latest insights, guides, and trends in VR real estate technology.
//           </p>
//           <form className="flex gap-4 max-w-md mx-auto">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
//             />
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold"
//             >
//               Subscribe
//             </motion.button>
//           </form>
//         </motion.div>
//       </BackgroundGradient>
//     </div>
//   );
// };

// export default Blog;

'use client';
import { motion } from 'framer-motion';
import { BackgroundGradient } from "./ui/background-gradient";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image';
import { useState } from 'react';

const Blog = () => {
  const introText = "Stay informed with our blog, featuring industry insights, guides, and the latest trends in VR real estate technology.";

  const blogPosts = [
    {
      title: "Transform Your Real Estate Business with Powerful Industry Insights",
      excerpt: `In today’s competitive real estate market, staying ahead requires more than just traditional methods—it demands innovation and a deep understanding of emerging trends. At The VR Estate, we provide you with valuable industry insights that can revolutionize your property business, making it more efficient. 
  
       Data-Driven Decisions: Leverage advanced VR analytics and insights to make informed decisions, reducing risks and maximizing returns for your clients.
  
      Unparalleled Market Intelligence: Stay informed about the latest trends, consumer behavior shifts, and technological advancements that are shaping the real estate industry, helping you adapt and thrive.
  
      Enhanced Client Engagement: With immersive VR property tours, you can offer your clients an experience they won’t find anywhere else, ensuring higher satisfaction and increased conversions.
  
      Boost Your Competitive Edge: By integrating cutting-edge VR technology and real-time market insights, you’ll position your business as an industry leader, attracting more clients and closing deals faster.
  
      At The VR Estate, we empower real estate professionals with the knowledge and tools to elevate their business. Let us provide you with the insights that will not only keep you ahead of the curve but also ensure that you’re delivering exceptional value to your clients. Make a lasting impact today and set a new standard in the real estate market.`,
      image: "/Images/image05.jpg",
      date: "March 15, 2024",
      category: "Industry Insights"
    },
    {
      title: "Simplified Property Tours with Expert Guidance",
      excerpt: `At The VR Estate, we ensure that exploring properties is a smooth and stress-free experience. Whether you’re using VR, a PC, or a mobile device, our expertly designed guided walkthroughs and tutorials provide all the support you need to make informed decisions.

      Effortless Navigation: Our guided tours take you step-by-step through each property, highlighting key features, layouts, and unique details to ensure you don’t miss anything important.

      Comprehensive Tutorials: First time using VR or digital property tours? Our clear, user-friendly tutorials help you get started in minutes, no technical expertise required.

      Accessible for Everyone: Not using VR? No problem. Our walkthroughs are optimized for PC and mobile, so you can explore properties anytime, anywhere.

      Experience innovation and convenience with The VR Estate. Let us guide you to your perfect property effortlessly!`,
      image: "/Images/image06.jpg",
      date: "March 10, 2024",
      category: "Guides & Tutorials"
    },
    {
      title: "Leading the Future of Real Estate: Embrace the Latest VR Trends",
      excerpt: `At The VR Estate, we’re redefining property exploration by integrating the latest advancements in Virtual Reality. Our platform not only keeps you ahead of market trends but also empowers you to make confident, future-proof decisions in an evolving real estate landscape.

      State-of-the-Art VR Technology: Explore properties using cutting-edge VR tools, providing unparalleled realism and depth, making every tour a comprehensive experience.

      Innovative Visualization: Experience immersive 3D models and interactive walkthroughs that bring real estate to life, providing clarity and precision for both buyers and investors.

      Stay Ahead with Industry Trends: We stay at the forefront of the VR real estate revolution, ensuring that you have access to the most innovative, efficient, and time-saving property exploration solutions.

      With The VR Estate, you’re not just exploring properties—you’re stepping into the future of real estate. Let us guide you through the latest trends that are shaping the way we buy, sell, and invest in property.`,
      image: "/Images/image07.jpg",
      date: "March 5, 2024",
      category: "Trends"
    }
  ];

  const [expandedPost, setExpandedPost] = useState(null);

  const handleReadMore = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16" id="blog">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Blog & Resources
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <TextGenerateEffect words={introText} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {blogPosts.map((post, index) => (
          <BackgroundGradient key={index} className="rounded-xl bg-black p-2">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="overflow-hidden rounded-lg"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-400">{post.category}</span>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">
                  {expandedPost === index
                    ? post.excerpt
                    : post.excerpt.split('\n').slice(0, 2).join('\n') + '...'}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleReadMore(index)}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {expandedPost === index ? 'Read Less' : 'Read More →'}
                </motion.button>
              </div>
            </motion.article>
          </BackgroundGradient>
        ))}
      </div>
      
      <BackgroundGradient className="rounded-xl bg-black p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with VR Estate
          </h3>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for the latest insights, guides, and trends in VR real estate.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </BackgroundGradient>
    </div>
  );
};

export default Blog;
