import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageWrapper from "../../components/PageWrapper";

const Register = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white border rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-center">
            Create your account
          </h1>

          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input type="text" label="First name" placeholder="John" />
              <Input type="text" label="Last name" placeholder="Doe" />
            </div>

            <Input label="Email" type="email" placeholder="you@example.com" />

            <Input placeholder="...." label="Password" type="password" />

            <Input
              placeholder="...."
              label="Confirm Password"
              type="password"
            />

            <Button text="Create Account"></Button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Register;
