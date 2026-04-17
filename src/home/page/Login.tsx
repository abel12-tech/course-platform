import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageWrapper from "../../components/PageWrapper";

const Login = () => {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white border rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-center">
            Log in to your account
          </h1>

          <form className="mt-6 space-y-4">
            <Input label="Email" type="email" placeholder="you@example.com" />

            <Input type="password" label="Password" placeholder="••••••••" />

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="#" className="text-orange-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <Button text="Login"></Button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-orange-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Login;
