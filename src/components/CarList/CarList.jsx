import React from 'react'
import jeep from "../../assets/white-car.png";
import scorpio1 from "../../assets/car5.png";
import scorpio2 from "../../assets/car6.png";

const carList = [
  {
    name: "JEEP AVENGER",
    price: 2000,
    image: jeep,
    aosDelay: "500",
  },
  {
    name: "SCORPIO S11",
    price: 2400,
    image: scorpio1,
    aosDelay: "500",
  },
  {
    name: "SCORPIO S10",
    price: 2000,
    image: scorpio2,
    aosDelay: "500",
  },
  {
    name: "JEEP AVENGER",
    price: 2000,
    image: jeep,
    aosDelay: "800",
  },
  {
    name: "SCORPIO S11",
    price: 2400,
    image: scorpio1,
    aosDelay: "800",
  },
  {
    name: "SCORPIO S10",
    price: 2000,
    image: scorpio2,
    aosDelay: "800",
  },
];


const CarList = () => {
  return (
    <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white'>
        <div className="container">
            <h1 data-aos='fade-up' data-aos-duration='500' className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>
                Cars & It's Rent 
            </h1>
            <p data-aos='fade-up' data-aos-duration='500' className='text-sm pb-10'>Cars are rented on per day basis Lorem, ipsum dolor sit adipisicing elit. consectetur dolore accusamus!</p>

            {/* Car detail Cards  */}
            <div >
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16'>
                    {
                        carList.map((car) => {
                            return (
                            <div 
                            data-aos='fade-up'
                            data-aos-delay={car.aosDelay}
                            className='space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group'>
                                <div className='w-full h-[120px]'>
                                    <img
                                    className='w-full h-[120px] object-contain group-hover:translate-x-6 duration-700' 
                                    src={car.image} alt="" />
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='text-primary font-semibold'>{car.name}</h1>
                                    <div className='flex justify-between items-center text-xl font-semibold'>
                                        <p>&#8377;{car.price}/Day</p>
                                        <a href="#">Details</a>
                                    </div>
                                </div>
                                <p className='text-xl font-semibold absolute top-0 left-3'>
                                    12KM
                                </p>
                            </div>
                            )
                        })}
                </div>

            </div>

            {/* Button  */}
            <div className='grid place-content-center mt-8'>
                <button data-aos="fade-up" data-aos-delay='800' className='button-outline'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default CarList


//dark mode
//group
//inline-block
//object-contain