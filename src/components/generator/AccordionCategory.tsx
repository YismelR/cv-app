import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationalExpForm from "./EducationalExpForm";
import PracticalExpForm from "./PracticalExpForm";

export default function AccordionCategory({
  formSetter,
  eduSetter,
  expSetter,
}: any) {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-8">
      <AccordionItem value="item-1">
        <AccordionTrigger>General Information</AccordionTrigger>
        <AccordionContent>
          <GeneralInfoForm setTheInfo={formSetter} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Educational Experience</AccordionTrigger>
        <AccordionContent>
          <EducationalExpForm setEducation={eduSetter} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Practical Experience</AccordionTrigger>
        <AccordionContent>
          <PracticalExpForm setExperience={expSetter} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
