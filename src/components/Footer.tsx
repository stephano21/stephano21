import React from 'react'
import { Layout, Typography, Row, Col, Space } from 'antd'
import { GithubOutlined, LinkedinOutlined, TwitterOutlined, HeartOutlined } from '@ant-design/icons'

const { Footer: AntFooter } = Layout
const { Text, Link } = Typography

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <GithubOutlined />,
      href: 'https://github.com/stephano21',
      label: 'GitHub'
    },
    {
      icon: <LinkedinOutlined />,
      href: 'https://linkedin.com/in/stephano21',
      label: 'LinkedIn'
    },
    {
      icon: <TwitterOutlined />,
      href: 'https://twitter.com/stephano21',
      label: 'Twitter'
    }
  ]

  return (
    <AntFooter style={{ 
      background: '#1a202c',
      color: 'white',
      padding: '50px 50px 24px',
      marginTop: '60px',
      borderTop: '1px solid #2d3748'
    }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <div>
            <Text style={{ 
              fontSize: '28px', 
              fontWeight: '700', 
              color: '#3182ce',
              display: 'block',
              marginBottom: '20px',
              letterSpacing: '-0.025em'
            }}>
              Stephano21
            </Text>
            <Text style={{ color: '#a0aec0', fontSize: '16px', lineHeight: '1.6' }}>
              Especialista en desarrollo empresarial, transformando ideas estratégicas 
              en soluciones tecnológicas de alto impacto para organizaciones líderes.
            </Text>
          </div>
        </Col>
        
        <Col xs={24} md={8}>
          <div>
            <Text style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: 'white',
              display: 'block',
              marginBottom: '20px'
            }}>
              Enlaces Rápidos
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link 
                href="#about" 
                style={{ color: '#a0aec0', fontSize: '15px' }}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('about')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Sobre Mí
              </Link>
              <Link 
                href="#skills" 
                style={{ color: '#a0aec0', fontSize: '15px' }}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('skills')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Habilidades
              </Link>
              <Link 
                href="#projects" 
                style={{ color: '#a0aec0', fontSize: '15px' }}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('projects')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Proyectos
              </Link>
              <Link 
                href="#contact" 
                style={{ color: '#a0aec0', fontSize: '15px' }}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Contacto
              </Link>
            </div>
          </div>
        </Col>
        
        <Col xs={24} md={8}>
          <div>
            <Text style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: 'white',
              display: 'block',
              marginBottom: '20px'
            }}>
              Redes Sociales
            </Text>
            <Space size="large">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  style={{ 
                    color: '#a0aec0',
                    fontSize: '22px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#3182ce'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#a0aec0'
                  }}
                >
                  {social.icon}
                </Link>
              ))}
            </Space>
          </div>
        </Col>
      </Row>
      
      <div style={{ 
        borderTop: '1px solid #2d3748',
        marginTop: '40px',
        paddingTop: '24px',
        textAlign: 'center'
      }}>
        <Text style={{ color: '#a0aec0', fontSize: '15px' }}>
          © {currentYear} Stephano21. Desarrollado con{' '}
          <HeartOutlined style={{ color: '#3182ce' }} />{' '}
          usando React, TypeScript y Ant Design.
        </Text>
      </div>
    </AntFooter>
  )
}

export default Footer

