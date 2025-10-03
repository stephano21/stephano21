import React from 'react'
import { Row, Col, Typography, Card, Avatar, Timeline } from 'antd'
import { UserOutlined, CalendarOutlined, TrophyOutlined, BookOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const About: React.FC = () => {
  const experiences = [
    {
      year: '2023 - Presente',
      title: '🚀 Senior Full Stack Developer',
      company: 'Tech Startup & Freelance',
      description: 'Liderando la revolución digital con tecnologías de vanguardia. Especializado en React, Node.js y arquitecturas cloud modernas.'
    },
    {
      year: '2022 - 2023',
      title: '⚡ Lead Frontend Developer',
      company: 'InnovateTech Solutions',
      description: 'Transformando ideas en experiencias digitales increíbles. Experto en performance, UX/UI y metodologías ágiles.'
    },
    {
      year: '2021 - 2022',
      title: '💻 Full Stack Developer',
      company: 'CodeCraft Studio',
      description: 'Desarrollando soluciones end-to-end escalables. Pasión por el código limpio y las mejores prácticas de desarrollo.'
    }
  ]

  const achievements = [
    {
      icon: <TrophyOutlined style={{ fontSize: '32px', color: '#6366f1' }} />,
      title: 'Proyectos Tech',
      number: '50+',
      description: 'Apps y sistemas innovadores'
    },
    {
      icon: <UserOutlined style={{ fontSize: '32px', color: '#8b5cf6' }} />,
      title: 'Clientes Satisfechos',
      number: '30+',
      description: 'Startups y empresas tech'
    },
    {
      icon: <BookOutlined style={{ fontSize: '32px', color: '#06b6d4' }} />,
      title: 'Tecnologías',
      number: '25+',
      description: 'Stack moderno completo'
    },
    {
      icon: <CalendarOutlined style={{ fontSize: '32px', color: '#10b981' }} />,
      title: 'Años Codeando',
      number: '4+',
      description: 'Experiencia en desarrollo'
    }
  ]

  return (
    <section id="about" className="portfolio-section">
      <Title level={2}>Sobre Mí</Title>
      
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} lg={12}>
          <Card style={{ height: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <Avatar 
                size={120} 
                icon={<UserOutlined />} 
                style={{ 
                  background: '#1890ff',
                  marginBottom: '20px'
                }}
              />
              <Title level={3}>Stephano21</Title>
              <Paragraph style={{ fontSize: '20px', color: '#6366f1', fontWeight: '600' }}>
                🚀 Tech Developer & Innovator
              </Paragraph>
            </div>
            
            <Paragraph style={{ fontSize: '20px', lineHeight: '1.8', color: '#6b7280', fontWeight: '400' }}>
              🎯 <strong>Desarrollador apasionado</strong> por crear experiencias digitales que marquen la diferencia. 
              Especializado en tecnologías modernas como React, Node.js y Cloud Computing, 
              siempre buscando la próxima innovación tecnológica.
            </Paragraph>
            
            <Paragraph style={{ fontSize: '20px', lineHeight: '1.8', color: '#6b7280', fontWeight: '400' }}>
              💡 Mi misión es <span style={{ color: '#6366f1', fontWeight: '600' }}>transformar ideas en realidad</span> 
              a través de código elegante, arquitecturas escalables y soluciones que realmente 
              impacten a los usuarios finales.
            </Paragraph>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
                      <Card 
              title={
                <Title level={4} style={{ margin: 0, color: '#6366f1', fontWeight: '700' }}>
                  🛣️ Mi Journey Tech
                </Title>
              } 
              style={{ height: '100%' }}
            >
            <Timeline
              items={experiences.map((exp, index) => ({
                color: index === 0 ? '#6366f1' : '#e5e7eb',
                children: (
                  <div>
                    <Title level={5} style={{ margin: '0 0 8px 0', color: '#6366f1', fontWeight: '700' }}>
                      {exp.title}
                    </Title>
                    <Paragraph style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#8b5cf6' }}>
                      {exp.company} • {exp.year}
                    </Paragraph>
                    <Paragraph style={{ margin: 0, color: '#6b7280', lineHeight: '1.6', fontSize: '16px' }}>
                      {exp.description}
                    </Paragraph>
                  </div>
                )
              }))}
            />
          </Card>
        </Col>
      </Row>
      
      <Row gutter={[16, 16]} style={{ marginTop: '50px' }}>
        {achievements.map((achievement, index) => (
          <Col xs={12} sm={6} key={index}>
            <Card 
              hoverable
              className="pulse"
              style={{ 
                textAlign: 'center',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                border: '2px solid rgba(99, 102, 241, 0.1)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)'
              }}
            >
              <div style={{ marginBottom: '24px' }}>
                {achievement.icon}
              </div>
              <Title level={2} style={{ 
                margin: '0 0 16px 0', 
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '800',
                fontSize: '3rem'
              }}>
                {achievement.number}
              </Title>
              <Title level={5} style={{ margin: '0 0 12px 0', color: '#6366f1', fontWeight: '700' }}>
                {achievement.title}
              </Title>
              <Paragraph style={{ margin: 0, color: '#6b7280', fontSize: '16px', fontWeight: '500' }}>
                {achievement.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default About

