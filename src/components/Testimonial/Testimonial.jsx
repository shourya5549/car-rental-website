import React from 'react'

const testimonialData = [
    {
      name: "Dilshad",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "0",
    },
    {
      name: "Satya",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "500",
    },
    {
      name: "Sabir",
      image: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      aosDelay: "800",
    },
  ];
const Testimonial = () => {
  return (
    <div className='dark:bg-black dark:text-white py-14 sm:pb-24'>
        <div className="container">
             {/* header */}
             <div className='space-y-4 pb-12'>
                <p data-aos='fade-up' className='text-3xl font-semibold text-center sm:text-4xl font-serif'>What Our Clients Say About Us</p>
                <p data-aos='fade-up' className='text-center sm:px-44'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt voluptatem aperiam modi.{" "}
                </p>
             </div>
             {/* card section  */}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
                {
                    testimonialData.map((data) => {
                        return(
                            <div
                            key={data.name}
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >            
                                <div className="grid place-items-center ">
                                  <img
                                    src="https://picsum.photos/200"
                                    alt=""
                                    className="rounded-full w-20 h-20"
                                  />
                                </div>
                                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                                <p>{data.description}</p>
                                <p className="text-center font-semibold">{data.name}</p>
                            </div>
                        )
                    })
                }
             </div>
        </div>
    </div>
  )
}

export default Testimonial