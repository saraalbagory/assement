import React from 'react'
import Image from 'next/image'

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src="/spinner.svg" alt="loading" width={100} height={100} />
    </div>
  )
}
