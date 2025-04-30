import Link from "next/link";
import { Search } from "lucide-react";

const EmptyState = ({ query }: { query: string }) => (
  <div className="w-full flex flex-col items-center justify-center py-20 space-y-4">
    <Search className="w-12 h-12 text-gray-400" />
    <p className="text-gray-600 text-lg">
      No encontramos productos para
      <span className="font-medium text-gray-800"> "{query}"</span>
    </p>
    <Link
      href="/"
      className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Volver al inicio
    </Link>
  </div>
);

export default EmptyState;
