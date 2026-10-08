import type { ApiError } from "@/types";

export class AppApiError extends Error {
  statusCode: number;
  code?: string;
  errors?: Record<string, string[]>;

  constructor(message: string, statusCode = 500, code?: string, errors?: Record<string, string[]>) {
    super(message);
    this.name = "AppApiError";
    this.statusCode = statusCode;
    this.code = code;
    this.errors = errors;
  }
}

export function normalizeApiError(error: unknown): ApiError {
  if (error instanceof AppApiError) {
    return {
      message: error.message,
      statusCode: error.statusCode,
      code: error.code,
      errors: error.errors,
    };
  }
  if (error instanceof Error) {
    return { message: error.message };
  }
  return { message: "An unexpected error occurred." };
}
