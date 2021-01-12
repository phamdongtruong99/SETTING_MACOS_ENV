import React, { useEffect } from 'react'
import { Spin } from 'antd'
import { useApolloClient } from '@apollo/client'
import { useHistory, useLocation } from 'react-router'
import { convertQueryToObject } from 'utils/tools'
import VerifyTokenStyles from './styles'

const VerifyToken = () => {
  const client = useApolloClient()
  const location = useLocation()
  const history = useHistory()

  const token = convertQueryToObject(location.hash.substring(1))?.id_token

  useEffect(() => {
    if (token) {
      localStorage.setItem('sessionToken', token)
      client.resetStore()
      history.push('/')
    }
    // eslint-disable-next-line
  }, [token])
  return (
    <VerifyTokenStyles>
      <Spin />
    </VerifyTokenStyles>
  )
}

export default VerifyToken
