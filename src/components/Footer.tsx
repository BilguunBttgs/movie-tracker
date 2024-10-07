import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 text-center w-full font-bold flex-center-row gap-2">
      <p> Built with</p>
      <FaHeart color="red" />
      <p>by Bilguun</p>
    </div>
  );
};

export default Footer;
