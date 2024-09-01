import { Button } from "../ui/button";

type SubmitButtonProps = {
  name: string;
};

export default function SubmitButton({ name }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="place-self-end mt-auto text-2xl bg-btnColor rounded-3xl w-[148px] h-[60px]"
    >
      {name}
    </Button>
  );
}
