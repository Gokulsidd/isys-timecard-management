"use client"
import { useForm } from "react-hook-form";
import { useState, useTransition } from 'react';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { CardWrapper } from "@/components/auth/card-wrapper";
import { RegisterSchema } from '@/schemas';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            console.log(values)
        })
    }
    

    return ( 
        <CardWrapper headerLabel="Create account" backButtonLabel="Already have an account?" backButtonUrl="/auth/login" showSocial>
            <Form {...form}>
                <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                    <FormField control={form.control} name='name' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='Your name' />
                                </FormControl>
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name='email' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='abc@example.com' type='email'/>
                                </FormControl>
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name='password' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='******' type='password'/>
                                </FormControl>
                            </FormItem>
                        )}/>
                    </div>
                    <FormError  message=""/>
                    <FormSuccess message="" />
                    <Button type='submit' className='w-full' disabled={isPending} >
                        Register
                    </Button>
                </form>
            </Form>
        </CardWrapper>
     );
}
 
export default RegisterForm