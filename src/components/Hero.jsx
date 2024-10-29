import React from 'react'

const Hero = () => {
  return (
    <div id="controls-carousel" className="relative w-full mt-6 z-10">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div data-carousel-item="active">
          <img
            src="https://images.pexels.com/photos/2977345/pexels-photo-2977345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="block w-full object-cover"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
