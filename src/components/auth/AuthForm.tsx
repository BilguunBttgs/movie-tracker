"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { authFormSchema } from "@/lib/utils";
import { Form } from "../ui/form";
import AuthInput from "./AuthInput";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type IAuthForm = {
  type: string;
};

const AuthForm = ({ type }: IAuthForm) => {
  const router = useRouter();
  const navigate = () => {
    if (type === "sign-in") {
      router.push("/sign-up");
    } else {
      router.push("/sign-in");
    }
  };
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("data", data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full space-y-4">
          <div>
            <AuthInput
              control={form.control}
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div>
            <AuthInput
              control={form.control}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="rounded-3xl w-full bg-[#37C6F3] text-white mt-14 h-[52px] text-xl"
        >
          {type === "sign-in" ? "Login" : "Register"}
        </Button>
        <div className="p-3">
          {type === "sign-in" ? (
            <p className="font-light">
              You don't have an account? ,{" "}
              <span onClick={navigate} className="font-bold">
                Register
              </span>
            </p>
          ) : (
            <p className="font-light">
              Already have an account? ,{" "}
              <span onClick={navigate} className="font-bold">
                Login
              </span>
            </p>
          )}
        </div>
      </form>
    </Form>
  );
};

export default AuthForm;
