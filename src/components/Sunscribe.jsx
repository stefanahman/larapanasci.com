import floralDesign from '../assets/round-5.png';
import floralDesign1 from '../assets/floral.svg'
import Girl from '../assets/girl-10.png'

const SubscribeSection = () => {
  return (
    <section className="lg:pb-20 md:pb-16 px-4 pb-14" style={{ backgroundImage: `url(${floralDesign})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left top', backgroundSize: '20%' }}>
      <div className="contianer">
        <img className="mx-auto pb-3" src={floralDesign1} alt="floral-design=1" />
        <h2 className="pb-3 text-center">Subscribe to our Newsletter</h2>
        <p className="text-p-2 lg:pb-14 pb-10 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing nec arcu molestie massa consequat ullamcorper duis lacinia. </p>
        <div className="lg:max-w-5xl lg:mx-auto text-center md:relative mb-12">
          <input className="w-full mb-5 md:pl-7 md:pr-48 px-5 py-5 rounded-full outline-none focus:outline-1 focus:outline focus:outline-art-1-btn" type="text" placeholder="Enter Your Email Address" />
          <button className="md:absolute md:top-1 md:right-1 primary-button">Subscribe Now</button>
        </div>
        <img className="mx-auto" src={Girl} alt="yoga" />
      </div>
    </section>
  );
};

export default SubscribeSection;
