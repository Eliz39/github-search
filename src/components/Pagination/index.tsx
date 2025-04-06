import ReactPaginate from 'react-paginate'
import { useSearchParams } from 'react-router-dom'
import { useFetchGithubUsers } from '../../hooks/useFetchGithubUsers'

type PaginationProps = {
  pageCount: number
}

export const Pagination = ({ pageCount }: PaginationProps) => {
  const { hasNextPage, hasPrevPage } = useFetchGithubUsers()
  const [searchParams, setSearchParams] = useSearchParams('')

  const page = Number(searchParams.get('page')) || 1
  const paramsObj = Object.fromEntries(searchParams.entries())

  return (
    <ReactPaginate
      previousLabel={'←'}
      nextLabel={'→'}
      prevRel={hasPrevPage ? 'prev' : null}
      nextRel={hasNextPage ? 'next' : null}
      breakLabel={'...'}
      initialPage={page - 1}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={(selectedItem) => {
        setSearchParams({
          ...paramsObj,
          page: (selectedItem.selected + 1).toString()
        })
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
