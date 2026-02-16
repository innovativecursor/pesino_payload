import { useState } from 'react'

export const Pagination = ({ totalPages, currentPage, onPageChange }: any) => {
  return (
    <div className="flex items-center justify-between mt-10">
      <div className="md:block hidden">.</div>
      <div className="flex items-center space-x-3">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-2 py-1 text-sm rounded ${
              currentPage === page ? 'bg-gray-800 text-white' : 'text-gray-700 hover:text-black'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="flex items-center  md:space-x-4 space-x-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="md:w-28 w-20 md:h-9 h-7 md:text-sm text-[10px] rounded-full border border-gray-500 text-black disabled:opacity-50 bg-[#F44F4]"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="md:w-28 w-20 md:h-9 h-7 md:text-sm text-[10px] rounded-full bg-[#FCD33D] text-black font-medium disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}
