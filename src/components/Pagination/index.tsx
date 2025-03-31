import ReactPaginate from 'react-paginate'
import { useSearch } from '../SearchContext'
import { useFetchGithubUsers } from '../../hooks/useFetchGithubUsers'

type PaginationProps = {
  pageCount: number
  onPageChange: () => void
}

export const Pagination = ({ pageCount, onPageChange }: PaginationProps) => {
  const { setPage } = useSearch()
  const { hasNextPage, hasPrevPage } = useFetchGithubUsers()

  return (
    <ReactPaginate
      previousLabel={'←'}
      nextLabel={'→'}
      prevRel={hasPrevPage ? 'prev' : null}
      nextRel={hasNextPage ? 'next' : null}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={async (selectedItem) => {
        await setPage(selectedItem.selected + 1)
        onPageChange()
      }}
      containerClassName="flex items-center justify-center space-x-2 mt-4"
      pageClassName="px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition"
      pageLinkClassName="w-full h-full block text-center"
      activeClassName="bg-black/80 text-white"
      previousClassName="px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition"
      nextClassName="px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded-md hover:bg-gray-200 transition"
      breakClassName="px-2 py-1 sm:px-3 sm:py-2 border border-gray-300 rounded-md"
      disabledClassName="px-2 py-1 sm:px-3 sm:py-2 bg-gray-300 text-gray-500 cursor-not-allowed"
    />
  )
}
