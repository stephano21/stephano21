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
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      color: 'white',
      padding: '0 50px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Grid de fondo tech */}
      <div className="tech-grid" />
      
      {/* Formas geométricas flotantes */}
      <div className="tech-shape tech-shape-1" />
      <div className="tech-shape tech-shape-2" />
      <div className="tech-shape tech-shape-3" />
      
      {/* Puntos de luz */}
      <div className="tech-dots" />
      <div className="tech-dots" />
      <div className="tech-dots" />
      <div className="tech-dots" />
      
      {/* Patrón de fondo tech */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%), 
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />
      
      <Row justify="center" align="middle" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <Col xs={24} lg={14} style={{ textAlign: 'left' }}>
          <div className="fade-in-up">
            <div style={{ marginBottom: '24px' }}>
              <div className="slide-in-left" style={{ 
                color: 'rgba(99, 102, 241, 0.9)', 
                fontSize: '1.2rem',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                🚀 Desarrollador Tech
              </div>
            </div>
            
            <Title level={1} className="fade-in-up" style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: '5rem',
              marginBottom: '32px',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}>
              Stephano Chang
            </Title>
            
            <Title level={2} className="slide-in-right" style={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              fontSize: '2.5rem',
              marginBottom: '40px',
              fontWeight: '500',
              letterSpacing: '-0.02em'
            }}>
              <span style={{ 
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Ingeniero en Ciencias de la Computación
              </span>
            </Title>
            
            <Paragraph className="fade-in-up" style={{ 
              fontSize: '1.4rem', 
              color: 'rgba(255, 255, 255, 0.85)',
              marginBottom: '56px',
              maxWidth: '700px',
              lineHeight: '1.8',
              fontWeight: '400',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              🎯 <strong>Desarrollador Full Stack</strong><br/>
              Especializado en resolver problemas y en la integración de sistemas de terceros. 
              Creo soluciones eficientes y escalables con <span style={{ color: '#06b6d4', fontWeight: '600' }}>C#</span>, 
              <span style={{ color: '#8b5cf6', fontWeight: '600' }}> ASP.NET Core</span> y 
              <span style={{ color: '#10b981', fontWeight: '600' }}> Vue.js</span>.
            </Paragraph>
            
            <Space size="large" wrap className="fade-in-up">
              <Button 
                type="primary" 
                size="large"
                icon={<DownloadOutlined />}
                className="glow"
                style={{ 
                  height: '64px',
                  padding: '0 48px',
                  fontSize: '18px',
                  fontWeight: '600',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  border: 'none',
                  boxShadow: '0 8px 32px rgba(99, 102, 241, 0.4)'
                }}
              >
                📄 Descargar CV
              </Button>
              
              <Button 
                size="large"
                icon={<GithubOutlined />}
                className="pulse"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  height: '64px',
                  padding: '0 40px',
                  fontSize: '18px',
                  fontWeight: '600',
                  borderRadius: '16px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
                href="https://github.com/stephano21"
                target="_blank"
              >
                💻 GitHub
              </Button>
              
              <Button 
                size="large"
                icon={<LinkedinOutlined />}
                className="pulse"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  height: '64px',
                  padding: '0 40px',
                  fontSize: '18px',
                  fontWeight: '600',
                  borderRadius: '16px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
                href="https://www.linkedin.com/in/stephano-chang-754050214/"
                target="_blank"
              >
                💼 LinkedIn
              </Button>
            </Space>
          </div>
        </Col>
        
        <Col xs={24} lg={10} style={{ textAlign: 'center', marginTop: '80px' }}>
          <div className="float" style={{
            width: '400px',
            height: '400px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            backdropFilter: 'blur(30px)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 25px 50px rgba(99, 102, 241, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Efecto de brillo interno */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.1), transparent)',
              animation: 'pulse 4s ease-in-out infinite'
            }} />
            
            <div style={{
              fontSize: '160px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))',
              position: 'relative',
              zIndex: 1
            }}>
              🚀
            </div>
          </div>
        </Col>
      </Row>
      
      <div className="pulse" style={{
        position: 'absolute',
        bottom: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
        zIndex: 1
      }} onClick={() => scrollToSection('about')}>
        <div style={{
          width: '32px',
          height: '32px',
          border: '3px solid rgba(99, 102, 241, 0.8)',
          borderTop: 'none',
          borderLeft: 'none',
          transform: 'rotate(45deg)',
          borderRadius: '2px',
          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
          animation: 'bounce 2s infinite'
        }}></div>
      </div>
      
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0) rotate(45deg);
          }
          40% {
            transform: translateX(-50%) translateY(-8px) rotate(45deg);
          }
          60% {
            transform: translateX(-50%) translateY(-4px) rotate(45deg);
          }
        }
        
        @media (max-width: 768px) {
          .ant-typography h1 {
            font-size: 2.75rem !important;
          }
          .ant-typography h2 {
            font-size: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero

