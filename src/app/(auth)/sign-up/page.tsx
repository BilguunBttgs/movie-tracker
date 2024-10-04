import AuthForm from "@/components/auth/AuthForm";
import Logo from "@/components/logo";

const SignUpPage = () => {
  return (
    <main className="w-full md:w-96">
      <div className="mb-5">
        <Logo size="text-[90px]" />
      </div>
      <AuthForm type="sign-up" />
    </main>
  );
};

export default SignUpPage;
