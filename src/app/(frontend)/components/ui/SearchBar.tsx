import { Search } from 'lucide-react'

type SearchBarProps = {
  placeholder?: string
  onChange?: (value: string) => void
}

export const SearchBar = ({ placeholder = 'Search', onChange }: SearchBarProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full max-w-md">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder={placeholder}
          aria-label={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          className="
            w-full
            pl-11 pr-4
            py-3
            rounded-lg
            bg-white
            text-sm
            text-gray-700
            placeholder-gray-400
            shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500/30
          "
        />
      </div>
    </div>
  )
}
