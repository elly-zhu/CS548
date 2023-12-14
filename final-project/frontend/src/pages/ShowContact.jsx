import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import getWorldTimeByTimezone from "../controller/getCurrentWorldTime";
import getTimeInfo from "../controller/getTimeComparison";

const ShowContact = () => {
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(false);
  const [worldTime, setWorldTime] = useState();
  const [timeInfo, setTimeInfo] = useState();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const fetchContactData = async () => {
    try {
      setLoading(true);

      // Fetch contact data
      const response = await axios.get(`https://localhost:8080/contacts/${id}`);
      setContact(response.data.data);
      if (contact.timezone) {
        const time = await getWorldTimeByTimezone(contact.timezone);
        setWorldTime(time);
        setTimeInfo(getTimeInfo(time, contact.timezone));
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error retrieving contact", { variant: "error" });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContactData();
  }, [id, contact.timezone]);

  useEffect(() => {
    // Set up an interval to fetch world time every second
    const intervalId = setInterval(async () => {
      if (contact.timezone) {
        const time = await getWorldTimeByTimezone(contact.timezone);
        setWorldTime(time);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [id, contact.timezone]);

  const labelClass = "text-xl mr-4 text-gray-500";
  const displayFieldClass = "text-xl mr-4 text-gray-900";

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Contact</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 m-auto">
          <div>
            <div className="my-4 text-3xl">
              {contact.firstname} {contact.lastname}
            </div>
            <div className="my-4">
              <span className={labelClass}>Mobile</span>
              <span className={displayFieldClass}>{contact.mobile}</span>
            </div>
            <div className="my-4">
              <span className={labelClass}>Landline</span>
              <span className={displayFieldClass}>{contact.landline}</span>
            </div>
            <div className="my-4">
              <span className={labelClass}>Address</span>
              <span className={displayFieldClass}>{contact.address}</span>
            </div>
            <div className="my-4">
              <span className={labelClass}>Timezone</span>
              <span className={displayFieldClass}>{contact.timezone}</span>
            </div>
            <div className="my-4">
              <span className={labelClass}>Note</span>
              <span className={displayFieldClass}>{contact.note}</span>
            </div>
            <div className="mt-4">
              <span className="text-md mr-1 text-gray-600">Created Time:</span>
              <span className="text-gray-600">
                {new Date(contact.createdAt).toString()}
              </span>
            </div>
            <div className="my-0">
              <span className="text-md mr-1 text-gray-600">
                Last Updated Time:
              </span>
              <span className="text-gray-600">
                {new Date(contact.updatedAt).toString()}
              </span>
            </div>
          </div>
          <hr className="my-6" />
          <div className="bg-yellow-100 p-6 rounded-lg">
            <div className="my-4 text-3xl">
              <p className="my-2">
                Current time at {contact.timezone?.split("/")[1]} is:
              </p>{" "}
              <p className="my-2">
                {worldTime?.split("T")[0]}{" "}
                {worldTime?.split("T")[1].split(".")[0]}
              </p>
              <p className="text-2xl">{timeInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowContact;
