import about from "../assets/mobilelogin.jpg"
const Products=()=> {
  return (
    <div>
        {/*about text */}
        <div className='px-4 lg:px-14px max-w-screen-2xl mx-auto my-8' id='product'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
                <div>
                    <img src={about} alt="" className='w-96 h-96 max-w-xl rounded-lg shadow-xl p-2'/>
                </div>
                <div className="md:w-3/5 mx-auto">
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>How to design like we do</h2>
                    <p className="md-3/4 text-sm text-neutralGrey mb-8">
                    we believe in empowering seniors to live independently while providing their families with the peace of mind they deserve. The
                    Home Monitoring System is designed to keep your loved ones safe and connected, ensuring their well-being at all times.</p>
                    <button className='btn-primary'>Learn More</button>
                </div>

            </div>

        </div>
         {/*compnay stats */}
         <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' id='testimonial'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='wd:w-1/3 p-5 mt-10'>
                <img src="/src/assets/tesla.jpg" alt="" className='md:w-2/3 mx-auto rounded-tl-3xl rounded-3xl mx-auto' />       
                </div>
                <div className="md:w-2/3 mx-auto">
                    <div>
                        <p className='md:w:4/5 text-sm text-neutralGrey mb-8 leading-7'>
                        An advanced solution designed to ensure the safety, health, and independence of seniors living at home. With cutting-edge technology and 
                        user-friendly features, it provides peace of mind for families while supporting the well-being of their loved ones.
                        </p>
                        <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
                        <p className='text-base text-neutralGrey mb-8'>British Dragon Boat Racing Association</p>
                        <div>
                            <div className='flex items-center gap-8 flex-wrap'>
                                <img src="/src/assets/company1.jpg" alt=""  className='cursor-pointer w-14 h-14'/>
                                <img src="/src/assets/company2.jpg" alt=""  className='cursor-pointer w-14 h-14'/>
                                <img src="/src/assets/company3.jpg" alt=""  className='cursor-pointer w-14 h-14'/>
                                <img src="/src/assets/company4.jpg" alt=""  className='cursor-pointer w-14 h-14'/>
                                <img src="/src/assets/company5.jpg" alt=""  className='cursor-pointer w-14 h-14'/>
                                <img src="/src/assets/company6.jpg" alt=""  className='cursor-pointer w-14 h-14'/>
                                <div className='flex items-center gap-8'>
                                    <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Meet all customers{" "}
                                        <img src="/src/assets/arrow.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Products