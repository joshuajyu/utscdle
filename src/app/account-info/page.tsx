"use client"

import { MapPin } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "../../components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../components/ui/form"
import { Input } from "../../components/ui/input"
import React from "react";

const formSchema = z.object({
    username: z.string().min(5, {
        message: "Must be at least 5 characters.",
    }),
    currentPassword: z.string(),
    newPassword: z.string().min(8, {
        message: "Must be at least 8 characters.",
    }),
    email: z.string(),
}).refine((data) => data.currentPassword === "CURRENTPASS", {   //Must compare to the current password in db, change when db implemented
    message: "Incorrect password",
    path: ["currentPassword"], // path of error
  });

export default function DailyChallenge() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            currentPassword: "",
            newPassword: "",
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className="min-h-screen flex flex-col items-center justify-start w-full">
            <div className="pt-4 pb-4 text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center">
                    <MapPin className="h-10 w-10 text-white sm:mr-4 mr-0" />
                    <h1 className="text-3xl font-bold text-white sm:text-4xl">UTSCdle</h1>
                </div>
                <p className="mt-3 text-lg text-gray-300">
                    Account Information
                </p>
            </div>
            <div className="h-full flex flex-col items-center justify-start w-96 bg-gray-600 rounded-lg">
                <div className="mt-6 mb-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="username" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="currentPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Current Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="*******" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="*******" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <Button type="submit">Save Changes</Button>
                        </form>
                    </Form>
                </div>

            </div>

        </div>

    )
}
