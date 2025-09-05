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
      background: '#001529',
      color: 'white',
      padding: '40px 50px 20px',
      marginTop: '50px'
    }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <div>
            <Text style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: '#1890ff',
              display: 'block',
              marginBottom: '15px'
            }}>
              Stephano21
            </Text>
            <Text style={{ color: '#8c8c8c', fontSize: '16px' }}>
              Desarrollador Full Stack apasionado por crear soluciones innovadoras 
              y eficientes con las últimas tecnologías.
            </Text>
          </div>
        </Col>
        
        <Col xs={24} md={8}>
          <div>
            <Text style={{ 
              fontSize: '18px', 
              fontWeight: 'bold', 
              color: 'white',
              display: 'block',
              marginBottom: '15px'
            }}>
              Enlaces Rápidos
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link 
                href="#about" 
                style={{ color: '#8c8c8c' }}
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
                style={{ color: '#8c8c8c' }}
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
                style={{ color: '#8c8c8c' }}
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
                style={{ color: '#8c8c8c' }}
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
              fontWeight: 'bold', 
              color: 'white',
              display: 'block',
              marginBottom: '15px'
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
                    color: '#8c8c8c',
                    fontSize: '20px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1890ff'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#8c8c8c'
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
        borderTop: '1px solid #303030',
        marginTop: '30px',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <Text style={{ color: '#8c8c8c' }}>
          © {currentYear} Stephano21. Hecho con{' '}
          <HeartOutlined style={{ color: '#ff4d4f' }} />{' '}
          usando React, TypeScript y Ant Design.
        </Text>
      </div>
    </AntFooter>
  )
}

export default Footer

