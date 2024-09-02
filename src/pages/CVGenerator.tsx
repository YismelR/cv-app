import AccordionCategory from "@/components/generator/AccordionCategory";
import SubmitButton from "@/components/generator/SubmitButton";

export default function CVGenerator({
  setForm,
  setEdu,
  setExp,
  setCurrent,
  expData,
  eduData,
  formData,
}: any) {
  function handleSubmit() {
    setCurrent("resume");
  }
  return (
    <div className="bg-backgroundCardColor flex flex-col gap-10 my-8 p-8 rounded-2xl w-[600px] place-items-center min-h-full">
      <h2 className="font-bold text-3xl">CV/Resume Generator</h2>
      <AccordionCategory
        formSetter={setForm}
        eduSetter={setEdu}
        expSetter={setExp}
        expData={expData}
        eduData={eduData}
        formData={formData}
      />
      <SubmitButton name="Submit" onSubmit={handleSubmit} />
    </div>
  );
}
