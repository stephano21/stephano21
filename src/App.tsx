import React from 'react'
import { Layout } from 'antd'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer'

const { Content } = Layout

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Courses />
        <Contact />
      </Content>
      <Footer />
    </Layout>
  )
}

export default App


