import { Footer } from "flowbite-react";
import logo from '../assets/logo/logo.jpg'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
const  MyFooter = ()=> {
  return (
    <Footer container>
      <div className="w-full m-5 pl-10 pr-10">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8'>
          <a href=""className='text-2xl font-semibold flex items-center space-x-3' ><img src={logo} alt="" className='w-10 inline-block items-center' /><span className='text-[#263238'>NEXCENT</span></a>
          <div className='mb-1'>
            <p className='mb-1'> Copyright  &copy; 2024 NexCent ltd.</p>
            <p>All rights reserved</p>
          </div>
          
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
            <div>
              <Footer.Title title="overview" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Testimonial</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Service" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Servic</Footer.Link>
                <Footer.Link href="#">Product</Footer.Link>
                <Footer.Link href="#">FAQs</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
                <Footer.Link href="#">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="NexCent™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter