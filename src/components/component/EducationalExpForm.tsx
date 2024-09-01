import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  schoolname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  studytitle: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  startyear: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  endyear: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
export default function EducationalExpForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schoolname: "",
      studytitle: "",
      startyear: "",
      endyear: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 gap-4 pt-8 w-1/2"
      >
        <FormField
          control={form.control}
          name="schoolname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">
                School Name
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="studytitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">
                Title of Study
              </FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="startyear"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-lg">
                  Start Year
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endyear"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-lg">
                  End Year
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
