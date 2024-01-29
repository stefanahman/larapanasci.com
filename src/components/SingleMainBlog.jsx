import React from 'react';
import Gril20 from '../assets/girl-20.png'
import Gril21 from '../assets/girl21.png'
import Gril22 from '../assets/girl23.png'
import Gril1 from '../assets/girl-27.png'
import  Gril47 from'../assets/girl-47.png'
import  yoga47 from'../assets/yoga-47.png'

const BlogSection1 = () => {
  return (
    <section
      style={{ backgroundImage: "url('assets/circle.png')" }}
      className="px-4 py-14 md:py-16 lg:py-20 bg-cream bg-no-repeat bg-[0%_50%] bg-24"
    >
      <div className="container lg:flex lg:space-x-8">
        <div className="lg:w-65 mb-10">
          <article className="bg-white p-2 rounded-3xl mb-8">
          <div class="">
                    <a href="#">
                        <img class="rounded-tl-3xl rounded-tr-3xl" src={Gril1} alt="img-6" /></a>
                    <p class="relative bottom-3 text-sm px-3 rounded-tr-full rounded-br-full text-white py-2 bg-art-1 inline">02.12.2022</p>
          </div>
        <div class="p-5">
                    <a href="#"><p class="text-art-1 pb-2">James Smith &#8226;  health, mind</p></a>
                    <a href="#"><h3 class="pb-3">Yoga Poses to Boost Your Radiance</h3></a>
                    <p class="text-p-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum.</p>
                    <p class="text-p-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper.</p>
                    <ul class="list-disc pl-6 font-normal text-p-2 space-y-2">
                        <li><strong class="text-black">Lorem ipsum:</strong> dolor sit amet, consectetur adipiscing elit.</li>
                        <li><strong class="text-black">Vestibulum eu:</strong> mi feugiat, scelerisque mauris quis, efficitur erat.</li>
                        <li><strong class="text-black">Vestibulum eu:</strong> Ut malesuada: mi ut mi venenatis lacinia.</li>
                        <li><strong class="text-black">Vestibulum eu:</strong> Cras luctus: ante vel orci varius, ut imperdiet dolor convallis.</li>
                    </ul>
                    <p class="text-lg text-p-2 px-4 py-6 bg-b-d-grey border-l-2 border-gray-400 my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id . In molestie metus molestie amet,  mauris, malesuada lectus.</p>
                    <h3>Neque porro quisquam est, qui dolorem</h3>
                    <div class="pt-6 lg:flex lg:items-center lg:space-x-5">
                        <div class="lg:w-2/5 lg:pb-0 pb-5">
                            <img src={Gril47} alt="img" />
                        </div>
                        <div class="lg:w-3/5">
                            <p class="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum. Cum malesuada nunc curabitur eget hendrerit. Gravida lectus eu libero, phasellus. Ac quam sed nisl, donec sed integer. Penatibus quis a in odio quis. Nunc integer auctor tempus sem ultricies. Iaculis ultrices etiam tincidunt tristique nulla justo nec tempus bibendum. Neque molestie lorem est congue nibh cursus.
                            </p>
                        </div>
                    </div>
                    <hr class="bg-p-2 my-10" />
                    <div class="lg:flex lg:items-center lg:space-x-6">
                        <div class="lg:w-[15%] lg:pb-0 pb-4">
                            <a href="/blogdetails">
                                <img src={yoga47} alt="img" /></a>
                        </div>
                        <div class="lg:w-85">
                            <a href="/blogdetails"><p class="text-art-1 pb-1">Previous Post</p></a>
                            <a href="/blogdetails"><h3 class="lg:pr-48">The Difference Between Yoga and Yoga Therapy</h3></a>
                        </div>
                    </div>
                    <hr class="bg-p-2 my-8" />
                    <div class="lg:flex lg:justify-between lg:items-center">
                        <div class="lg:mb-0 mb-6 lg:flex lg:space-x-8 lg:items-center">
                            <div class="mb-6 lg:mb-0">
                                <p class="text-p-2"><span class="text-hlink font-semibold"><i class="fa-solid fa-share"></i> 112</span> Shares&#160;&#160;&#160;|&#160;&#160;&#160;<span class="text-hlink font-semibold"><i class="fa-solid fa-comments"></i> 9</span> Comments</p>
                            </div>
                            <div class="space-x-2">
                                <a href="https://www.facebook.com"><i class="fa-brands fa-facebook-f px-3 py-2 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white  hover:transition-all hover:duration-700"></i></a>
                                <a href="https://in.linkedin.com"><i class="fa-brands fa-linkedin-in p-2 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white  hover:transition-all hover:duration-700"></i></a>
                                <a href="https://www.youtube.com"><i class="fa-brands fa-youtube p-2 border rounded-full border-hlink text-hlink hover:bg-hlink hover:text-white  hover:transition-all hover:duration-700"></i></a>
                            </div>
                        </div>
                        <div class="space-x-2">
                            <button class="p-3 bg-[#FBEEDD] border border-[#DEC4A6] rounded text-sm hover:bg-transparent"><i class="fa-solid fa-tag fa-rotate-90 text-hlink"></i>&#160;&#160;Yoga Lifestyle</button>
                            <button class="p-3 bg-[#FBEEDD] border border-[#DEC4A6] rounded text-sm hover:bg-transparent"><i class="fa-solid fa-tag fa-rotate-90 text-hlink"></i>&#160;&#160;Uncategorized</button>
                        </div>
                    </div>
                </div>
          </article>
        </div>
        <div className="lg:w-35">
        <div class="relative mb-5">
                <input type="text" placeholder="Search here" class="pl-6 pr-14 py-4 bg-white rounded-full w-full outline-0 focus:outline-1 focus:outline-green" />
                <button><i class="fa-solid fa-magnifying-glass text-white p-3 rounded-full bg-green absolute top-2 right-2 hover:bg-transparent border border-green hover:text-green"></i></button>
            </div>
            <div class="p-6 bg-white rounded-3xl mb-8">
                <h3 class="pb-6">Recent Posts</h3>
                <article class="mb-8">
                    <a href="#"><img class="pb-3" src={Gril20} alt="img-12" /></a>
                    <a href="#"><h3 class="text-xl">The Difference Between Yoga and Yoga Therapy</h3></a>
                </article>
                <article class="mb-8">
                    <a href="#"><img class="pb-3" src={Gril21} alt="img-12" /></a>
                    <a href="#"><h3 class="text-xl">The Difference Between Yoga and Yoga Therapy</h3></a>
                </article>
                <article>
                    <a href="#"><img class="pb-3" src={Gril22} alt="img-12" /></a>
                    <a href="#"><h3 class="text-xl">The Difference Between Yoga and Yoga Therapy</h3></a>
                </article>
            </div>
            <div class="p-6 bg-white rounded-3xl mb-8">
                <h3 class="pb-6">Category</h3>
                <div class="space-y-5">
                    <a href="#" class=" flex justify-between">
                        <p>Assistance</p>
                        <p class="text-p-2">(500)</p>          
                    </a>
                    <a href="#" class=" flex justify-between">
                        <p>Assistance</p>
                        <p class="text-p-2">(500)</p>          
                    </a>
                    <a href="#" class=" flex justify-between">
                        <p>Assistance</p>
                        <p class="text-p-2">(500)</p>          
                    </a>
                    <a href="#" class=" flex justify-between">
                        <p>Assistance</p>
                        <p class="text-p-2">(500)</p>          
                    </a>
                    <a href="#" class=" flex justify-between">
                        <p>Assistance</p>
                        <p class="text-p-2">(500)</p>          
                    </a>   
                </div>                                 
            </div>
            <div class="p-6 bg-white rounded-3xl mb-8">
                <h3 class="pb-6">Tags</h3>
                <div class="space-y-3">
                    <div class="flex space-x-3">
                        <button class="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Adventure</button>
                        <button class="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Health</button>                        
                        <button class="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Appetiate</button>                        
                    </div>                    
                    <div class="flex space-x-3">
                        <button class="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Adventure</button>
                        <button class="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Appetiate</button>
                        <button class="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Health</button>                        
                                                
                    </div>
                    <div class="flex space-x-3">                        
                        <button class="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Health</button>                        
                        <button class="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Appetiate</button>
                        <button class="text-sm font-normal border border-art-1 px-5 py-2 text-p-2 rounded-full bg-white hover:bg-art-1 hover:text-white">Adventure</button>                        
                    </div>
                </div>            
            </div>
            <div class="p-6 bg-white rounded-3xl">
                <h3 class="pb-6">Archives</h3>
                <div class="space-y-5">
                    <a href="#" class=" flex justify-between items-center">
                        <p>December 2021</p>
                        <i class="fa-solid fa-chevron-right"></i>          
                    </a>
                    <a href="#" class=" flex justify-between items-center">
                        <p>October 2021</p>
                        <i class="fa-solid fa-chevron-right"></i>        
                    </a>
                    <a href="#" class=" flex justify-between items-center">
                        <p>Treatment</p>
                        <i class="fa-solid fa-chevron-right"></i>          
                    </a>
                    <a href="#" class=" flex justify-between items-center">
                        <p>Angioplasty Services</p>
                        <i class="fa-solid fa-chevron-right"></i>         
                    </a>
                    <a href="#" class=" flex justify-between items-center">
                        <p>Treatment</p>
                        <i class="fa-solid fa-chevron-right"></i>          
                    </a>   
                </div>                                 
            </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection1;
