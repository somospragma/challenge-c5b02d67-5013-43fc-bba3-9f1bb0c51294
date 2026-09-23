import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import LoadingSpinner from '@shared/components/LoadingSpinner'
import ErrorFallback from '@shared/components/ErrorFallback'

// Lazy loading de features
const CartFeature = lazy(() => import('@features/cart/CartFeature'))

const App = () => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          FallbackComponent={ErrorFallback}
        >
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner fullScreen />}>
              <Routes>
                <Route path="/" element={<CartFeature />} />
                <Route path="/cart" element={<CartFeature />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}

export default App