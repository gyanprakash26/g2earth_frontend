"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerSchema, type RegisterInput } from "@/lib/validation/auth.schema";
import { ROUTES } from "@/lib/constants";
import { Logo } from "@/components/navigation/logo";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (_data: RegisterInput) => {
    // TODO: authApi.register(data.name, data.email, data.phone, data.password)
    await new Promise((r) => setTimeout(r, 500));
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 text-center">
        <Logo className="mx-auto mb-4 inline-block" />
        <h1 className="text-2xl font-bold text-neutral-900">Create account</h1>
        <p className="mt-1 text-sm text-neutral-500">Join G2Earth today</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <Input label="Full Name" placeholder="Your name" required error={errors.name?.message} {...register("name")} />
        <Input label="Email" type="email" placeholder="you@example.com" autoComplete="email" required error={errors.email?.message} {...register("email")} />
        <Input label="Mobile Number" type="tel" placeholder="10-digit mobile number" required error={errors.phone?.message} {...register("phone")} />
        <Input label="Password" type="password" placeholder="Min. 8 characters" autoComplete="new-password" required error={errors.password?.message} {...register("password")} />
        <Input label="Confirm Password" type="password" placeholder="Repeat password" autoComplete="new-password" required error={errors.confirmPassword?.message} {...register("confirmPassword")} />
        <Button type="submit" fullWidth loading={isSubmitting}>Create account</Button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-500">
        Already have an account?{" "}
        <Link href={ROUTES.auth.login} className="font-medium text-green-600 hover:text-green-700">Sign in</Link>
      </p>
    </div>
  );
}
