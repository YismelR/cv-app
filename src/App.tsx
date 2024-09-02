import { Toaster } from "./components/ui/toaster";
import CVGenerator from "./pages/CVGenerator";
import ResumeGenerated from "./pages/ResumeGenerated";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("form");
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

  return (
    <div className="min-h-full bg-[#111827] flex place-content-center text-white">
      {currentPage === "form" && (
        <CVGenerator
          setForm={setFormData}
          eduData={eduData}
          formData={formData}
          expData={expData}
          setEdu={setEduData}
          setExp={setExpData}
          setCurrent={setCurrentPage}
        />
      )}
      {currentPage === "resume" && (
        <ResumeGenerated
          formData={formData}
          eduData={eduData}
          expData={expData}
          setCurrent={setCurrentPage}
        />
      )}
      <Toaster />
    </div>
  );
}

export default App;
