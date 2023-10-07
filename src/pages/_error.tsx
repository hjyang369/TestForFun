// import * as React from 'react'
import { GetServerSideProps } from 'next'

interface IError {
  statusCode: number
}

const Error: React.FC<IError> = ({ statusCode }): JSX.Element => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const statusCode = res.statusCode

  return {
    props: {
      statusCode,
    },
  }
}

export default Error
