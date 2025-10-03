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
      title: 'Frontend Development',
      icon: <GlobalOutlined style={{ fontSize: '36px', color: '#1a365d' }} />,
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript ES6+', level: 95 },
        { name: 'HTML5 / CSS3', level: 98 },
        { name: 'Ant Design', level: 85 },
        { name: 'Tailwind CSS', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <CodeOutlined style={{ fontSize: '36px', color: '#2d3748' }} />,
      skills: [
        { name: 'Node.js & Express', level: 90 },
        { name: 'Python & Django', level: 85 },
        { name: 'C# & .NET Core', level: 80 },
        { name: 'RESTful APIs', level: 95 },
        { name: 'GraphQL', level: 75 },
        { name: 'Microservices', level: 80 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: <DatabaseOutlined style={{ fontSize: '36px', color: '#3182ce' }} />,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'MySQL', level: 80 },
        { name: 'Firebase', level: 70 },
        { name: 'Data Modeling', level: 85 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <CloudOutlined style={{ fontSize: '36px', color: '#4a5568' }} />,
      skills: [
        { name: 'AWS Services', level: 80 },
        { name: 'Docker & Kubernetes', level: 85 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Git & GitHub', level: 95 },
        { name: 'Linux Administration', level: 75 },
        { name: 'Monitoring & Logging', level: 70 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: <MobileOutlined style={{ fontSize: '36px', color: '#718096' }} />,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 65 },
        { name: 'Android Development', level: 70 },
        { name: 'Cross-platform', level: 85 }
      ]
    },
    {
      title: 'Tools & Methodologies',
      icon: <ToolOutlined style={{ fontSize: '36px', color: '#a0aec0' }} />,
      skills: [
        { name: 'VS Code & IDEs', level: 98 },
        { name: 'Figma & Design', level: 75 },
        { name: 'Testing (Jest, Cypress)', level: 80 },
        { name: 'Agile & Scrum', level: 90 },
        { name: 'Project Management', level: 85 }
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

