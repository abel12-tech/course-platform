/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/use-form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import PageWrapper from "../../components/PageWrapper";
import useAuth from "../../store/useAuth";
import { API_URL } from "../../config/dot-env.config";
import { frontend_routes } from "../../utils/frontend_routes";

const Login = () => {
  const { setIsLoggedIn, setName, setRole } = useAuth();
  const navigate = useNavigate();

  const { form, handleChange, setIsSubmitting } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values: any) => {},
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/users`, { method: "GET" });
      const usersData = await response.json();

      console.log("Users", usersData);

      console.log("Email", form.email);
      console.log("Password", form.password);

      const currentUser = usersData.find(
        (user: any) =>
          user.email === form.email && user.password === form.password,
      );
      if (currentUser) {
        console.log("Authentication Succeed");

        setName(currentUser.name);
        setRole(currentUser.role);
        setIsLoggedIn(true);
        navigate(frontend_routes.home);
      } else {
        console.log("Invalid credentials");
      }
      setIsSubmitting(false);
    } catch (err) {
      console.log("Error", err);
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white border rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-center">
            Log in to your account
          </h1>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Input
              name="email"
              value={form.email}
              onHandleChange={handleChange}
              label="Email"
              type="email"
              placeholder="you@example.com"
            />

            <Input
              name="password"
              value={form.password}
              onHandleChange={handleChange}
              type="password"
              label="Password"
              placeholder="••••••••"
            />

            <Button onHandleClick={handleSubmit} text="Login"></Button>
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
