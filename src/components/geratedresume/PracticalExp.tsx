import ResponsibilityList from "./ResponsibilityList";

export default function PracticalExp() {
  return (
    <section>
      <h1 className="text-base font-semibold">Practical Experience</h1>
      <div className="border border-black mt-2"></div>
      <div className="flex justify-between">
        <div>
          <p>company name</p>
          <p>position title</p>
        </div>
        <div>
          <p>Start Date: MM/YYYY</p>
          <p>End Date: MM/YYYY</p>
        </div>
      </div>
      <ResponsibilityList />
    </section>
  );
}
