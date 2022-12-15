import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import "./index.css";
import prof from "../src/images/breakermaximus03.jpg";

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
    <div className="font-bold flex flex-row gap-4 m-4 bg-gray-500 rounded-md">
      <div className="w-1/2">
        <h1 className="text-center pt-8">ACME</h1>
        <img src={prof} alt="prof" className="pl-4 pr-4 rounded-md" />
      </div>
      <div className="flex flex-col w-1/2 gap-12 pt-4 pl-8">
        <form className="flex flex-col gap-4 ">
          <label className="pr-2 flex flex-col relative block">
            FIRST NAME
            <input
              className="border mt-2 mr-80 h-8 rounded-md placeholder:text-slate-300 pl-4"
              type="text"
              name="FIRST NAME"
              value={firstName}
              placeholder="Jane"
              onChange={handleFChange}
            />
          </label>

          <label className="pr-2 flex flex-col">
            SECOND NAME
            <input
              className="border mt-2 mr-80 h-8 rounded-md placeholder:text-slate-300 pl-4"
              placeholder="Doe"
              onChange={handleSChange}
            />
          </label>

          <label className="pr-2 flex flex-col">
            PHONE
            <input
              className="border mt-2 mr-80 h-8 rounded-md placeholder:text-slate-300 pl-4"
              placeholder="+24571333333"
              onChange={handlePhone}
            />
          </label>
          <label className="pr-2 flex flex-col">
            EMAIL
            <input
              className="border mt-2 mr-80 h-8 rounded-md placeholder:text-slate-300 pl-4"
              placeholder="example@gmail.com"
              onChange={handleEmail}
            />
          </label>

          <label className="pr-2 flex flex-col">
            PASSWORD
            <input
              className="border mt-2 mr-80 h-8 rounded-md placeholder:text-slate-300 pl-4"
              placeholder="********"
              onChange={handlePass}
            />
          </label>
          <label className=" flex flex-col">
            CONFIRM PASSWORD
            <input
              className="border mt-2 mr-80 h-8 rounded-md placeholder:text-slate-300 pl-4"
              placeholder="********"
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
          <button className="m-3 mr-80 bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
