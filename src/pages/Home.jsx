import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import WhatIBuild from '../components/WhatIBuild/WhatIBuild'
import Stack from '../components/Stack/Stack'
import Projects from '../components/Projects/Projects'
import Mindset from '../components/Mindset/Mindset'
import Journey from '../components/Journey/Journey'
import LinkedIn from '../components/LinkedIn/LinkedIn'
import FinalStatement from '../components/FinalStatement/FinalStatement'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhatIBuild />
      <Stack />
      <Projects />
      <Mindset />
      <Journey />
      <LinkedIn />
      <FinalStatement />
      <Footer />
    </main>
  )
}
