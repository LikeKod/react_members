import Header from './components/Header/Header'
import TeachingSection from './components/TeachingSection'
import ButtonSection from './components/ButtonSection'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabSection'
import FeedbackSection from './components/FeedbackSection'
import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState('main')


  return (
    <>
      <Header />
      <main>
        <IntroSection />

        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <TeachingSection />
            <ButtonSection />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}

      </main>
    </>
  )
}
