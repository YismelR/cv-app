export default function ResponsibilityList({ listExp }: any) {
  console.log(typeof listExp.workdescription);
  const charsList = listExp.workdescription.split("\n");
  return (
    <ul className="list-disc pl-6">
      {charsList.map((item: any, idx: number) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}
