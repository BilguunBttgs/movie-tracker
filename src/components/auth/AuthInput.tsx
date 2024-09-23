import { Input } from "../ui/input";
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

import { authFormSchema } from "@/lib/utils";
const formSchema = authFormSchema("sign-up");

interface IAuthInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  type: string;
}

const AuthInput = (props: IAuthInput) => {
  const { placeholder, type, name, control } = props;
  return (
    <>
      <FormField
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <FormMessage className="text-red-400 pl-2" />
            <FormControl>
              <Input
                className="bg-[#D9D9D9] rounded-3xl w-full h-[52px] text-center text-xl"
                placeholder={placeholder}
                type={type}
                {...field}
                id={name}
              />
            </FormControl>
          </>
        )}
      />
    </>
  );
};

export default AuthInput;
