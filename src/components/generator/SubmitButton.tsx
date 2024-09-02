import { Button } from "../ui/button";

type SubmitButtonProps = {
  name: string;
};

export default function SubmitButton({ name }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="place-self-end mt-auto text-2xl bg-btnColor rounded-xl w-[148px] h-[55px]"
    >
      {name}
    </Button>
  );
}
