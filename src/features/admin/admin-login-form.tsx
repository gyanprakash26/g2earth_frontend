"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema, type LoginInput } from "@/lib/validation/auth.schema";

export function AdminLoginForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (_data: LoginInput) => {
    // TODO: adminAuthApi.login(data.email, data.password)
    // Admin auth is separate from customer auth
    await new Promise((r) => setTimeout(r, 500));
  };

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
          <span className="text-lg font-bold text-white">G2</span>
        </div>
        <h1 className="text-2xl font-bold text-white">Admin Login</h1>
        <p className="mt-1 text-sm text-neutral-400">G2Earth Dashboard</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div>
          <Input label="Email" type="email" placeholder="admin@g2earth.com" autoComplete="email" required error={errors.email?.message} className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500" {...register("email")} />
        </div>
        <div>
          <Input label="Password" type="password" placeholder="••••••••" autoComplete="current-password" required error={errors.password?.message} className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500" {...register("password")} />
        </div>
        <Button type="submit" fullWidth loading={isSubmitting}>Sign in to Dashboard</Button>
      </form>
    </div>
  );
}
