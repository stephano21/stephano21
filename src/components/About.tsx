import React from 'react'
import { Row, Col, Typography, Card, Avatar, Timeline } from 'antd'
import { UserOutlined, CalendarOutlined, TrophyOutlined, BookOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const About: React.FC = () => {
  const experiences = [
    {
      year: '2023 - Presente',
      title: '🚀 Desarrollador Backend',
      company: 'Apptelink S.A',
      description: 'Desarrollo e implementación de sistemas WMS (Gestión de Inventarios) y TMS (Gestión del Transporte). Integración con Equifax para scoring crediticio y optimización de pantallas dinámicas con Vue.js.'
    },
    {
      year: '2023',
      title: '⚡ Pasante',
      company: 'Apptelink S.A',
      description: 'Desarrollo Web MVC, APIs REST con ASP.NET Core, LINQ, EF Core y SQL Server. Mantenimiento de sistemas en producción y desarrollo UI con Semantic, jQuery, Blazor y Vue.js.'
    },
    {
      year: '2022',
      title: '💻 Pasante',
      company: 'Coorporación De La Tripulacion De La Armada',
      description: 'Análisis del código fuente y manejo de formularios con jQuery. Experiencia en desarrollo web y mantenimiento de sistemas.'
    },
    {
      year: '2022',
      title: '🔧 Pasante',
      company: 'Ministerio de Agricultura, Ganadería, Acuacultura y Pesca (MAGAP)',
      description: 'Mantenimiento de computadoras, formateo y actualización de Windows. Trabajo con sistemas ZKTECO.'
    }
  ]

  const achievements = [
    {
      icon: <TrophyOutlined style={{ fontSize: '32px', color: '#6366f1' }} />,
      title: 'Sistemas Desarrollados',
      number: 'WMS/TMS',
      description: 'Gestión de inventarios y transporte'
    },
    {
      icon: <UserOutlined style={{ fontSize: '32px', color: '#8b5cf6' }} />,
      title: 'Experiencia',
      number: '2+',
      description: 'Años en Apptelink S.A'
    },
    {
      icon: <BookOutlined style={{ fontSize: '32px', color: '#06b6d4' }} />,
      title: 'Tecnologías',
      number: '15+',
      description: 'C#, Vue.js, ASP.NET Core'
    },
    {
      icon: <CalendarOutlined style={{ fontSize: '32px', color: '#10b981' }} />,
      title: 'Formación',
      number: '2019-2024',
      description: 'Universidad Agraria del Ecuador'
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
              <Title level={3}>Stephano Chang</Title>
              <Paragraph style={{ fontSize: '20px', color: '#6366f1', fontWeight: '600' }}>
                🚀 Tech Developer & Innovator
              </Paragraph>
            </div>
            
            <Paragraph style={{ fontSize: '20px', lineHeight: '1.8', color: '#6b7280', fontWeight: '400' }}>
              🎯 <strong>Desarrollador Full Stack</strong> enfocado en resolver problemas y en la integración de sistemas de terceros. 
              Me especializo en crear soluciones eficientes y escalables, brindando soporte técnico de calidad.
            </Paragraph>
            
            <Paragraph style={{ fontSize: '20px', lineHeight: '1.8', color: '#6b7280', fontWeight: '400' }}>
              💡 Comprometido con mi <span style={{ color: '#6366f1', fontWeight: '600' }}>desarrollo profesional</span>, 
              soy autodidacta y busco mejorar constantemente mis habilidades en tecnologías como 
              C#, ASP.NET Core, Vue.js y sistemas de gestión empresarial.
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

