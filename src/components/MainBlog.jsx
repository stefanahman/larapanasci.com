import React from 'react';
import Girl from '../assets/girl-27.png'
import Gril20 from '../assets/girl-20.png'
import Gril21 from '../assets/girl21.png'
import Gril22 from '../assets/girl23.png'

const BlogPost = ({ imageSrc, date, author, category, title, content }) => {
  return (
    <article className="bg-white p-2 rounded-3xl mb-8">
      <div>
        <a href="blogdetails"><img className="rounded-tl-3xl rounded-tr-3xl" src={imageSrc} alt="img-6" /></a>
        <p className="relative bottom-3 text-sm px-3 rounded-tr-full rounded-br-full text-white py-2 bg-art-1 inline">{date}</p>
      </div>
      <div className="p-5">
        <a href="/blogdetails"><p className="text-art-1 pb-2">{author} &#8226; {category}</p></a>
        <a href="/blogdetails"><h3 className="pb-3">{title}</h3></a>
        <p className="text-p-2 pb-6">{content}</p>
        <a href="/blogdetails" className="text-art-1 text-base font-medium font-inter hover:text-hlink">Read more</a>
      </div>
    </article>
  );
};

const RecentPost = ({ imageSrc, title }) => {
  return (
    <article className="mb-8">
      <a href="/blogdetails"><img className="pb-3" src={imageSrc} alt="img-12" /></a>
      <a href="/blogdetails"><h3 className="text-xl">{title}</h3></a>
    </article>
  );
};

const PostCategory = () => {
  return (
    <div className="p-6 bg-white rounded-3xl">
      <h3 className="pb-6">Post Category</h3>
      <ul>
        <li className="border-b py-5 px-4 hover:bg-art-1 hover:text-white"><i className="fa-solid fa-chevron-right text-xs"></i>&#160;&#160;<a href="#">Article</a></li>
        <li className="border-b py-5 px-4 hover:bg-art-1 hover:text-white"><i className="fa-solid fa-chevron-right text-xs"></i>&#160;&#160;<a href="#">Blog</a></li>
        <li className="border-b py-5 px-4 hover:bg-art-1 hover:text-white"><i className="fa-solid fa-chevron-right text-xs"></i>&#160;&#160;<a href="#">Health</a></li>
        <li className="py-5 px-4 hover:bg-art-1 hover:text-white"><i className="fa-solid fa-chevron-right text-xs"></i>&#160;&#160;<a href="#">Uncategorized</a></li>
      </ul>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section style={{ backgroundImage: "url('assets/circle.png')" }} className="bg-cream px-4 py-14 md:py-16 lg:py-24 bg-no-repeat bg-[0%_50%] bg-20">
      <div className="container lg:flex lg:justify-center lg:space-x-8">
        <div className="lg:w-70">
          <BlogPost
            imageSrc={Girl}
            date="02.12.2022"
            author="James Smith"
            category="health, mind"
            title="Yoga Poses to Boost Your Radiance"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum."
          />
          <BlogPost
            imageSrc={Girl}
            date="02.12.2022"
            author="James Smith"
            category="health, mind"
            title="Yoga Poses to Boost Your Radiance"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum."
          />
          <BlogPost
            imageSrc={Girl}
            date="02.12.2022"
            author="James Smith"
            category="health, mind"
            title="Yoga Poses to Boost Your Radiance"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet, porttitor mauris, malesuada lectus. Duis id vivamus purus praesent tortor, diam. Nunc maecenas interdum viverra semper. Odio sem ultrices molestie amet at tristique. Aenean egestas etiam egestas mollis odio nisl rutrum."
          />
        </div>
        <div className="lg:w-30 mb-8">
          <div className="p-6 bg-white rounded-3xl mb-8">
            <h3 className="pb-2">Text Placeholder</h3>
            <p className="text-p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut vestibulum eget ornare sit dignissim sagittis id eget. Adipiscing in molestie metus molestie amet</p>
          </div>
          <div className="p-6 bg-white rounded-3xl mb-8">
            <h3 className="pb-6">Recent Posts</h3>
            <RecentPost imageSrc={Gril20} title="The Difference Between Yoga and Yoga Therapy" />
            <RecentPost imageSrc={Gril21} title="The Difference Between Yoga and Yoga Therapy" />
            <RecentPost imageSrc={Gril22} title="The Difference Between Yoga and Yoga Therapy" />
          </div>
          <PostCategory />
        </div>
      </div>
      <div className="container">
        <div className="lg:mt-14 mt-8 space-x-3">
          <a href="#" className="text-sm font-normal font-inter text-art-1 p-3 bg-white rounded-full border border-art-1 hover:bg-art-1 hover:text-white">01</a>
          <a href="#" className="text-sm font-normal font-inter text-art-1 p-3 bg-white rounded-full border border-art-1 hover:bg-art-1 hover:text-white">02</a>
          <a href="#" className="text-sm font-normal font-inter text-art-1 p-3 bg-white rounded-full border border-art-1 hover:bg-art-1 hover:text-white">03</a>
          <a href="#" className="text-sm font-normal font-inter text-art-1 px-3 py-2 bg-white rounded-full border border-art-1 hover:bg-art-1 hover:text-white"><i className="fa-solid fa-chevron-right"></i></a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
