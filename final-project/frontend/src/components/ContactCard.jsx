import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiGlobe } from "react-icons/pi";
import { FaMobileScreenButton } from "react-icons/fa6";
import { useState } from "react";
import ContactModal from "./ContactModal";
import contactPropTypes from "./contactPropTypes.js";

const ContactCard = ({ contact }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      <h4 className="my-2 text-2xl text-gray-900">
        {contact.firstname} {contact.lastname}
      </h4>
      <div className="flex justify-start items-center gap-x-2">
        <FaMobileScreenButton className="text-red-300 text-2xl" />
        <h2 className="my-1">{contact.mobile}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <PiGlobe className="text-red-300 text-2xl" />
        <h2 className="my-1">{contact.timezone}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/contacts/details/${contact._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/contacts/edit/${contact._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/contacts/delete/${contact._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <ContactModal contact={contact} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

ContactCard.propTypes = {
  contact: contactPropTypes,
};

export default ContactCard;
