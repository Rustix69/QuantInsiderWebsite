"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/app/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "./ui/textarea";
import supabase from "@/app/utils/supabase";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    phone: z
        .string()
        .regex(/^\d{10}$/, {
            message: "Phone number must be exactly 10 digits.",
        }),
    names: z.string().min(1, { message: "Name is required." }),
    bio: z
        .string()
        .min(10, {
            message: "Bio must be at least 10 characters.",
        })
        .max(160, {
            message: "Bio must not be longer than 160 characters.",
        }),
});

type FormSchema = z.infer<typeof formSchema>;

export function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            phone: "",
            names: "",
            bio: ""
        },
    });

    // Define the on submit handler
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const { data, error } = await supabase.from("contact").insert([
                {
                    name: values.names,
                    email: values.username,
                    phone: values.phone,
                    query: values.bio,
                },
            ]);

            if (error) {
                console.error("Error inserting data:", error);
                alert("There was an error submitting your query.");
            } else {
                console.log("Data inserted successfully:", data);
                alert("Your query has been submitted successfully!");
                form.reset(); // Reset the form
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            alert("An unexpected error occurred.");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6 bg-sky-50 p-6 sm:p-8 rounded-lg flex flex-col justify-between shadow-sm w-full min-h-[600px]">
                <div className="space-y-5">
                    <FormField
                        control={form.control}
                        name="names"
                        render={({ field }: { field: ControllerRenderProps<FormSchema, "names"> }) => (
                            <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Your Name" className="bg-white border-gray-300 focus:border-blue-200 focus:ring-blue-200" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }: { field: ControllerRenderProps<FormSchema, "username"> }) => (
                            <FormItem>
                                <FormLabel>Email Id</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Your Email Id" className="bg-white border-gray-300 focus:border-blue-200 focus:ring-blue-200" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }: { field: ControllerRenderProps<FormSchema, "phone"> }) => (
                            <FormItem>
                                <FormLabel>Contact Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your Phone number" className="bg-white border-gray-300 focus:border-blue-200 focus:ring-blue-200" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }: { field: ControllerRenderProps<FormSchema, "bio"> }) => (
                            <FormItem>
                                <FormLabel>Query</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about your query"
                                        className="resize-none bg-white border-gray-300 focus:border-blue-200 focus:ring-blue-200 min-h-[150px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" className="flex justify-center mt-auto">Contact Us</Button>
            </form>
        </Form>
    );
}

