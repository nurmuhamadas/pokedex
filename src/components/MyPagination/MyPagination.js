import React, { useState } from 'react'
import './styles.css'
import { Pagination } from 'antd'

export const MyPagination = ({ onChange, total, ...props }) => {
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)

  const handlePaginationChange = (page, pageSize) => {
    let _offset = 0
    if (pageSize === limit) {
      _offset = (page - 1) * pageSize
    }

    setLimit(pageSize)
    setOffset(_offset)
    onChange(pageSize, _offset, page)
  }

  return (
    <Pagination
      className="text-white"
      defaultCurrent={1}
      current={offset / limit + 1}
      size="small"
      showTotal={(t) => `Total: ${t} pokemon`}
      onChange={handlePaginationChange}
      total={total}
      {...props}
    />
  )
}
