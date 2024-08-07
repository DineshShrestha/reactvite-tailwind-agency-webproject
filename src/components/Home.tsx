import { Carousel } from 'flowbite-react'
import carousel1 from "../assets/carousel1.jpg"
import carousel from "../assets/carousel.jpg"
import carousel2 from "../assets/carousel2.jpg"
const Home = ()=> {
  return (
    <div className='bg-neutralSilver' id='home'>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel  className='w-full mx-auto'>
        <div className="my-28 mx:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className='w-1/2 p-0 m-0 left-0'>
            <img src={carousel1} alt="" />
          </div>
          {/*Hero text*/}
          <div className="md:w-1/2">
                <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>  Lessons and insights <span className='text-brandPrimary leading-snug'>from 8 years</span></h1>
                <p className='text-neutralGrey text-base mb-8'>Where you grow your business as a photographer: site or social media?</p>
                <button className="btn-primary">Register</button>
            </div>
        </div>
        <div className="my-28 mx:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className='w-1/2 p-0 m-0 left-0'>
            <img src={carousel} alt="" />
          </div>
          {/*Hero text*/}
          <div className="md:w-1/2">
                <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>  Let's Learn and Earn <span className='text-brandPrimary leading-snug'>in 4 months</span></h1>
                <p className='text-neutralGrey text-base mb-8'>Where you grow your business as a photographer: site or social media?</p>
                <button className="btn-primary">Register</button>
            </div>
        </div>
        <div className="my-28 mx:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div className='w-1/2 p-0 m-0 left-0'>
            <img src={carousel2} alt="" />
          </div>
          {/*Hero text*/}
          <div className="md:w-1/2">
                <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>  Learn and Earn money <span className='text-brandPrimary leading-snug'>after completion</span></h1>
                <p className='text-neutralGrey text-base mb-8'>Where you grow your business as a photographer: site or social media?</p>
                <button className="btn-primary">Register</button>
            </div>
        </div>
      </Carousel>
        </div>
    </div>
  )
}
export default Home