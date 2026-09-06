'use client'

import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { ACCENTS, WORDMARKS } from './tokens'
import type { Brand } from './tokens'

export type { Brand }
export { ACCENTS, WORDMARKS }

const BrandContext = createContext<Brand>('systems')

export function useBrand() {
  return useContext(BrandContext)
}

export default function BrandProvider({
  brand,
  children,
}: {
  brand: Brand
  children: ReactNode
}) {
  return (
    <BrandContext.Provider value={brand}>
      <div data-brand={brand} style={ACCENTS[brand]}>
        {children}
      </div>
    </BrandContext.Provider>
  )
}
