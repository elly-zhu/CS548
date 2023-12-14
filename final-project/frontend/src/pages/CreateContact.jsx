import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { timezones } from "../components/timezoneValues";

const CreatContact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile, setMobile] = useState("");
  const [landline, setLandline] = useState("");
  const [address, setAddress] = useState("");
  const [timezone, setTimezone] = useState("America/Los_Angeles");
  const [note, setNote] = useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const validateForm = () => {
    const is_valid = firstname != "" && lastname != "" && mobile != "";
    return is_valid;
  };

  const handleSaveContact = () => {
    if (!validateForm()) {
      enqueueSnackbar("Please fill in the required fields.", {
        variant: "error",
      });
      return;
    }

    const data = {
      firstname,
      lastname,
      mobile,
      landline,
      address,
      timezone,
      note,
    };
    setLoading(true);
    axios
      .post("https://localhost:8080/contacts", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Contact Created successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(`Error creating contact ${error}`, {
          variant: "error",
        });
        console.log(error);
      });
  };

  const defaultFieldLabelClass = "text-xl text-gray-700";

  const defaultFieldClass =
    "bg-gray-50 border border-gray-400 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2";

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Contact</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-grey-800 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4 flex gap-4">
          <div className="flex-1">
            <label className={defaultFieldLabelClass}>
              First Name{" "}
              <span className="text-sm text-red-500">(required)</span>
            </label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className={defaultFieldClass}
            />
          </div>
          <div className="flex-1">
            <label className={defaultFieldLabelClass}>
              Last Name <span className="text-sm text-red-500">(required)</span>
            </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className={defaultFieldClass}
            />
          </div>
        </div>
        <div className="my-4">
          <label className={defaultFieldLabelClass}>
            Mobile <span className="text-sm text-red-500">(required)</span>
          </label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => {
              // Allow only digits
              const sanitizedValue = e.target.value.replace(/[^\d+]/g, "");
              setMobile(sanitizedValue);
            }}
            className={defaultFieldClass}
            pattern="[0-9+]*" // Allow only digits and plus sign
            inputMode="numeric"
          />
        </div>
        <div className="my-4">
          <label className={defaultFieldLabelClass}>Landline</label>
          <input
            type="text"
            value={landline}
            onChange={(e) => {
              // Allow only digits
              const sanitizedValue = e.target.value.replace(/[^\d+]/g, "");
              setLandline(sanitizedValue);
            }}
            className={defaultFieldClass}
            pattern="[0-9+]*" // Allow only digits and plus sign
            inputMode="numeric"
          />
        </div>
        <div className="my-4">
          <label className={defaultFieldLabelClass}>TimeZone</label>
          <select
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
            className={defaultFieldClass}
            required
          >
            {timezones.map((tz) => (
              <option key={tz} value={tz}>
                {tz}
              </option>
            ))}
          </select>
        </div>
        <div className="my-4">
          <label className={defaultFieldLabelClass}>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={defaultFieldClass}
          />
        </div>
        <div className="my-4">
          <label className={defaultFieldLabelClass}>Note</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className={defaultFieldClass}
          />
        </div>
        <button
          className="p-2 bg-sky-800 m-8 rounded-lg text-white text-xl"
          onClick={handleSaveContact}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreatContact;
