"use server";

import { z } from "zod";

const hireMeSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .regex(
      /^\+?(\d{1,4})?[-.\s]?\(?(\d{1,3})\)?[-.\s]?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/,
      "Invalid phone number format"
    )
    .optional(),
  roleType: z.enum(["contract", "employee"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitHireMe(formData: FormData) {
  const raw = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    roleType: formData.get("roleType"),
    message: formData.get("message"),
  };

  const parsed = hireMeSchema.safeParse(raw);

  if (!parsed.success) {
    return { success: false, errors: z.treeifyError(parsed.error) };
  }

  // Store in DB or send via email (placeholder)
  console.log("Form submission:", parsed.data);

  return { success: true };
}
