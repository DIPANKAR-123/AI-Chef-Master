import logo from '../assets/logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto flex justify-between">
        <div className='flex flex-col items-center justify-between'>
      
        <div className=''>
          <img src={logo} className='h-20' alt="" />
        </div>
        <div className="text-2xl font-bold">AI Chef Master</div>
        <div className='text-gray-500 ml-2'>
            <p>Privacy Policy | Cookie Policy | Terms</p>
        </div>
        </div>

        <div className='flex flex-col justify-between'>
        <div className='flex gap-24'>

        <div className="flex flex-col space-y-6">
          <a href="#" className="">About Us</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">Blog</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">Contact</a>
        </div>
        <div className="flex flex-col space-y-6">
          <p  className="">Product</p>
          <a href="#" className="text-gray-500 hover:text-gray-200">Pricing</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">FAQ</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">Become Helper</a>
        </div>
        <div className="flex flex-col space-y-6">
          <p  className="">Follow Us</p>
          <a href="#" className="text-gray-500 hover:text-gray-200">About</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">Services</a>
          <a href="#" className="text-gray-500 hover:text-gray-200">Contact</a>
        </div>
        <div className="flex flex-col space-y-6">
          <p  className="">Support</p>
          <a href="#" className="text-gray-500 hover:text-gray-200 mr-6">Help Center</a>
          
        </div>

        </div>
        <p className='pt-8 text-right text-gray-500 mr-4'>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;

