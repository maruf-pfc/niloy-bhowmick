import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="text-center">
        <Loader2 className="mx-auto h-10 w-10 animate-spin text-purple-500" />
        <p className="mt-4 text-gray-400">Loading content...</p>
      </div>
    </div>
  );
}
