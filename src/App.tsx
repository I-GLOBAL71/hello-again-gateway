import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { Toaster } from './components/ui/toaster'

// Pages
import HomePage from './app/[lang]/page'
import EditorPage from './app/[lang]/editor/[templateId]/page'
import AdminPage from './app/[lang]/admin/page'
import PaymentSuccessPage from './app/[lang]/payment/success/page'
import PaymentCancelPage from './app/[lang]/payment/cancel/page'
import PaymentErrorPage from './app/[lang]/payment/error/page'

// Wrapper components to handle params
const HomeWrapper = () => {
  const params = useParams()
  return <HomePage params={{ lang: (params.lang as "en" | "fr") || "fr" }} />
}

const EditorWrapper = () => {
  const params = useParams()
  return <EditorPage params={{ 
    lang: (params.lang as "en" | "fr") || "fr", 
    templateId: params.templateId || "" 
  }} />
}

const AdminWrapper = () => {
  const params = useParams()
  return <AdminPage params={{ lang: (params.lang as "en" | "fr") || "fr" }} />
}

const PaymentSuccessWrapper = () => {
  const params = useParams()
  return <PaymentSuccessPage params={{ lang: (params.lang as "en" | "fr") || "fr" }} />
}

const PaymentCancelWrapper = () => {
  const params = useParams()
  return <PaymentCancelPage params={{ lang: (params.lang as "en" | "fr") || "fr" }} />
}

const PaymentErrorWrapper = () => {
  const params = useParams()
  return <PaymentErrorPage params={{ lang: (params.lang as "en" | "fr") || "fr" }} />
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<HomeWrapper />} />
            <Route path="/:lang" element={<HomeWrapper />} />
            <Route path="/:lang/editor/:templateId" element={<EditorWrapper />} />
            <Route path="/:lang/admin" element={<AdminWrapper />} />
            <Route path="/:lang/payment/success" element={<PaymentSuccessWrapper />} />
            <Route path="/:lang/payment/cancel" element={<PaymentCancelWrapper />} />
            <Route path="/:lang/payment/error" element={<PaymentErrorWrapper />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App