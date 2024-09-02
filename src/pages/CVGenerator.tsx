import AccordionCategory from "@/components/generator/AccordionCategory";
import SubmitButton from "@/components/generator/SubmitButton";

export default function CVGenerator({ setForm, setEdu, setExp }: any) {
  return (
    <div className="bg-backgroundCardColor flex flex-col gap-10 my-8 p-8 rounded-2xl w-[600px] place-items-center min-h-full">
      <h2 className="font-bold text-3xl">CV/Resume Generator</h2>
      <AccordionCategory
        formSetter={setForm}
        eduSetter={setEdu}
        expSetter={setExp}
      />
      <SubmitButton name="Submit" />
    </div>
  );
}
