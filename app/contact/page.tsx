"use client";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaComment,
} from "react-icons/fa";
import { submitHireMe } from "../actions/hireMe";
import { useState } from "react";
import FormField from "@/app/components/FormField";

type FieldConfig = {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  icon: React.ReactNode;
  placeholder?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
};

const fields: FieldConfig[] = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    icon: <FaUser className="text-gray-400" />,
    placeholder: "John",
    required: true,
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    icon: <FaUser className="text-gray-400" />,
    placeholder: "Doe",
    required: true,
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    icon: <FaEnvelope className="text-gray-400" />,
    placeholder: "john.doe@example.com",
    required: true,
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    icon: <FaPhone className="text-gray-400" />,
    placeholder: "(123) 456-7890",
  },
  {
    id: "roleType",
    label: "Role Type",
    type: "select",
    icon: <FaBriefcase className="text-gray-400" />,
    options: [
      { value: "contract", label: "Contract" },
      { value: "employee", label: "Employee" },
    ],
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    icon: <FaComment className="text-gray-400" />,
    placeholder: "Tell me about your project or opportunity...",
    required: true,
  },
];

const HireMeForm = () => {
  const [errors, setErrors] = useState<any>(null);

  const clientAction = async (formData: FormData) => {
    const result = await submitHireMe(formData);
    if (!result.success) {
      setErrors(result.errors);
    } else {
      setErrors(null);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Hire Me
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Fill out the form below to get in touch with me for cloud
            engineering opportunities
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <form action={clientAction} className="space-y-6 p-6 sm:p-8">
            {/* Global errors */}
            {errors?.errors?.length > 0 && (
              <div className="mb-4 p-3 rounded bg-red-50 text-red-700 text-sm">
                {errors.errors.map((err: string, idx: number) => (
                  <p key={idx}>{err}</p>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              {fields.map((field) => (
                <FormField
                  key={field.id}
                  {...field}
                  error={errors?.properties?.[field.id]?.errors}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HireMeForm;
