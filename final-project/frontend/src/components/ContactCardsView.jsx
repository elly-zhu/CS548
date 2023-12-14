import ContactCard from "./ContactCard";
import PropTypes from "prop-types";
import contactPropTypes from "./contactPropTypes.js";

const ContactCardsView = ({ contacts }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {contacts.map((contact) => (
        <ContactCard key={contact._id} contact={contact} />
      ))}
    </div>
  );
};

ContactCardsView.propTypes = {
  contacts: PropTypes.arrayOf(contactPropTypes).isRequired,
};

export default ContactCardsView;
