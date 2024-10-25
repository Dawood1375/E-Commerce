import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
     <Title text1={'CONTACT'} text2={'US'} />
    </div>
    
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
       <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
       <div className=' flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl  text-gray-600'>Our Store</p><br/>
        <p className='text-gray-500'>54709 Willms Station <br/> Washington, DC , USA</p>
        <p className='text-gray-500' > Tel : (415) 555-0132 <br/> Email : E-commerce@.com </p><br/>
        <p className='font-semibold text-xl text-gray-600' >Careers At E-commerce</p> <br />
        <p className='text-gray-500'>Learn About Our teams and Job Openings</p> 
        <button className='border border-black mt-4  px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div> 
      </div>

    </div>
    
  )
}

export default Contact