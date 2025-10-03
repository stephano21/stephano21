import React from 'react'
import { Row, Col, Typography, Card, Button, Tag, Space } from 'antd'
import { GithubOutlined, EyeOutlined, LinkOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { Meta } = Card

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con React, Node.js y MongoDB. Incluye autenticación, pagos, gestión de inventario y panel de administración.',
      image: '🛒',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/stephano21/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con funcionalidades avanzadas como drag & drop, filtros, colaboración en tiempo real y notificaciones.',
      image: '📋',
      technologies: ['React', 'Redux', 'Socket.io', 'Express', 'PostgreSQL'],
      githubUrl: 'https://github.com/stephano21/task-manager',
      liveUrl: 'https://taskmanager-demo.com',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard meteorológico con visualizaciones interactivas, pronósticos extendidos y alertas personalizadas usando APIs meteorológicas.',
      image: '🌤️',
      technologies: ['React', 'D3.js', 'Chart.js', 'OpenWeather API'],
      githubUrl: 'https://github.com/stephano21/weather-dashboard',
      liveUrl: 'https://weather-demo.com',
      featured: false
    },
    {
      title: 'Social Media Analytics',
      description: 'Herramienta de análisis de redes sociales con métricas en tiempo real, reportes personalizados y dashboard interactivo.',
      image: '📊',
      technologies: ['React', 'Python', 'Django', 'Redis', 'AWS'],
      githubUrl: 'https://github.com/stephano21/social-analytics',
      liveUrl: 'https://analytics-demo.com',
      featured: true
    },
    {
      title: 'Mobile Banking App',
      description: 'Aplicación móvil de banca con React Native, incluyendo transferencias, pagos, historial de transacciones y autenticación biométrica.',
      image: '🏦',
      technologies: ['React Native', 'TypeScript', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/stephano21/mobile-banking',
      liveUrl: 'https://banking-demo.com',
      featured: false
    },
    {
      title: 'AI Chatbot Platform',
      description: 'Plataforma de chatbots con IA integrada, soporte multiidioma, análisis de sentimientos y integración con múltiples canales.',
      image: '🤖',
      technologies: ['React', 'Python', 'TensorFlow', 'FastAPI', 'Docker'],
      githubUrl: 'https://github.com/stephano21/ai-chatbot',
      liveUrl: 'https://chatbot-demo.com',
      featured: true
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="portfolio-section">
      <Title level={2}>Proyectos Destacados</Title>
      
      {/* Proyectos destacados */}
      <Row gutter={[24, 24]} style={{ marginBottom: '50px' }}>
        {featuredProjects.map((project, index) => (
          <Col xs={24} lg={12} key={index}>
            <Card
              hoverable
              className="project-card"
              cover={
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '80px'
                }}>
                  {project.image}
                </div>
              }
              actions={[
                <Button 
                  type="text" 
                  icon={<GithubOutlined />} 
                  href={project.githubUrl}
                  target="_blank"
                >
                  Código
                </Button>,
                <Button 
                  type="text" 
                  icon={<EyeOutlined />} 
                  href={project.liveUrl}
                  target="_blank"
                >
                  Demo
                </Button>
              ]}
              style={{ 
                height: '100%',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Meta
                title={
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {project.title}
                    <Tag color="gold">Destacado</Tag>
                  </div>
                }
                description={
                  <div>
                    <Paragraph style={{ marginBottom: '15px' }}>
                      {project.description}
                    </Paragraph>
                    <Space wrap>
                      {project.technologies.map((tech, techIndex) => (
                        <Tag key={techIndex} color="blue">{tech}</Tag>
                      ))}
                    </Space>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Otros proyectos */}
      <Title level={3} style={{ textAlign: 'center', marginBottom: '30px' }}>
        Otros Proyectos
      </Title>
      
      <Row gutter={[16, 16]}>
        {otherProjects.map((project, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              className="project-card"
              cover={
                <div style={{
                  height: '150px',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '60px'
                }}>
                  {project.image}
                </div>
              }
              actions={[
                <Button 
                  type="text" 
                  icon={<GithubOutlined />} 
                  href={project.githubUrl}
                  target="_blank"
                  size="small"
                >
                  Código
                </Button>,
                <Button 
                  type="text" 
                  icon={<LinkOutlined />} 
                  href={project.liveUrl}
                  target="_blank"
                  size="small"
                >
                  Demo
                </Button>
              ]}
              style={{ 
                height: '100%',
                borderRadius: '8px'
              }}
            >
              <Meta
                title={project.title}
                description={
                  <div>
                    <Paragraph 
                      style={{ 
                        marginBottom: '10px',
                        fontSize: '14px'
                      }}
                      ellipsis={{ rows: 2 }}
                    >
                      {project.description}
                    </Paragraph>
                    <Space wrap size="small">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Tag key={techIndex} color="cyan" style={{ fontSize: '12px' }}>
                          {tech}
                        </Tag>
                      ))}
                      {project.technologies.length > 3 && (
                        <Tag color="default" style={{ fontSize: '12px' }}>
                          +{project.technologies.length - 3}
                        </Tag>
                      )}
                    </Space>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Call to action */}
      <div style={{ 
        marginTop: '50px', 
        textAlign: 'center',
        padding: '40px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        color: 'white'
      }}>
        <Title level={3} style={{ color: 'white', marginBottom: '15px' }}>
          ¿Te gusta lo que ves?
        </Title>
        <Paragraph style={{ color: 'white', fontSize: '16px', marginBottom: '20px' }}>
          Puedes ver más proyectos en mi GitHub o contactarme para discutir tu próximo proyecto.
        </Paragraph>
        <Space>
          <Button 
            type="primary" 
            size="large"
            icon={<GithubOutlined />}
            href="https://github.com/stephano21"
            target="_blank"
            style={{ 
              background: 'white',
              color: '#1890ff',
              borderColor: 'white'
            }}
          >
            Ver en GitHub
          </Button>
          <Button 
            size="large"
            style={{ 
              background: 'transparent',
              borderColor: 'white',
              color: 'white'
            }}
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Contactar
          </Button>
        </Space>
      </div>
    </section>
  )
}

export default Projects


