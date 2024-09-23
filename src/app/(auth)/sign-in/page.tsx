import AuthForm from "@/components/auth/AuthForm";
import Logo from "@/components/logo";

const SignInPage = () => {
  return (
    <main className="w-full">
      <div className="mb-5">
        <Logo size="text-[90px]" />
      </div>
      <AuthForm type="sign-in" />
    </main>
  );
};

export default SignInPage;
