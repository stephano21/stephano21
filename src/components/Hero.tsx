import React from 'react'
import { Row, Col, Typography, Button, Space } from 'antd'
import { DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '0 50px'
    }}>
      <Row justify="center" align="middle" style={{ width: '100%' }}>
        <Col xs={24} md={12} style={{ textAlign: 'center' }}>
          <div className="fade-in-up">
            <Title level={1} style={{ 
              color: 'white', 
              fontSize: '3.5rem',
              marginBottom: '20px',
              fontWeight: 'bold'
            }}>
              ¡Hola! Soy Stephano21
            </Title>
            
            <Title level={2} style={{ 
              color: '#f0f0f0', 
              fontSize: '2rem',
              marginBottom: '30px',
              fontWeight: '300'
            }}>
              Desarrollador Full Stack
            </Title>
            
            <Paragraph style={{ 
              fontSize: '1.2rem', 
              color: '#e0e0e0',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px'
            }}>
              Apasionado por crear soluciones innovadoras con las últimas tecnologías. 
              Especializado en React, TypeScript, Node.js y más.
            </Paragraph>
            
            <Space size="large" wrap>
              <Button 
                type="primary" 
                size="large"
                icon={<DownloadOutlined />}
                style={{ 
                  background: '#1890ff',
                  borderColor: '#1890ff',
                  height: '50px',
                  padding: '0 30px',
                  fontSize: '16px'
                }}
              >
                Descargar CV
              </Button>
              
              <Button 
                size="large"
                icon={<GithubOutlined />}
                style={{ 
                  background: 'transparent',
                  borderColor: 'white',
                  color: 'white',
                  height: '50px',
                  padding: '0 30px',
                  fontSize: '16px'
                }}
                href="https://github.com/stephano21"
                target="_blank"
              >
                GitHub
              </Button>
              
              <Button 
                size="large"
                icon={<LinkedinOutlined />}
                style={{ 
                  background: 'transparent',
                  borderColor: 'white',
                  color: 'white',
                  height: '50px',
                  padding: '0 30px',
                  fontSize: '16px'
                }}
              >
                LinkedIn
              </Button>
            </Space>
          </div>
        </Col>
        
        <Col xs={24} md={12} style={{ textAlign: 'center', marginTop: '50px' }}>
          <div style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{
              fontSize: '120px',
              color: 'white'
            }}>
              👨‍💻
            </div>
          </div>
        </Col>
      </Row>
      
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer'
      }} onClick={() => scrollToSection('about')}>
        <div style={{
          width: '30px',
          height: '30px',
          border: '2px solid white',
          borderTop: 'none',
          borderLeft: 'none',
          transform: 'rotate(45deg)',
          animation: 'bounce 2s infinite'
        }}></div>
      </div>
      
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0) rotate(45deg);
          }
          40% {
            transform: translateX(-50%) translateY(-10px) rotate(45deg);
          }
          60% {
            transform: translateX(-50%) translateY(-5px) rotate(45deg);
          }
        }
        
        @media (max-width: 768px) {
          .ant-typography h1 {
            font-size: 2.5rem !important;
          }
          .ant-typography h2 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero

