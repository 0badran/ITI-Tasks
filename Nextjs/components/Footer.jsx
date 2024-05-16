import { Typography } from "@material-tailwind/react";
import  Image  from 'next/image';

function Footer() {
  return (
    <footer className="w-full bg-black p-8 mt-4">
    <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-center md:justify-between">
      <Image src="/logo-ct-dark.png" width={570} height={620} alt="logo-ct" className="w-10 bg-white" />
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </div>
    <hr className="my-8 border-blue-gray-50" />
    <Typography color="blue-gray" className="text-center text-white font-normal">
      &copy; 2023 Material Tailwind
    </Typography>
  </footer>
  )
}

export default Footer;