import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import {
//     useQuery,
//     useMutation,
//     useQueryClient,
//     QueryClient,
//     QueryClientProvider,
// } from '@tanstack/react-query'
import RecoilRootProvider from './recoilRootProvider'
import StyledComponentsRegistry from '../shared/lib/styleRegistry'
import Header from '@/widgets/Header'
import Footer from '@/widgets/Footer'
import Token from '@/widgets/Token'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WE-NMIXX',
  description: 'NMIXX Fan Community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const queryClient = new QueryClient({
  //     defaultOptions:{
  //         queries:{
  //             staleTime:1000*60,
  //             retry:1,
  //         },
  //         mutations:{
  //             retry:1
  //         }
  //     }
  // });
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* <QueryClientProvider client={queryClient}> */}
        <RecoilRootProvider>
          <StyledComponentsRegistry>
            <Header />
            {children}
            <Footer />
            <Token />
          </StyledComponentsRegistry>
        </RecoilRootProvider>
        {/* </QueryClientProvider> */}
      </body>
    </html>
  )
}
