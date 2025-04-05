// app/providers.tsx
'use client'

import { Provider } from 'jotai'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRef, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
        children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
        const queryClientRef = useRef<QueryClient | null>(null)

        if (!queryClientRef.current) {
                queryClientRef.current = new QueryClient({
                        defaultOptions: {
                                queries: {
                                        staleTime: 60 * 1000, // 1 minute
                                        refetchOnWindowFocus: false,
                                },
                        },
                })
        }

        return (
                <Provider>
                        <QueryClientProvider client={queryClientRef.current}>
                                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                                        {children}
                                </ThemeProvider>
                        </QueryClientProvider>
                </Provider>
        )
}