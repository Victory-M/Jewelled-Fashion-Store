import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center  text-white bg-red-700 py-5 px-16 md:flex-row md:justify-between">
      <h1 className="uppercase font-bold text-2xl">jewelled</h1>

      <div className=" space-y-2 ">
        <p className=""> Contact Us: </p>
        <ul className="flex space-x-4">
          <li>
            <a href="#">
              <UilInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <UilLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <UilTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
