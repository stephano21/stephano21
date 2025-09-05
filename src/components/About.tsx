import React from 'react'
import { Row, Col, Typography, Card, Avatar, Timeline } from 'antd'
import { UserOutlined, CalendarOutlined, TrophyOutlined, BookOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const About: React.FC = () => {
  const experiences = [
    {
      year: '2023 - Presente',
      title: 'Desarrollador Full Stack',
      company: 'Freelance',
      description: 'Desarrollo de aplicaciones web y móviles usando React, Node.js y tecnologías modernas.'
    },
    {
      year: '2022 - 2023',
      title: 'Desarrollador Frontend',
      company: 'Empresa Tech',
      description: 'Especializado en React, TypeScript y diseño de interfaces de usuario responsivas.'
    },
    {
      year: '2021 - 2022',
      title: 'Desarrollador Junior',
      company: 'Startup',
      description: 'Primeros pasos en el desarrollo web con HTML, CSS, JavaScript y frameworks modernos.'
    }
  ]

  const achievements = [
    {
      icon: <TrophyOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
      title: 'Proyectos Completados',
      number: '50+',
      description: 'Aplicaciones web y móviles exitosas'
    },
    {
      icon: <UserOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
      title: 'Clientes Satisfechos',
      number: '30+',
      description: 'Empresas y emprendedores'
    },
    {
      icon: <BookOutlined style={{ fontSize: '24px', color: '#fa8c16' }} />,
      title: 'Tecnologías Dominadas',
      number: '15+',
      description: 'Lenguajes y frameworks'
    },
    {
      icon: <CalendarOutlined style={{ fontSize: '24px', color: '#eb2f96' }} />,
      title: 'Años de Experiencia',
      number: '3+',
      description: 'En desarrollo de software'
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
              <Paragraph style={{ fontSize: '16px', color: '#666' }}>
                Desarrollador Full Stack apasionado por la tecnología
              </Paragraph>
            </div>
            
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Soy un desarrollador apasionado por crear soluciones innovadoras y eficientes. 
              Con más de 3 años de experiencia en el desarrollo de software, me especializo 
              en tecnologías modernas como React, TypeScript, Node.js y bases de datos.
            </Paragraph>
            
            <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
              Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
              siempre buscando las mejores prácticas y las últimas tendencias en desarrollo. 
              Me encanta aprender nuevas tecnologías y enfrentar desafíos técnicos complejos.
            </Paragraph>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card title="Experiencia Profesional" style={{ height: '100%' }}>
            <Timeline
              items={experiences.map((exp, index) => ({
                color: index === 0 ? '#1890ff' : '#d9d9d9',
                children: (
                  <div>
                    <Title level={5} style={{ margin: '0 0 5px 0', color: '#1890ff' }}>
                      {exp.title}
                    </Title>
                    <Paragraph style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>
                      {exp.company} • {exp.year}
                    </Paragraph>
                    <Paragraph style={{ margin: 0, color: '#666' }}>
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
              style={{ 
                textAlign: 'center',
                height: '100%',
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
              }}
            >
              <div style={{ marginBottom: '15px' }}>
                {achievement.icon}
              </div>
              <Title level={2} style={{ margin: '0 0 10px 0', color: '#1890ff' }}>
                {achievement.number}
              </Title>
              <Title level={5} style={{ margin: '0 0 5px 0' }}>
                {achievement.title}
              </Title>
              <Paragraph style={{ margin: 0, color: '#666', fontSize: '14px' }}>
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

