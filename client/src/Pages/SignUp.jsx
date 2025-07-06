import React from 'react'

const SignUp = () => {
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
                      <Input placeholder="Enter your Password" {...field} />
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

export default SignUp