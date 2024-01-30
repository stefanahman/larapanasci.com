import React from 'react';
import Gril20 from '../assets/girl-20.png'
import Gril21 from '../assets/girl21.png'
import Gril22 from '../assets/girl23.png'
import Gril1 from '../assets/girl-27.png'
import  Gril47 from'../assets/girl-47.png'
import  yoga47 from'../assets/yoga-47.png'
import { Link } from 'react-router-dom';

const BlogSection1 = () => {
  return (
    <section
      style={{ backgroundImage: "url('assets/circle.png')" }}
      className="px-4 py-14 md:py-16 lg:py-20 bg-cream bg-no-repeat bg-[0%_50%] bg-24"
    >
      <div className="container lg:flex lg:space-x-8">
        <div className="lg:w-65 mb-10">
          <article className="bg-white p-2 rounded-3xl mb-8">
          <div className="">
                    <Link to="#">
                        <img className="rounded-tl-3xl rounded-tr-3xl" src={Gril1} alt="img-6" /></Link>
                    <p className="relative bottom-3 text-sm px-3 rounded-tr-full rounded-br-full text-white py-2 bg-art-1 inline">02.12.2022</p>
          </div>
        <div className="p-5">
                    <Link to="#"><p className="text-art-1 pb-2">James Smith &#8226;  health, mind</p></Link>
                    <Link to="#"><h3 className="pb-3">Yoga Poses to Boost Your Radiance</h3></Link>
                    <p className="text-p-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum.</p>
                    <p className="text-p-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper.</p>
                    <ul className="list-disc pl-6 font-normal text-p-2 space-y-2">
                        <li><strong className="text-black">Lorem ipsum:</strong> dolor sit amet, consectetur adipiscing elit.</li>
                        <li><strong className="text-black">Vestibulum eu:</strong> mi feugiat, scelerisque mauris quis, efficitur erat.</li>
                        <li><strong className="text-black">Vestibulum eu:</strong> Ut malesuada: mi ut mi venenatis lacinia.</li>
                        <li><strong className="text-black">Vestibulum eu:</strong> Cras luctus: ante vel orci varius, ut imperdiet dolor convallis.</li>
                    </ul>
                    <p className="text-lg text-p-2 px-4 py-6 bg-b-d-grey border-l-2 border-gray-400 my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id . In molestie metus molestie amet,  mauris, malesuada lectus.</p>
                    <h3>Neque porro quisquam est, qui dolorem</h3>
                    <div className="pt-6 lg:flex lg:items-center lg:space-x-5">
                        <div className="lg:w-2/5 lg:pb-0 pb-5">
                            <img src={Gril47} alt="img" />
                        </div>
                        <div className="lg:w-3/5">
                            <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum. Cum malesuada nunc curabitur eget hendrerit. Gravida lectus eu libero, phasellus. Ac quam sed nisl, donec sed integer. Penatibus quis a in odio quis. Nunc integer auctor tempus sem ultricies. Iaculis ultrices etiam tincidunt tristique nulla justo nec tempus bibendum. Neque molestie lorem est congue nibh cursus.
                            </p>
                        </div>
                    </div>
                    <hr className="bg-p-2 my-10" />
                    <div className="lg:flex lg:items-center lg:space-x-6">
                        <div className="lg:w-[15%] lg:pb-0 pb-4">
                            <Link to="/blogdetails">
                                <img src={yoga47} alt="img" /></Link>
                        </div>
                        <div className="lg:w-85">
                            <Link to="/blogdetails"><p className="text-art-1 pb-1">Previous Post</p></Link>
                            <Link to="/blogdetails"><h3 className="lg:pr-48">The Difference Between Yoga and Yoga Therapy</h3></Link>
                        </div>
                    </div>
                    <hr className="bg-p-2 my-8" />
                    <div className="lg:flex lg:justify-between lg:items-center">
                        <div className="lg:mb-0 mb-6 lg:flex lg:space-x-8 lg:items-center">
                            <div className="mb-6 lg:mb-0">
                                <p className="text-p-2"><span className="text-hlink font-semibold"><i className="fa-solid fa-share"></i> 112</span> Shares&#160;&#160;&#160;|&#160;&#160;&#160;<span className="text-hlink font-semibold"><i className="fa-solid fa-comments"></i> 9</span> Comments</p>
                            </div>
                            <div className="space-x-2">
                                <Link to="https://www.facebook.com"><i className="fa-brands fa-facebook-f px-3 py-2 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white  hover:transition-all hover:duration-700"></i></Link>
                                <Link to="https://in.linkedin.com"><i className="fa-brands fa-linkedin-in p-2 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white  hover:transition-all hover:duration-700"></i></Link>
                                <Link to="https://www.youtube.com"><i className="fa-brands fa-youtube p-2 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white  hover:transition-all hover:duration-700"></i></Link>
                            </div>
                        </div>
                        <div className="space-x-2">
                            <button className="p-3 bg-[#FBEEDD] border border-[#DEC4A6] rounded text-sm hover:bg-transparent"><i className="fa-solid fa-tag fa-rotate-90 text-hlink"></i>&#160;&#160;Yoga Lifestyle</button>
                            <button className="p-3 bg-[#FBEEDD] border border-[#DEC4A6] rounded text-sm hover:bg-transparent"><i className="fa-solid fa-tag fa-rotate-90 text-hlink"></i>&#160;&#160;Uncategorized</button>
                        </div>
                    </div>
                </div>
          </article>
        </div>
        <div className="lg:w-35">
        <div className="relative mb-5">
                <input type="text" placeholder="Search here" className="pl-6 pr-14 py-4 bg-white rounded-full w-full outline-0 focus:outline-1 focus:outline-green" />
                <button><i className="fa-solid fa-magnifying-glass text-white p-3 rounded-full bg-green absolute top-2 right-2 hover:bg-transparent border border-green hover:text-green"></i></button>
            </div>
            <div className="p-6 bg-white rounded-3xl mb-8">
                <h3 className="pb-6">Recent Posts</h3>
                <article className="mb-8">
                    <Link to="#"><img className="pb-3" src={Gril20} alt="img-12" /></Link>
                    <Link to="#"><h3 className="text-xl">The Difference Between Yoga and Yoga Therapy</h3></Link>
                </article>
                <article className="mb-8">
                    <Link to="#"><img className="pb-3" src={Gril21} alt="img-12" /></Link>
                    <Link to="#"><h3 className="text-xl">The Difference Between Yoga and Yoga Therapy</h3></Link>
                </article>
                <article>
                    <Link to="#"><img className="pb-3" src={Gril22} alt="img-12" /></Link>
                    <Link to="#"><h3 className="text-xl">The Difference Between Yoga and Yoga Therapy</h3></Link>
                </article>
            </div>
            <div className="p-6 bg-white rounded-3xl mb-8">
                <h3 className="pb-6">Category</h3>
                <div className="space-y-5">
                    <Link to="#" className=" flex justify-between">
                        <p>Assistance</p>
                        <p className="text-p-2">(500)</p>
                    </Link>
                    <Link to="#" className=" flex justify-between">
                        <p>Assistance</p>
                        <p className="text-p-2">(500)</p>
                    </Link>
                    <Link to="#" className=" flex justify-between">
                        <p>Assistance</p>
                        <p className="text-p-2">(500)</p>
                    </Link>
                    <Link to="#" className=" flex justify-between">
                        <p>Assistance</p>
                        <p className="text-p-2">(500)</p>
                    </Link>
                    <Link to="#" className=" flex justify-between">
                        <p>Assistance</p>
                        <p className="text-p-2">(500)</p>
                    </Link>
                </div>
            </div>
            <div className="p-6 bg-white rounded-3xl mb-8">
                <h3 className="pb-6">Tags</h3>
                <div className="space-y-3">
                    <div className="flex space-x-3">
                        <button className="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Adventure</button>
                        <button className="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Health</button>
                        <button className="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Appetiate</button>
                    </div>
                    <div className="flex space-x-3">
                        <button className="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Adventure</button>
                        <button className="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Appetiate</button>
                        <button className="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Health</button>

                    </div>
                    <div className="flex space-x-3">
                        <button className="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Health</button>
                        <button className="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Appetiate</button>
                        <button className="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Adventure</button>
                    </div>
                </div>
            </div>
            <div className="p-6 bg-white rounded-3xl">
                <h3 className="pb-6">Archives</h3>
                <div className="space-y-5">
                    <Link to="#" className=" flex justify-between items-center">
                        <p>December 2021</p>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                    <Link to="#" className=" flex justify-between items-center">
                        <p>October 2021</p>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                    <Link to="#" className=" flex justify-between items-center">
                        <p>Treatment</p>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                    <Link to="#" className=" flex justify-between items-center">
                        <p>Angioplasty Services</p>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                    <Link to="#" className=" flex justify-between items-center">
                        <p>Treatment</p>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection1;
