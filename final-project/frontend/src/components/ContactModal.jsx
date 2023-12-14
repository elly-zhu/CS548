import { AiOutlineClose } from "react-icons/ai";
import { PiGlobe } from "react-icons/pi";
import { FaMobileScreenButton, FaMapLocationDot } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import contactPropTypes from "./contactPropTypes.js";

import PropTypes from "prop-types";

const ContactModal = ({ contact, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-8 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-2 mb-4 bg-red-300 rounded-lg">
          {contact.firstname} {contact.lastname}
        </h2>
        <div className="flex mb-4 justify-start items-center gap-x-2">
          <FaMobileScreenButton className="text-red-300 text-2xl" />
          <h2 className="my-1">{contact.mobile}</h2>
        </div>
        <div className="flex mb-4 justify-start items-center gap-x-2">
          <TbDeviceLandlinePhone className="text-red-300 text-2xl" />
          <h2 className="my-1">{contact.landline}</h2>
        </div>
        <div className="flex mb-4 justify-start items-center gap-x-2">
          <FaMapLocationDot className="text-red-300 text-2xl" />
          <h2 className="my-1">{contact.address}</h2>
        </div>
        <div className="flex mb-4 justify-start items-center gap-x-2">
          <PiGlobe className="text-red-300 text-2xl" />
          <h2 className="my-1">{contact.timezone}</h2>
        </div>
        <p className="mt-4">Note</p>
        <p className="my-2">{contact.note}</p>
      </div>
    </div>
  );
};

ContactModal.propTypes = {
  contact: contactPropTypes,
  onClose: PropTypes.func.isRequired,
};

export default ContactModal;
