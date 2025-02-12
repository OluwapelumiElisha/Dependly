// import { useForm } from "react-hook-form";
"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


export const signUpSchema = z.object({
  firstname: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(30, "First name must be at most 30 characters")
    .nonempty("First name is required"),

  lastname: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(30, "Last name must be at most 30 characters")
    .nonempty("Last name is required"),

  // name: z
  //   .string()
  //   .min(4, "Username must be at least 4 characters")
  //   .max(20, "Username must be at most 20 characters")
  //   .nonempty("Username is required"),

  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 11 digits")
    .max(11, "Phone number must be at most 15 digits")
    .regex(/^\d+$/, "Phone number must contain only numbers")
    .nonempty("Phone number is required"),

  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .nonempty("Password is required"),

  referral: z.string().optional(),

  selectCountry: z
    .string()
    // .refine((val) => ["+234", "+233", "+254", "+256"].includes(val), {
    //   message: "Invalid country code",
    // })
    // .nonempty("Country code is required"),
});

// ✅ Infer Type from Schema
type FormData = z.infer<typeof signUpSchema>;

export const UseSignUpForm = () => {


  const form = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  // ✅ Type `data` as `FormData`
  const onSubmit = async (data: FormData) => {
    console.log(data); 
   
  };

  return {
    form,
    onSubmit
  };
};
