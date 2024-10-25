import React from 'react'

const Hero = () => {
  return (
 
 <>
 
<div id="controls-carousel" className="mt-6 relative w-full" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        
        {/* <!-- Item 2 -->  */}
        <div  data-carousel-item="active">
            <img src="https://images.pexels.com/photos/2977345/pexels-photo-2977345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="mt-8 absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
    </div>
    
</div>

 </>
     
  )
}

export default Hero