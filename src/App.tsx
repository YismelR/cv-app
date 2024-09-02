import CVGenerator from "./pages/CVGenerator";
import ResumeGenerated from "./pages/ResumeGenerated";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
  });
  const [eduData, setEduData] = useState({
    schoolname: "",
    studytitle: "",
    startyear: "",
    endyear: "",
  });
  const [expData, setExpData] = useState({
    companyname: "",
    positiontitle: "",
    startdate: "",
    enddate: "",
    workdescription: "",
  });

  console.log(formData);
  return (
    <div className="min-h-full bg-[#111827] flex place-content-center text-white">
      <CVGenerator
        setForm={setFormData}
        setEdu={setEduData}
        setExp={setExpData}
      />
      <ResumeGenerated
        formData={formData}
        eduData={eduData}
        expData={expData}
      />
    </div>
  );
}

export default App;
