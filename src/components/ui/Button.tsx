/* eslint-disable @typescript-eslint/no-explicit-any */
type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  loading?: boolean;
  onHandleClick:(e:any)=>void
};

const Button = ({
  text,
  variant = "primary",
  loading = false,
}: ButtonProps) => {
  const base = "w-full py-2 rounded transition font-medium disabled:opacity-50";

  const variants = {
    primary: "bg-orange-600 text-white hover:bg-orange-700",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  };

  return (
    <button disabled={loading} className={`${base} ${variants[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
