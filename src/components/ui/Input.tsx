/* eslint-disable @typescript-eslint/no-explicit-any */
type InputProps = {
  value?:string;
  name:string;
  placeholder: string;
  type: string;
  label?: string;
  error?: string;
  onHandleChange?:(e:any) => void
};

const Input = ({ label, error, type, placeholder,value,name ,onHandleChange }: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="text-sm text-gray-700 mb-1 block">{label}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onHandleChange}
        className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
