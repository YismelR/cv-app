import AccordionCategory from "@/components/component/AccordionCategory";
import { Button } from "@/components/ui/button";

export default function CVGenerator() {
  return (
    <div className="bg-backgroundCardColor flex flex-col gap-10 my-8 p-8 rounded-2xl w-[600px] place-items-center">
      <h1 className="font-bold text-3xl">CV/Resume Generator</h1>
      <AccordionCategory />
      <Button
        type="submit"
        className="place-self-end mt-auto text-2xl bg-btnColor h-16 rounded-3xl"
      >
        Submit
      </Button>
    </div>
  );
}
