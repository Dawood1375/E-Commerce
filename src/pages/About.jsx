import React from 'react'; 
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => { // Define the About component
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'> {/* Fixed className typo (2x1 to 2xl) */}
                <Title text1={'ABOUT'} text2={'US'} /> {/* Fixed prop name (textl to text1) */}
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'> {/* Fixed className typo (my-1Ø to my-10) */}
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'
                >
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, facere.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam adipisci voluptatem cum perferendis quibusdam saepe dignissimos maxime commodi amet provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit enim provident mollitia temporibus ullam ducimus ex accusantium ipsam exercitationem.</p>
                  <b className='text-gray-800'>Our Mission</b>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ad nam ipsum error velit. Dolorum nihil quisquam aut aperiam veritatis.</p>
                </div>
            </div>

          <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} ></Title>
          </div>
          <div className='flex flex-col md:flex-row text-sm mb-20' >
            <div className='text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci quia totam quisquam ad illum, saepe praesentium dolorem sit sint?</p>
            </div>

            <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convinience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci quia totam quisquam ad illum, saepe praesentium dolorem sit sint?</p>
            </div>

            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Services:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium adipisci quia totam quisquam ad illum, saepe praesentium dolorem sit sint?</p>
            </div>
          </div>
          <NewsLetterBox />

        </div>
    );
};

export default About; // Export the component
