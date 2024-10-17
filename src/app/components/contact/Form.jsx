"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input
        type="text"
        placeholder="Name"
        {...register("Name", { required: true, maxLength: 80 })}
        className="custom-input custom-bg"
      />
      <input
        type="email"
        placeholder="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className="custom-input custom-bg"
      />
      <textarea
        placeholder="message"
        {...register("message", { required: true, max: 256, min: 50 })}
        className="custom-input custom-bg"
      />

      <input value="Cast your message"
        className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
        hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50
        cursor-pointer capitalize"
        type="submit"
      />
    </form>
  );
}
