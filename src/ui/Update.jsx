'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const Update = () => {
    const router = useRouter();
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        await authClient.updateUser({
            name,
            image,

        })

        toast.success("Profile Updated Succesfuly");
        router.push('/profile')

    }
    return (

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <TextField className="w-full" name="name" type="text">
                <Label>Name</Label>
                <Input placeholder="Enter your name" />
            </TextField>


            <TextField className="w-full" name="image">
                <Label>Photo URL</Label>
                <Input placeholder="Enter your photo URL" />
            </TextField>

            <div className="flex justify-between">
                <Button slot="close" variant="secondary">
                    Cancel
                </Button>
                <Button type="submit" >Update</Button>
            </div>

        </form>

    );
};

export default Update;