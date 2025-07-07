import React from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card } from '@/components/ui/card'
import { Link, useNavigate } from 'react-router-dom'
import { RouteSignIn } from '@/helpers/routeName'
import { getEnv } from '@/helpers/getEnv'


const SignUp = () => {

  const navigate = useNavigate();

  const formSchema = z.object({
    name: z.string().min(6, "Name must be at least 6 characters long"),
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    ConfirmPassword: z.string().refine(data => data.password === data.ConfirmPassword, "Passwords do not match"),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    },
  })

  async function onSubmit(values) {
    try {
      const response = await fetch(`${getEnv("VITE_BACKEND_URL")}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), 
      })
      if(!response.ok) {

      }
      navigate(RouteSignIn)
    } catch (error) {
      
    }
  }

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Card className="w-[400px] p-5">
        <h1 className='text-2xl font-bold text-center mb-5'>Create Your Account</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>

            <div className='mb-3'>
              <FormField
                control={Form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
            <div className='mb-3'>
              <FormField
                control={Form.control}
                name="ConfirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter Password again" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='mt-5'>
              <Button type="submit" className="w-full">Sign Up</Button>
              <div className='mt-5 text-sm flex justify-center items-center gap-2'>
                <p>Already have an account?</p>
                <Link to={RouteSignIn} className='text-blue-500 hover:underline'>Sign In</Link>
              </div>
            </div>
          </form>
        </Form>
      </Card>

    </div>
  )
}

export default SignUp