import { z, AnyZodObject } from 'zod'

const user: AnyZodObject = z.object({
  id: z.string({}),
  email: z.string({
    required_error: 'Email is required',
    invalid_type_error: 'Email must be a string'
  })
  .min(1)
  ,
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string'
  }).min(1)
  ,
  password: z.string({
    required_error: 'Password is required',
    invalid_type_error: 'Password must be a string'
  }).min(1)
  ,
  dateOfBrith: z.date({}),
}) 

const signIn = user.partial({
  email: true,
  password: true
});

const signUp = user.partial({
  name: true,
  password: true,
  email: true,
  dateOfBrith: true
})

export type ISignIn = z.infer<typeof signIn>
export type ISignUp = z.infer<typeof signUp>
