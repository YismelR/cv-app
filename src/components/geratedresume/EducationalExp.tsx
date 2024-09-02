export default function EducationalExp({ edu }: any) {
  return (
    <section>
      <h1 className="text-base font-semibold">Educational Experience</h1>
      <div className="border border-black mt-2"></div>
      <div className="flex justify-between">
        <div>
          <p>{edu.schoolname}</p>
          <p>{edu.studytitle}</p>
        </div>
        <div>
          <p>Start Year - {edu.startyear}</p>
          <p>End Year - {edu.endyear}</p>
        </div>
      </div>
    </section>
  );
}
