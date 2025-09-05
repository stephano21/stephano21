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
      title: 'Frontend',
      icon: <GlobalOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Ant Design', level: 80 },
        { name: 'Tailwind CSS', level: 75 }
      ]
    },
    {
      title: 'Backend',
      icon: <CodeOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Django', level: 70 },
        { name: 'C#', level: 70 },
        { name: '.NET Core', level: 65 }
      ]
    },
    {
      title: 'Base de Datos',
      icon: <DatabaseOutlined style={{ fontSize: '32px', color: '#fa8c16' }} />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Redis', level: 65 },
        { name: 'Firebase', level: 70 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: <CloudOutlined style={{ fontSize: '32px', color: '#eb2f96' }} />,
      skills: [
        { name: 'AWS', level: 70 },
        { name: 'Docker', level: 75 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 65 },
        { name: 'Linux', level: 70 }
      ]
    },
    {
      title: 'Mobile',
      icon: <MobileOutlined style={{ fontSize: '32px', color: '#722ed1' }} />,
      skills: [
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 60 },
        { name: 'iOS Development', level: 55 },
        { name: 'Android Development', level: 60 }
      ]
    },
    {
      title: 'Herramientas',
      icon: <ToolOutlined style={{ fontSize: '32px', color: '#13c2c2' }} />,
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Postman', level: 80 },
        { name: 'Jest', level: 75 },
        { name: 'Webpack', level: 65 }
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
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                {category.icon}
                <Title level={4} style={{ margin: '10px 0 0 0' }}>
                  {category.title}
                </Title>
              </div>
              
              <div style={{ marginTop: '20px' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} style={{ marginBottom: '15px' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      marginBottom: '5px' 
                    }}>
                      <span style={{ fontWeight: '500' }}>{skill.name}</span>
                      <span style={{ color: '#1890ff' }}>{skill.level}%</span>
                    </div>
                    <Progress 
                      percent={skill.level} 
                      size="small"
                      strokeColor={{
                        '0%': '#1890ff',
                        '100%': '#52c41a',
                      }}
                      showInfo={false}
                    />
                  </div>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      
      <div style={{ 
        marginTop: '50px', 
        textAlign: 'center',
        padding: '30px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        color: 'white'
      }}>
        <Title level={3} style={{ color: 'white', marginBottom: '15px' }}>
          ¿Interesado en trabajar juntos?
        </Title>
        <p style={{ fontSize: '16px', margin: 0 }}>
          Siempre estoy abierto a nuevas oportunidades y proyectos emocionantes. 
          ¡No dudes en contactarme!
        </p>
      </div>
    </section>
  )
}

export default Skills

