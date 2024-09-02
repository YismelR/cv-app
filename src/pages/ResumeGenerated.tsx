import SubmitButton from "@/components/generator/SubmitButton";
import EducationalExp from "@/components/geratedresume/EducationalExp";
import GeneralInfo from "@/components/geratedresume/GeneralInfo";
import PracticalExp from "@/components/geratedresume/PracticalExp";

export default function ResumeGenerated({ formData, eduData, expData }: any) {
  return (
    <div className="bg-backgroundCardColor flex flex-col gap-10 my-8 p-8 rounded-2xl w-[600px] min-h-full">
      <h1 className="font-bold text-3xl place-self-center">
        CV/Resume Generated
      </h1>
      <main className="bg-resumeBG flex flex-col text-black w-full p-4 text-xs gap-8 h-full">
        <GeneralInfo info={formData} />
        <EducationalExp edu={eduData} />
        <PracticalExp exp={expData} />
      </main>
      <footer className="flex justify-between mt-auto">
        <SubmitButton name="Edit" />
        <SubmitButton name="Download" />
      </footer>
    </div>
  );
}
