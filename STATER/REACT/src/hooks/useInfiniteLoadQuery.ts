import { useState, useLayoutEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

export const useInfiniteLoadQuery = <T>(
  query: any,
  options: any,
  compileData: any,
  extractData: (e: T[]) => T[] = e => e
) => {
  const [listData, setData] = useState<T[]>([])
  const [pagination, setPagination] = useState({ pageNumber: 1, pageSize: 10, total: 10, totalPage: 1 })
  const [loading, setLoading] = useState<boolean>(false)
  const [pageNumber, setPageNumber] = useState(1)

  const { error, refetch } = useQuery<T>(query, {
    ...options,
    variables: {
      ...options.variables,
      pagination: { pageSize: 10, pageNumber }
    }
  })

  const loadMore = (isRefresh?: boolean) => {
    if (pagination.pageNumber > pagination.totalPage && !isRefresh) return
    if (!loading || isRefresh) {
      setLoading(true)
      isRefresh && setData([])
      refetch({
        ...options?.variables,
        pagination: { pageSize: 10, pageNumber: isRefresh ? 1 : pageNumber }
      })
        .then(e => {
          setPageNumber(isRefresh ? 2 : pageNumber + 1)
          setData(isRefresh ? compileData(e.data).data : [...listData, ...compileData(e.data).data])
          setPagination(compileData(e.data).pagination || { pageNumber: 1, pageSize: 10, total: 10, totalPage: 1 })
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    }
  }

  useLayoutEffect(() => {
    loadMore(true)
    // eslint-disable-next-line
  }, [options])

  return {
    data: extractData(listData),
    error,
    loading,
    loadMore,
    hasMore: pagination.pageNumber < pagination.totalPage
  }
}
