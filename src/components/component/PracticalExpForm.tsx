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
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  companyname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  positiontitle: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  startdate: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  enddate: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  workdescription: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
export default function PracticalExpForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyname: "",
      positiontitle: "",
      startdate: "",
      enddate: "",
      workdescription: "",
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
        className="flex flex-col gap-4 pt-8 w-1/2"
      >
        <FormField
          control={form.control}
          name="companyname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">
                Company Name
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
          name="positiontitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">
                Position Title
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
            name="startdate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-lg">
                  Start Date
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
            name="enddate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-lg">
                  End Date
                </FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="workdescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-lg">
                Main Responsibilities
              </FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
}
