import React from 'react'
import { Row, Col, Typography, Card, Progress } from 'antd'
import { 
  CodeOutlined, 
  DatabaseOutlined, 
  CloudOutlined, 
  MobileOutlined,
  ToolOutlined,
  GlobalOutlined
} from '@ant-design/icons'

const { Title } = Typography

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Desarrollo Backend',
      icon: <CodeOutlined style={{ fontSize: '36px', color: '#1a365d' }} />,
      skills: [
        { name: 'C#', level: 85 },
        { name: 'ASP.NET Core 6+', level: 85 },
        { name: 'EF Core', level: 80 },
        { name: 'LINQ', level: 80 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Node.js', level: 60 }
      ]
    },
    {
      title: 'Desarrollo Frontend',
      icon: <GlobalOutlined style={{ fontSize: '36px', color: '#2d3748' }} />,
      skills: [
        { name: 'Vue.js', level: 80 },
        { name: 'JavaScript', level: 80 },
        { name: 'jQuery', level: 60 },
        { name: 'React', level: 60 },
        { name: 'React Native', level: 80 },
        { name: 'CSS', level: 80 }
      ]
    },
    {
      title: 'Bases de Datos',
      icon: <DatabaseOutlined style={{ fontSize: '36px', color: '#3182ce' }} />,
      skills: [
        { name: 'MS SQL Server', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Data Modeling', level: 75 },
        { name: 'Stored Procedures', level: 70 },
        { name: 'Query Optimization', level: 75 }
      ]
    },
    {
      title: 'Herramientas & Control',
      icon: <ToolOutlined style={{ fontSize: '36px', color: '#4a5568' }} />,
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Visual Studio', level: 90 },
        { name: 'Blazor', level: 70 },
        { name: 'Semantic UI', level: 70 },
        { name: 'HTML5', level: 85 },
        { name: 'TypeScript', level: 60 }
      ]
    },
    {
      title: 'Desarrollo Móvil',
      icon: <MobileOutlined style={{ fontSize: '36px', color: '#718096' }} />,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Cross-platform', level: 80 },
        { name: 'Mobile UI/UX', level: 70 },
        { name: 'App Deployment', level: 65 },
        { name: 'Performance Optimization', level: 70 }
      ]
    },
    {
      title: 'Otros Conocimientos',
      icon: <CloudOutlined style={{ fontSize: '36px', color: '#a0aec0' }} />,
      skills: [
        { name: 'PHP', level: 80 },
        { name: 'Python', level: 80 },
        { name: 'Sistemas WMS', level: 85 },
        { name: 'Sistemas TMS', level: 85 },
        { name: 'Integración APIs', level: 90 },
        { name: 'Soporte Técnico', level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="portfolio-section" style={{ background: '#fafafa' }}>
      <Title level={2}>Habilidades Técnicas</Title>
      
      <Row gutter={[24, 24]}>
        {skillCategories.map((category, categoryIndex) => (
          <Col xs={24} sm={12} lg={8} key={categoryIndex}>
            <Card 
              hoverable
              className="skill-card"
              style={{ 
                height: '100%',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                border: '1px solid #e2e8f0',
                background: '#ffffff'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                {category.icon}
                <Title level={4} style={{ margin: '12px 0 0 0', color: '#1a365d', fontWeight: '600' }}>
                  {category.title}
                </Title>
              </div>
              
              <div style={{ marginTop: '24px' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{ marginBottom: '18px' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      marginBottom: '8px',
                      alignItems: 'center'
                    }}>
                      <span style={{ fontWeight: '500', color: '#2d3748', fontSize: '15px' }}>
                        {skill.name}
                      </span>
                      <span style={{ color: '#1a365d', fontWeight: '600', fontSize: '14px' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <Progress 
                      percent={skill.level} 
                      size="small"
                      strokeColor={{
                        '0%': '#1a365d',
                        '100%': '#3182ce',
                      }}
                      showInfo={false}
                      style={{ height: '6px' }}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      
      <div style={{ 
        marginTop: '60px', 
        textAlign: 'center',
        padding: '40px',
        background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
        borderRadius: '16px',
        color: 'white',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
      }}>
        <Title level={3} style={{ color: 'white', marginBottom: '20px', fontWeight: '600' }}>
          ¿Listo para impulsar su próximo proyecto?
        </Title>
        <p style={{ fontSize: '18px', margin: 0, color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6' }}>
          Colaboremos para crear soluciones tecnológicas que transformen su negocio. 
          Contacte conmigo para discutir sus objetivos estratégicos.
        </p>
      </div>
    </section>
  )
}

export default Skills

