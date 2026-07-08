'use client'

import { useProducts } from '../../contexts/ProductsContext'
import Category from '../ui/category'
import { SearchBar } from '../ui/SearchBar'
import { TopBanner } from '../ui/TopBananer'
import { ProductCard } from './ProductCard'

export const AllProducts = () => {
  const { products, loading, page, setPage, totalPages, hasNextPage, hasPrevPage, setSearchQuery } =
    useProducts()

  return (
    <div className="pt-20 md:pt-32 mb-12 responsive-mx">
      {/* <TopBanner
        src="/product-banner.png"
        alt="Products"
        title="Products"
        description="Elevate Your Well-being with Pesino Pharma's Premium Pharmaceutical Products - Discover Quality, Efficacy, and Innovation in Every Dose!"
        buttonText="Contact us"
        buttonHref="/Contactus"
      /> */}

      <TopBanner
        src="/product-banner.png"
        alt="Products"
        title="Products"
        description="Elevate Your Well-being with Pesino Pharma's Premium Pharmaceutical Products - Discover Quality, Efficacy, and Innovation in Every Dose!"
        buttonText="Download Product List"
        buttonHref="/productlist.pdf"
        downloadFile={true}
      />

      {/* Search Bar */}
      <div className="flex-between-center md:-mt-5 mt-3">
        <SearchBar placeholder="Search products..." onChange={(val) => setSearchQuery(val)} />
      </div>

      <div className="md:mt-14 mt-7">
        <Category />
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center mt-12 mb-12">
          <p className="text-lg text-gray-500">Loading products...</p>
        </div>
      )}

      {/* Products Grid */}
      {!loading && (
        <>
          {products.length === 0 ? (
            <div className="text-center mt-12 mb-12">
              <p className="text-lg text-gray-500">No products found.</p>
            </div>
          ) : (
            <div className="grid md:mt-16 mt-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
              {products.map((item, index) => (
                <ProductCard
                  key={item.id}
                  item={{
                    name: item.title,
                    strength: item.mg,
                    image: item.image,
                  }}
                />
              ))}
            </div>
          )}

          {/* Simple Pagination UI */}
          <div className="mt-12 md:mt-16 flex items-center justify-center gap-4 text-xs">
            {/* Previous */}
            <button
              onClick={() => setPage(page - 1)}
              disabled={!hasPrevPage}
              className="
      flex items-center gap-2 rounded-full border border-blue px-4 py-1
      transition
      disabled:cursor-not-allowed disabled:opacity-40
    bg-blue hover:text-white
    "
            >
              <span className="text-lg">←</span>
              Previous
            </button>

            {/* Page Info */}
            <div className="rounded-full border border-blue px-4 py-2 font-medium">
              <span className="text-blue">{page}</span>
              <span className="mx-1 text-gray-400">/</span>
              <span className="text-gray-500">{totalPages}</span>
            </div>

            {/* Next */}
            <button
              onClick={() => setPage(page + 1)}
              disabled={!hasNextPage}
              className="
      flex items-center gap-2 rounded-full border border-blue px-4 py-1
      transition
      disabled:cursor-not-allowed disabled:opacity-40
      bg-blue hover:text-white
    "
            >
              Next
              <span className="text-lg">→</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}
