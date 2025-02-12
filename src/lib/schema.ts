import { z } from "zod";

export const formSchema = z.object({
  squareFootage: z.string().min(1, "Please select your home square footage"),
  electricityBill: z
    .string()
    .min(1, "Please enter your electricity bill")
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "Please enter a valid amount",
    }),
  heatingBill: z
    .string()
    .min(1, "Please enter your heating bill")
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) > 0, {
      message: "Please enter a valid amount",
    }),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export type FormData = z.infer<typeof formSchema>;
