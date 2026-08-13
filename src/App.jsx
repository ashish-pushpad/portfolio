import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggle} />
      <Home />
    </>
  )
}
