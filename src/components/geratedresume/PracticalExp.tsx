import ResponsibilityList from "./ResponsibilityList";

export default function PracticalExp({ exp }: any) {
  return (
    <section>
      <h1 className="text-base font-semibold">Practical Experience</h1>
      <div className="border border-black mt-2"></div>
      <div className="flex justify-between">
        <div>
          <p>{exp.companyname}</p>
          <p>{exp.positiontitle}</p>
        </div>
        <div>
          <p>Start Date: {exp.startdate}</p>
          <p>End Date: {exp.enddate}</p>
        </div>
      </div>
      <ResponsibilityList listExp={exp} />
    </section>
  );
}
