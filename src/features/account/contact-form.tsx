"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/validation/contact.schema";

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (_data: ContactInput) => {
    // TODO: POST /api/v1/contact
    await new Promise((r) => setTimeout(r, 600));
    reset();
  };

  if (isSubmitSuccessful) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="font-semibold text-green-700">Message sent!</p>
        <p className="mt-1 text-sm text-green-600">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <Input label="Name" placeholder="Your name" required error={errors.name?.message} {...register("name")} />
      <Input label="Email" type="email" placeholder="you@example.com" required error={errors.email?.message} {...register("email")} />
      <Input label="Phone" type="tel" placeholder="Optional" error={errors.phone?.message} {...register("phone")} />
      <Input label="Subject" placeholder="How can we help?" required error={errors.subject?.message} {...register("subject")} />
      <Textarea label="Message" placeholder="Describe your query…" required error={errors.message?.message} {...register("message")} />
      <Button type="submit" fullWidth loading={isSubmitting}>Send Message</Button>
    </form>
  );
}
