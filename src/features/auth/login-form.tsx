"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginInput } from "@/lib/validation/auth.schema";
import { ROUTES } from "@/lib/constants";
import { Logo } from "@/components/navigation/logo";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (_data: LoginInput) => {
    // TODO: authApi.login(data.email, data.password)
    // On success: redirect to /account or previous page
    await new Promise((r) => setTimeout(r, 500));
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 text-center">
        <Logo className="mx-auto mb-4 inline-block" />
        <h1 className="text-2xl font-bold text-neutral-900">Welcome back</h1>
        <p className="mt-1 text-sm text-neutral-500">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          required
          error={errors.password?.message}
          {...register("password")}
        />
        <div className="flex justify-end">
          <Link href={ROUTES.auth.forgotPassword} className="text-xs text-green-600 hover:text-green-700">
            Forgot password?
          </Link>
        </div>
        <Button type="submit" fullWidth loading={isSubmitting}>
          Sign in
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-neutral-500">
        Don&apos;t have an account?{" "}
        <Link href={ROUTES.auth.register} className="font-medium text-green-600 hover:text-green-700">
          Create one
        </Link>
      </p>
    </div>
  );
}
