import React from 'react'
import { Row, Col, Typography, Card, Button, Tag, Space } from 'antd'
import { GithubOutlined, EyeOutlined, LinkOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { Meta } = Card

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sistema WMS (Gestión de Inventarios)',
      description: 'Desarrollo e implementación de sistema WMS para optimizar procesos logísticos y mejorar la trazabilidad de productos. Integración con sistemas de terceros y APIs externas.',
      image: '📦',
      technologies: ['C#', 'ASP.NET Core', 'Vue.js', 'SQL Server', 'EF Core'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Sistema TMS (Gestión del Transporte)',
      description: 'Desarrollo de soluciones TMS para optimizar la cadena de suministro y eficiencia operativa. Optimización de pantallas dinámicas con Vue.js para mejor experiencia del usuario.',
      image: '🚛',
      technologies: ['C#', 'Vue.js', 'LINQ', 'SQL Server', 'REST APIs'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Sistema de Control de Tareas',
      description: 'Diseño e implementación de sistema de control de tareas para técnicos, integrando cálculo de capacity para mejorar la asignación de recursos y productividad.',
      image: '⚙️',
      technologies: ['C#', 'ASP.NET Core', 'Blazor', 'EF Core', 'MySQL'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'Integración Equifax - Scoring Crediticio',
      description: 'Integración de sistemas con Equifax para el cálculo de scoring crediticio, facilitando la aprobación de líneas de crédito a clientes de manera automatizada.',
      image: '💳',
      technologies: ['C#', 'REST APIs', 'JSON', 'SQL Server', 'Web Services'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Aplicación React Native',
      description: 'Desarrollo de aplicaciones móviles nativas para iOS y Android usando React Native, con integración de APIs y funcionalidades cross-platform.',
      image: '📱',
      technologies: ['React Native', 'JavaScript', 'APIs', 'Mobile UI'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      title: 'Sistema Web MVC',
      description: 'Desarrollo de aplicaciones web MVC con arquitectura REST, incluyendo APIs, mantenimiento de sistemas en producción y desarrollo de interfaces de usuario.',
      image: '🌐',
      technologies: ['C#', 'ASP.NET Core', 'MVC', 'jQuery', 'Semantic UI'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
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


