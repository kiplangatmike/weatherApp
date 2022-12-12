// const { useState } = require("react");
// const { default: fetchWeather } = require("./api/fetchWeather");

// const Apps = () => {
//   const [search, setSearch] = useState("");
//   const [weather, setWeather] = useState([]);

//   const handleSearch = async (e) => {
//     if (e.key === "Enter") {
//       const data = await fetchWeather(search);
//       setWeather(data);
//       setSearch("");
//     }
//   };
//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="enter your timezone"
//           onKeyPress={handleSearch}
//           onChange={(e) => setQuery(e.target.value)}
//           value={search}
//         />
//         <div>
//           <h2>
//             <span>{weather.city}</span>
//             <sup>{weather.main.city}</sup>
//           </h2>
//           <div>
//             {weather.main.temp}<sup>&dec;C</sup>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import "./index.css";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setconfirmPass] = useState("");

  const handleFChange = (event) => {
    setFirstName(event.target.value);
    console.log(firstName);
  };
  const handleSChange = (event) => {
    setSecondName(event.target.value);
    console.log(secondName);
  };
  const handlePhone = (event) => {
    setPhone(event.target.value);
    console.log(phone);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(Email);
  };
  const handlePass = (event) => {
    setPass(event.target.value);
    console.log(pass);
  };
  const handleConfirmPass = (event) => {
    setconfirmPass(event.target.value);
    console.log(confirmPass);
  };
  return (
    <div className="font-bold flex flex-row gap-4 m-3">
      <div className="w-1/2 ">
        <h1 className="text-center pt-2">ACME</h1>
        <img src=""></img>
      </div>
      <div className="flex flex-col w-1/2 gap-12 pt-4">
        <form className="flex flex-col gap-12 ">
          <label className="pr-2">
            FIRST NAME
            <input
              className="border"
              type="text"
              name="FIRST NAME"
              value={firstName}
              spaceholder="Jane"
              onChange={handleFChange}
            />
          </label>

          <label>
            SECOND NAME
            <input
              label="SECOND NAME"
              spaceholder="Jane"
              onChange={handleSChange}
            />
          </label>

          <label>
            PHONE
            <input label="PHONE" spaceholder="Jane" onChange={handlePhone} />
          </label>
          <label>
            EMAIL
            <input label="EMAIL" spaceholder="Jane" onChange={handleEmail} />
          </label>

          <label>
            PASSWORD
            <input label="PASSWORD" spaceholder="Jane" onChange={handlePass} />
          </label>
          <label>
            CONFIRM PASSWORD
            <input
              label="FIRST NAME"
              spaceholder="Jane"
              onChange={handleConfirmPass}
            />
          </label>
        </form>
        <div className="flex flex-col">
          <FormControlLabel
            control={<Checkbox />}
            label="I accept terms and conditions"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I want to receive news"
          />
          <button class="mt-8 mr-80 bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
