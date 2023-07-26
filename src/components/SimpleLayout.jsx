import { Waveform } from '@/components/Waveform'

export function SimpleLayout({ children }) {
  return (
    <main className="relative flex h-full items-center py-36 lg:px-8">
      <Waveform className="absolute left-0 top-0 h-20 w-full" />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-4 sm:px-6 lg:px-0">
        {children}
      </div>
    </main>
  )
}
