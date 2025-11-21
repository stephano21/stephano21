import React from 'react'
import { Row, Col, Typography, Card, Timeline, Tag } from 'antd'
import { BookOutlined, TrophyOutlined, CalendarOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'Complejidad algorítmica con JavaScript',
      duration: '12 Horas',
      date: '30 de octubre 2022',
      type: 'Técnico'
    },
    {
      title: 'Curso básico de Python',
      duration: '16 horas',
      date: '13 de febrero',
      type: 'Programación'
    },
    {
      title: 'Administración GNU/Linux desde cero',
      duration: '80 Horas',
      date: '22 de marzo al 2 de abril',
      type: 'Sistemas'
    },
    {
      title: 'Programación Orientada a Objetos',
      duration: '20 Horas',
      date: '7 de febrero 2022',
      type: 'Programación'
    },
    {
      title: 'Seguridad informática: Informática Forense',
      duration: '80 Horas',
      date: '4 - 15 octubre 2021',
      type: 'Seguridad'
    },
    {
      title: 'React Native: Aplicaciones nativas para iOS y Android',
      duration: 'Curso Online',
      date: '2022',
      type: 'Mobile'
    },
    {
      title: 'Construyendo Web APIs RESTful con ASP.NET Core 6',
      duration: 'Curso Online',
      date: '2023',
      type: 'Backend'
    }
  ]

  const languages = [
    {
      language: 'Español',
      level: 'Nativo',
      color: '#52c41a'
    },
    {
      language: 'Inglés',
      level: 'B1 - Elemental',
      color: '#1890ff'
    }
  ]

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Técnico': '#1890ff',
      'Programación': '#52c41a',
      'Sistemas': '#fa8c16',
      'Seguridad': '#f5222d',
      'Mobile': '#722ed1',
      'Backend': '#13c2c2'
    }
    return colors[type] || '#d9d9d9'
  }

  return (
    <section id="courses" className="portfolio-section" style={{ background: '#f8f9fa' }}>
      <Title level={2}>Cursos y Certificaciones</Title>
      
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={16}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOutlined style={{ color: '#1890ff' }} />
                <span>Cursos Técnicos</span>
              </div>
            }
            style={{ height: '100%' }}
          >
            <Timeline
              items={courses.map((course, index) => ({
                color: '#1890ff',
                children: (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <Title key={index} level={5} style={{ margin: '0 0 8px 0', color: '#1a365d', fontWeight: '600' }}>
                        {course.title}
                      </Title>
                      <Tag color={getTypeColor(course.type)} style={{ marginLeft: '8px' }}>
                        {course.type}
                      </Tag>
                    </div>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '4px' }}>
                      <span style={{ color: '#1890ff', fontWeight: '500' }}>
                        <CalendarOutlined /> {course.date}
                      </span>
                      <span style={{ color: '#52c41a', fontWeight: '500' }}>
                        <TrophyOutlined /> {course.duration}
                      </span>
                    </div>
                  </div>
                )
              }))}
            />
          </Card>
        </Col>
        
        <Col xs={24} lg={8}>
          <Card 
            title={
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <TrophyOutlined style={{ color: '#52c41a' }} />
                <span>Idiomas</span>
              </div>
            }
            style={{ height: '100%' }}
          >
            <div style={{ marginBottom: '24px' }}>
              <Title level={4} style={{ color: '#1a365d', marginBottom: '20px' }}>
                Competencias Lingüísticas
              </Title>
              {languages.map((lang, index) => (
                <div key={index} style={{ 
                  marginBottom: '16px',
                  padding: '16px',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '600', fontSize: '16px', color: '#1a365d' }}>
                      {lang.language}
                    </span>
                    <Tag color={lang.color} style={{ fontWeight: '500' }}>
                      {lang.level}
                    </Tag>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ 
              marginTop: '24px',
              padding: '20px',
              background: 'linear-gradient(135deg, #1890ff 0%, #52c41a 100%)',
              borderRadius: '12px',
              color: 'white',
              textAlign: 'center'
            }}>
              <Title level={5} style={{ color: 'white', marginBottom: '8px' }}>
                Formación Continua
              </Title>
              <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', margin: 0, fontSize: '14px' }}>
                Comprometido con el aprendizaje constante y la actualización tecnológica
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default Courses

