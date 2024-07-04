import React from 'react'

const Blog= ()=> {
    const blogs= [
        {id: 1, title: "Creating Streamlined Safeguarding Process with OneRen", image:"/src/assets/blog1.jpg" },
        {id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image:"/src/assets/blog2.jpg" },
        {id: 3, title: "Revamning the Membership Model with Triatholn Australia", image:"/src/assets/blog3.jpg" },
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
        <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
                    <p className="md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, soluta alias omnis unde praesentium voluptas 
                       maxime repellat totam molestias est deserunt nulla perferendis impedit dolorum. Est voluptatum perspiciatis sit vero!
                    </p>
        </div>
        {/*all blogs */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {blogs.map((blog)=><div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                <img src={blog.image} alt="" className='md:w-2/3 mx-auto rounded-tl-3xl rounded-3xl mx-auto hover:scale-95 transition-all duration-300' />
                <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute lef-0 right-0 -bottom-12'>
                    <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                    <div className='flex items-center gap-8 justify-center'>
                        <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Read More
                        </a>
                    </div>
                </div>
            </div>    
            )}
        </div>
    </div>
  )
}

export default Blog