import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { Input } from '@/components/ui/input'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card } from '@/components/ui/card'
import { Link, useNavigate } from 'react-router-dom'
import { RouteIndex, RouteSignUp } from '@/helpers/routeName'
import { getEnv } from '@/helpers/getEnv'
import { showToast } from '@/helpers/showToste'


const SignIn = () => {
const Navigate = useNavigate();

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3, "Password field is required"),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

const onSubmit = async (values) => {
    try {
      const res = await fetch(`${getEnv("VITE_API_BASE_URL")}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        return showToast("error", data.message);
      }

      showToast("success", data.message);
      Navigate(RouteIndex);
    } catch (err) {
      showToast("error", err.message);
    }
  };



  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Card className="w-[400px] p-5">
        <h1 className='text-2xl font-bold text-center mb-5'>Login to your account</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>

            <div className='mb-3'>
              <FormField
                control={Form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='mb-3'>
              <FormField
                control={Form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your Password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='mt-5'>
              <Button type="submit" className="w-full">Sign In</Button>
              <div className='mt-5 text-sm flex justify-center items-center gap-2'>
                <p>Don't have an account?</p>
                <Link to={RouteSignUp} className='text-blue-500 hover:underline'>Sign Up</Link>
              </div>
            </div>
          </form>
        </Form>
      </Card>

    </div>
  )
}

export default SignIn