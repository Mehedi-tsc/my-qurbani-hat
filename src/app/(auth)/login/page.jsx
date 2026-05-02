"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { error } from "better-auth/api";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({

            email,
            password,
            callbackURL: '/',

        });
        if (data) {
            toast.success('Login Succesfull')
        } else if (error) {
            toast.error(error.message)
        }

    };

    const HandlesignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            
        });
       
        toast.success('Login Succesfull')
        
                
    };
    return (
        <div className="my-12">
            <div className="bg-gray-200 w-10/12 md:w-6/12 lg:w-4/12 mx-auto shadow-sm rounded-xl p-10">
                <h2 className="text-center font-bold text-2xl my-3">Login</h2>
                <hr className="text-gray-300 my-6" />
                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="">
                        <Button type="submit">
                            <Check />
                            Login
                        </Button>

                    </div>
                </Form>
                <button onClick={HandlesignIn} className="mt-3 w-full btn btn-outline rounded-full"><FaGoogle /> Sign in with Google</button>
                <p className="text-center mt-2">If you do not have an account go to <Link href={'/register'} className="font-medium"> Register</Link> page</p>
            </div>

        </div>
    );
};

export default LoginPage;