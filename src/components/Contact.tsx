import React, { useState } from 'react'
import { Row, Col, Typography, Form, Input, Button, message, Card, Space } from 'antd'
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, SendOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography
const { TextArea } = Input

const Contact: React.FC = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    setLoading(true)
    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 2000))
      message.success('¡Mensaje enviado correctamente! Te responderé pronto.')
      form.resetFields()
    } catch (error) {
      message.error('Error al enviar el mensaje. Inténtalo de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <MailOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
      title: 'Email',
      value: 'stephano21@email.com',
      link: 'mailto:stephano21@email.com'
    },
    {
      icon: <PhoneOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: '24px', color: '#fa8c16' }} />,
      title: 'Ubicación',
      value: 'Ciudad, País',
      link: null
    }
  ]

  return (
    <section id="contact" className="portfolio-section" style={{ background: '#fafafa' }}>
      <Title level={2}>Contacto</Title>
      
      <Row gutter={[32, 32]} align="top">
        <Col xs={24} lg={12}>
          <Card style={{ height: '100%' }}>
            <Title level={3} style={{ marginBottom: '20px' }}>
              ¡Hablemos!
            </Title>
            <Paragraph style={{ fontSize: '16px', marginBottom: '30px' }}>
              ¿Tienes un proyecto en mente? ¿Necesitas un desarrollador para tu equipo? 
              Me encantaría escuchar sobre tu idea y cómo puedo ayudarte a hacerla realidad.
            </Paragraph>
            
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              size="large"
            >
              <Form.Item
                name="name"
                label="Nombre"
                rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
              >
                <Input placeholder="Tu nombre completo" />
              </Form.Item>
              
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Por favor ingresa tu email' },
                  { type: 'email', message: 'Email no válido' }
                ]}
              >
                <Input placeholder="tu@email.com" />
              </Form.Item>
              
              <Form.Item
                name="subject"
                label="Asunto"
                rules={[{ required: true, message: 'Por favor ingresa el asunto' }]}
              >
                <Input placeholder="¿En qué puedo ayudarte?" />
              </Form.Item>
              
              <Form.Item
                name="message"
                label="Mensaje"
                rules={[{ required: true, message: 'Por favor escribe tu mensaje' }]}
              >
                <TextArea 
                  rows={6} 
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </Form.Item>
              
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading}
                  icon={<SendOutlined />}
                  size="large"
                  style={{ width: '100%' }}
                >
                  Enviar Mensaje
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card style={{ height: '100%' }}>
            <Title level={3} style={{ marginBottom: '30px' }}>
              Información de Contacto
            </Title>
            
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              {contactInfo.map((info, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px',
                  padding: '15px',
                  background: '#f8f9fa',
                  borderRadius: '8px'
                }}>
                  {info.icon}
                  <div>
                    <Title level={5} style={{ margin: '0 0 5px 0' }}>
                      {info.title}
                    </Title>
                    {info.link ? (
                      <a 
                        href={info.link}
                        style={{ 
                          color: '#1890ff', 
                          textDecoration: 'none',
                          fontSize: '16px'
                        }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <Paragraph style={{ margin: 0, fontSize: '16px' }}>
                        {info.value}
                      </Paragraph>
                    )}
                  </div>
                </div>
              ))}
            </Space>
            
            <div style={{ 
              marginTop: '40px',
              padding: '20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '8px',
              color: 'white',
              textAlign: 'center'
            }}>
              <Title level={4} style={{ color: 'white', marginBottom: '10px' }}>
                Tiempo de Respuesta
              </Title>
              <Paragraph style={{ color: 'white', margin: 0 }}>
                Normalmente respondo en menos de 24 horas. 
                ¡No dudes en contactarme!
              </Paragraph>
            </div>
          </Card>
        </Col>
      </Row>
      
      {/* Redes sociales */}
      <div style={{ 
        marginTop: '50px', 
        textAlign: 'center',
        padding: '30px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}>
        <Title level={3} style={{ marginBottom: '20px' }}>
          Conectemos en Redes Sociales
        </Title>
        <Space size="large" wrap>
          <Button 
            type="primary" 
            size="large"
            href="https://github.com/stephano21"
            target="_blank"
            style={{ 
              background: '#333',
              borderColor: '#333',
              height: '50px',
              padding: '0 30px'
            }}
          >
            GitHub
          </Button>
          <Button 
            size="large"
            href="https://linkedin.com/in/stephano21"
            target="_blank"
            style={{ 
              background: '#0077b5',
              borderColor: '#0077b5',
              color: 'white',
              height: '50px',
              padding: '0 30px'
            }}
          >
            LinkedIn
          </Button>
          <Button 
            size="large"
            href="https://twitter.com/stephano21"
            target="_blank"
            style={{ 
              background: '#1da1f2',
              borderColor: '#1da1f2',
              color: 'white',
              height: '50px',
              padding: '0 30px'
            }}
          >
            Twitter
          </Button>
        </Space>
      </div>
    </section>
  )
}

export default Contact

