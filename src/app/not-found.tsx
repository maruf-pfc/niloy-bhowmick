// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StepBack } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full">
        <Image
          src="/not-found.jpg" // 🖼️ Replace with your image path
          alt="404 Not Found"
          width={500}
          height={300}
          className="w-full h-auto rounded-2xl object-contain mb-6"
          priority
        />
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Oops! Page not found.
        </h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="outline" size="sm" className="cursor-pointer">
            <StepBack /> Go Back Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
