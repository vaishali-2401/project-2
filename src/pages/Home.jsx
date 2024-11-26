import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/configure";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/add-post"); // Redirect to the add-post page
  };

  return (
    <div className="w-full py-8 mt-4 text-center bg-white">
      <Container>
        <div className="pl-[75%] text-2xl">
          <h1> Guest Credentials : </h1>
          <h1>username : guest@gmail.com</h1>
          <h1>password : 12345678</h1>
        </div>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-7xl my-5">Effortless Publishing</h1>
            <div className="px-4 my-4 text-2xl text-black-600">
              <p>Where ideas spark, stories inspire, and curiosity thrives.</p>
              <p>Discover, learn, and grow with every post!</p>
            </div>
            <div className="pt-3 pb-11">
              <Link
                to="/add-post"
                class="inline-flex items-center bg-black text-white py-3  px-8 rounded-full hover:bg-gray-800 h-12 text-2xl "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M8 10h8M8 14h6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h10a2 2 0 012 2v10z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Start a blog
              </Link>
            </div>
            <div>
              <div className="flex gap-4">
                <div className="overflow-hidden flex flex-col border border-[#dfe0e0] rounded-lg">
                  <Link
                    to="/all-posts"
                    className="relative overflow-hidden h-40"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1478144592103-25e218a04891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMGhlYWx0aHklMjA2MDAlMjA0MDB8ZW58MHx8MHx8fDA%3D"
                      alt="card1 image"
                      className="object-cover object-center absolute h-full w-full transform transition-transform hover:scale-105 duration-300 ease-in-out"
                      loading="lazy"
                    />
                  </Link>
                  <div className="flex flex-col p-6">
                    <Link to="/all-posts" className="text-[#4343bf]">
                      <h2 className="text-base font-semibold text-[#191717] leading-6 mb-1.5">
                        Healthy Eating Tips
                      </h2>
                    </Link>
                    <p className="text-base text-[#716b6b]">
                      Discover simple tips for maintaining a healthy diet and
                      making a nutritious food choices
                    </p>
                  </div>
                  <div className="flex justify-between items-end px-5 pb-5">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 overflow-hidden border border-[#dfe0e0] rounded-full bg-[#f3efef]">
                        <img
                          src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                          alt="avatar1"
                          loading="lazy"
                          className="flex items-center gap-4"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#262695]">John Doe</span>
                        <span className="text-[#887e7e]">Jun 30, 2024</span>
                      </div>
                    </div>
                    <div className="border border-[#4c4747] rounded-sm text-lg leading-[1.3rem] px-2 py-1">
                      <span>Nutrition</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-col border border-[#dfe0e0] rounded-lg">
                  <Link
                    to="/all-posts"
                    className="relative overflow-hidden h-40"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1478144592103-25e218a04891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMGhlYWx0aHklMjA2MDAlMjA0MDB8ZW58MHx8MHx8fDA%3D"
                      alt="card1 image"
                      className="object-cover object-center absolute h-full w-full transform transition-transform hover:scale-105 duration-300 ease-in-out"
                      loading="lazy"
                    />
                  </Link>
                  <div className="flex flex-col p-6">
                    <Link to="/all-posts" className="text-[#4343bf]">
                      <h2 className="text-base font-semibold text-[#191717] leading-6 mb-1.5">
                        Healthy Eating Tips
                      </h2>
                    </Link>
                    <p className="text-base text-[#716b6b]">
                      Discover simple tips for maintaining a healthy diet and
                      making a nutritious food choices
                    </p>
                  </div>
                  <div className="flex justify-between items-end px-5 pb-5">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 overflow-hidden border border-[#dfe0e0] rounded-full bg-[#f3efef]">
                        <img
                          src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                          alt="avatar1"
                          loading="lazy"
                          className="flex items-center gap-4"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#262695]">John Doe</span>
                        <span className="text-[#887e7e]">Jun 30, 2024</span>
                      </div>
                    </div>
                    <div className="border border-[#4c4747] rounded-sm text-lg leading-[1.3rem] px-2 py-1">
                      <span>Nutrition</span>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden flex flex-col border border-[#dfe0e0] rounded-lg">
                  <Link
                    to="/all-posts"
                    className="relative overflow-hidden h-40"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1478144592103-25e218a04891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMGhlYWx0aHklMjA2MDAlMjA0MDB8ZW58MHx8MHx8fDA%3D"
                      alt="card1 image"
                      className="object-cover object-center absolute h-full w-full transform transition-transform hover:scale-105 duration-300 ease-in-out"
                      loading="lazy"
                    />
                  </Link>
                  <div className="flex flex-col p-6">
                    <Link to="/all-posts" className="text-[#4343bf]">
                      <h2 className="text-base font-semibold text-[#191717] leading-6 mb-1.5">
                        Healthy Eating Tips
                      </h2>
                    </Link>
                    <p className="text-base text-[#716b6b]">
                      Discover simple tips for maintaining a healthy diet and
                      making a nutritious food choices
                    </p>
                  </div>
                  <div className="flex justify-between items-end px-5 pb-5">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 overflow-hidden border border-[#dfe0e0] rounded-full bg-[#f3efef]">
                        <img
                          src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                          alt="avatar1"
                          loading="lazy"
                          className="flex items-center gap-4"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#262695]">John Doe</span>
                        <span className="text-[#887e7e]">Jun 30, 2024</span>
                      </div>
                    </div>
                    <div className="border border-[#4c4747] rounded-sm text-lg leading-[1.3rem] px-2 py-1">
                      <span>Nutrition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 text-4xl pb-12 ">
              <p>Making publishing effortless for everyone</p>
            </div>

            <div className="flex items-center p-8 border border-gray-300 rounded-lg shadow-lg">
              <div className="w-[20%] h-auto rounded-lg overflow-hidden shadow-md mr-8 transform transition-transform hover:scale-105 duration-300 ease-in-out">
                <img
                  src="https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Blog Placeholder"
                  className="w-full h-full object-cover"
                />
                <h1 className="text-2xl p-3 bg-[#1A1E22] text-white">
                  Alicia Carter
                </h1>
              </div>
              <div className="w-3/4 text-lg leading-relaxed">
                <h1 className="text-4xl py-2"> Simply Amazing!</h1>
                <p>
                  BlogIT is a Fantastic Platform for Engaging Content! I
                  recently stumbled upon this blog website, and I have to say,
                  it has exceeded my expectations in every way! The layout is
                  clean, modern, and easy to navigate, making the reading
                  experience enjoyable and seamless. The content is consistently
                  well-researched and insightful, covering a wide range of
                  topics that keep me coming back for more. I particularly love
                  how the website is optimized for both desktop and mobile use,
                  ensuring I can catch up on my favorite articles no matter
                  where I am. The integration of visuals and media enhances the
                  reading experience, making the articles not only informative
                  but also visually appealing. The community feature, where
                  readers can comment and interact, adds an extra layer of
                  engagement. It feels like you're part of a vibrant, thoughtful
                  community that values meaningful discussions. Whether you're
                  into tech, lifestyle, or personal development, this blog has
                  something for everyone. Highly recommended for anyone looking
                  for quality content delivered in a user-friendly and
                  aesthetically pleasing format!
                </p>
              </div>
            </div>
            <div className="py-10"></div>
            <div className=" flex items-center p-8 border border-gray-300 rounded-lg shadow-lg">
              <div className="w-3/4 text-lg leading-relaxed">
                <h1 className="text-4xl py-2">
                  {" "}
                  A Must-Visit Blog for Thought-Provoking Content!
                </h1>
                <p>
                  I recently discovered this blog, and I am genuinely impressed
                  by the quality of the content and the overall user experience.
                  The articles are well-written, thought-provoking, and cover a
                  wide range of topics, from technology to lifestyle. Each post
                  feels both personal and informative, striking a perfect
                  balance between storytelling and providing valuable insights.
                  What stands out most is how easy it is to navigate the site.
                  The design is clean and intuitive, making it a pleasure to
                  browse through different sections. The blog is also very
                  mobile-friendly, which is a huge plus for me since I do most
                  of my reading on my phone. The regular updates ensure there’s
                  always something new to read, and the comment sections foster
                  a lively and respectful community. I highly recommend this
                  blog to anyone looking for meaningful, well-curated content!
                </p>
              </div>
              <div className="w-[20%] h-auto rounded-lg overflow-hidden shadow-md ml-10 transform transition-transform hover:scale-105 duration-300 ease-in-out">
                <img
                  src="https://images.pexels.com/photos/4064839/pexels-photo-4064839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Blog Placeholder"
                  className="w-full h-full object-cover"
                />
                <h1 className="text-2xl p-3 bg-[#1A1E22] text-white">
                  Alex Wilson
                </h1>
              </div>
            </div>

            <div className=" text-5xl pt-12 pb-40">
              <h1 className="py-2">
                World-class writing editor for developers,
              </h1>

              <p className="italic">Optimized for everyone!</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
