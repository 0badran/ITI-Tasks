import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import Image from 'next/image';
import { useForm } from "react-hook-form";
import topLogo from "@components/public/top-logo.png";
import bottomLogo from "@components/public/bottom-logo.png";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();
  const { signup: email } = router.query;


  return (
    <Card className='flex flex-col items-center mt-10' shadow={false}>
      <div className='flex flex-col items-center w-[30rem]'>
        <Image width="70" height="70" className='object-cover object-center mb-3' src={topLogo} alt='logo-image' />
        <Typography variant="h3" color="black">
          Create your account
        </Typography>
        <Typography color="black" className="mt-1 text-center">
          Let&apos;s get started by creating your account.
          To keep your account safe, we need a strong password
        </Typography>
      </div>
      <form className="mb-20" onSubmit={handleSubmit(createNewUser)}>
        <div className='w-[28rem] mt-20'>
          <Input size="lg" defaultValue={email} disabled color='orange' label="Enter your email" />
        </div>
        <div className='w-[28rem] my-10'>
          <Input size="lg" color={(errors.password) ? "red" : "orange"} label="Password" {...register("password", {
            required: true, pattern: {
              value: /^[a-zA-Z0-9]{8,}/,
              message: "Password must be 8 characters or more."
            }
          })} />
          <p className="text-red-600 text-xs">{errors.password?.message}</p>
        </div>
        <div className='w-[28rem] mb-10'>
          <Input size="lg" color={(errors.password2) ? "red" : "orange"} label="Confirm Password" {...register("password2", { required: true, pattern: { value: regx, message: "Must to same a password" } })} />
          <p className="text-red-600 text-xs">{errors.password2?.message}</p>
        </div>
        <Button type="submit" className="mt-6" size='lg' color='orange' fullWidth>
          Continue
        </Button>
      </form>
      <div className='w-[28rem]'>
        <Typography color="black" className="text-sm text-center">
          For further support, you may visit the Help Center or contact our customer service team.
        </Typography>
        <div className='flex flex-col  items-center mt-5'>
          <Image width="100" height="100" className='object-cover object-center' src={bottomLogo} alt='another-logo' />
        </div>
      </div>
    </Card>
  )
}

export default Signup;

