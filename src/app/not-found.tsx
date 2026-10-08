import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-bold text-green-600">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-neutral-900">Page not found</h1>
      <p className="mt-2 max-w-md text-neutral-500">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href={ROUTES.home}
          className="rounded-lg bg-green-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Go home
        </Link>
        <Link
          href={ROUTES.shop}
          className="rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
        >
          Browse shop
        </Link>
      </div>
    </div>
  );
}
