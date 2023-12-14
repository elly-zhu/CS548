import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import PropTypes from "prop-types";
import contactPropTypes from "./contactPropTypes.js";

const ContactsTable = ({ contacts }) => {
  return (
    <table className="w-full text-lg">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mobile</th>
          <th>TimeZone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, index) => (
          <tr
            key={contact._id}
            className={
              index % 2 == 0
                ? "h-10 text-center"
                : "h-10 text-center bg-slate-100"
            }
          >
            <td>{index + 1}</td>
            <td>{contact.firstname}</td>
            <td>{contact.lastname}</td>
            <td>{contact.mobile}</td>
            <td>{contact.timezone}</td>
            <td className="text-center">
              <div className="flex justify-center gap-x-4">
                <Link to={`/contacts/details/${contact._id}`}>
                  <BsInfoCircle
                    className="text-2xl text-green-800"
                    title="details"
                  />
                </Link>
                <Link to={`/contacts/edit/${contact._id}`}>
                  <AiOutlineEdit
                    className="text-2xl text-yellow-600"
                    title="edit"
                  />
                </Link>
                <Link to={`/contacts/delete/${contact._id}`}>
                  <MdOutlineDelete
                    className="text-2xl text-red-600"
                    title="delete"
                  />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ContactsTable.propTypes = {
  contacts: PropTypes.arrayOf(contactPropTypes).isRequired,
};

export default ContactsTable;
