import React from "react";

type FieldProps = {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  icon: React.ReactNode;
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  error?: string[];
};

const FormField = ({
  id,
  label,
  type,
  icon,
  placeholder,
  options,
  required,
  error,
}: FieldProps) => {
  return (
    <div className={id === "message" ? "sm:col-span-2" : ""}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>

        {type === "textarea" ? (
          <textarea
            id={id}
            name={id}
            rows={4}
            placeholder={placeholder}
            required={required}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 
                       transition-colors duration-200"
          />
        ) : type === "select" ? (
          <select
            id={id}
            name={id}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 bg-white 
                       transition-colors duration-200"
          >
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            required={required}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg 
                       focus:ring-blue-500 focus:border-blue-500 
                       transition-colors duration-200"
          />
        )}
      </div>

      {error && error.length > 0 && (
        <p className="mt-1 text-sm text-red-600">{error.join(", ")}</p>
      )}
    </div>
  );
};

export default FormField;
