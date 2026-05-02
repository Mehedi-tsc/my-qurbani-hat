'use client'
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";


const UpdateModal = () => {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        await authClient.updateUser({
            name,
            image,
            
        })

        toast.success("Profile Updated Succesfuly")

    }
    return (
        <div className="flex justify-center">
            <Modal>
                <Button className='text-lg' variant="Primary"><FaEdit /> Update Profile</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <FaUser className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading className="text-center">Update Profile</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" type="text">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>


                                        <TextField className="w-full" name="image">
                                            <Label>Photo URL</Label>
                                            <Input placeholder="Enter your photo URL" />
                                        </TextField>
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type="submit" >Update</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default UpdateModal;