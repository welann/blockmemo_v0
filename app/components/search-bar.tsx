import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <Input
      type="search"
      placeholder="Search documents..."
      className="w-64 bg-gray-800 border-gray-700 text-white"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
