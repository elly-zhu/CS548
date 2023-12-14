import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useSnackbar } from "notistack";
import ContactsTable from "../components/ContactsTable";
import ContactCardsView from "../components/ContactCardsView";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const [searchName, setSearchName] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const fetchAllContacts = async () => {
    try {
      setLoading(true);
      // Fetch contact data
      const response = await axios.get("https://localhost:8080/contacts/");
      setContacts(response.data.data);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error retrieving contacts", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  const fetchContactsByName = async (searchName) => {
    try {
      setLoading(true);
      // Fetch contact data
      const response = await axios.get(
        `https://localhost:8080/contacts/search/${searchName}`
      );
      setContacts(response.data.data);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error retrieving contacts with provided name", {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchName && searchName.trim().length > 0) {
      fetchContactsByName(searchName);
    } else {
      fetchAllContacts();
    }
  }, [searchName]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center px-6">
        <h1 className="text-3xl my-8">My Phone Book Contacts</h1>
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="bg-green-200 text-2xl hover:bg-green-800 hover:text-white px-4 py-1 rounded-lg"
            onClick={() => setShowType("table")}
          >
            Table View
          </button>
          <button
            className="bg-green-200 text-2xl hover:bg-green-800 hover:text-white  px-4 py-1 rounded-lg"
            onClick={() => setShowType("card")}
          >
            Card View
          </button>
          <Link
            to="/contacts/create"
            className="border-2 border-green-800 text-green-800 rounded-full px-2 py-2 flex items-center transition-all duration-300 ease-in-out hover:bg-green-800 hover:text-white"
          >
            <FiPlus className="text-2xl" />
          </Link>
        </div>
      </div>
      <div className="flex my-4 text-xl">
        <label>Search by name:</label>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border border-gray-400 rounded-sm ml-2"
        />
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <ContactsTable contacts={contacts} />
      ) : (
        <ContactCardsView contacts={contacts} />
      )}
    </div>
  );
};

export default Home;
