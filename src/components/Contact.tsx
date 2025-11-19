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
      value: 'stephanochang21@gmail.com',
      link: 'mailto:stephanochang21@gmail.com'
    },
    {
      icon: <PhoneOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
      title: 'Teléfono',
      value: 'Cel: 0963359123',
      link: 'tel:+593963359123'
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: '24px', color: '#fa8c16' }} />,
      title: 'Ubicación',
      value: 'Guayaquil, Ecuador',
      link: null
    }
  ]

  return (
    <section id="contact" className="portfolio-section" style={{ background: '#fafafa' }}>
      <Title level={2}>Contacto</Title>
      
      <Row gutter={[32, 32]} align="top">
        <Col xs={24} lg={12}>
          <Card style={{ height: '100%' }}>
            <Title level={3} style={{ marginBottom: '24px', color: '#1a365d', fontWeight: '600' }}>
              Iniciemos una Conversación
            </Title>
            <Paragraph style={{ fontSize: '18px', marginBottom: '32px', color: '#4a5568', lineHeight: '1.7' }}>
              ¿Tiene un proyecto estratégico en desarrollo? ¿Busca un socio tecnológico 
              para su organización? Estoy aquí para transformar sus objetivos de negocio 
              en soluciones digitales de alto impacto.
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
            <Title level={3} style={{ marginBottom: '32px', color: '#1a365d', fontWeight: '600' }}>
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
              padding: '24px',
              background: 'linear-gradient(135deg, #1a365d 0%, #2d3748 100%)',
              borderRadius: '12px',
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}>
              <Title level={4} style={{ color: 'white', marginBottom: '12px', fontWeight: '600' }}>
                Compromiso de Servicio
              </Title>
              <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', margin: 0, fontSize: '16px' }}>
                Respuesta garantizada en menos de 24 horas. 
                Su proyecto es mi prioridad.
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
        <Title level={3} style={{ marginBottom: '24px', color: '#1a365d', fontWeight: '600' }}>
          Conectemos en Redes Sociales
        </Title>
        <Space size="large" wrap>
          <Button 
            type="primary" 
            size="large"
            href="https://github.com/stephano21"
            target="_blank"
            style={{ 
              background: '#1a365d',
              borderColor: '#1a365d',
              height: '56px',
              padding: '0 32px',
              fontWeight: '500'
            }}
          >
            GitHub
          </Button>
          <Button 
            size="large"
            href="https://www.linkedin.com/in/stephano-chang-754050214"
            target="_blank"
            style={{ 
              background: '#0077b5',
              borderColor: '#0077b5',
              color: 'white',
              height: '56px',
              padding: '0 32px',
              fontWeight: '500'
            }}
          >
            LinkedIn
          </Button>
          <Button 
            size="large"
            href="https://x.com/leonel_chang21"
            target="_blank"
            style={{ 
              background: '#1da1f2',
              borderColor: '#1da1f2',
              color: 'white',
              height: '56px',
              padding: '0 32px',
              fontWeight: '500'
            }}
          >
            Twitter
          </Button>
          <Button size="large" 
          href="https://www.instagram.com/stephano_chang" target="_blank" style={{ 
              background: '#1da1f2',
              borderColor: '#1da1f2',
              color: 'white',
              height: '56px',
              padding: '0 32px',
              fontWeight: '500'
            }}
          >
            Instagram
          </Button>
        </Space>
      </div>
    </section>
  )
}

export default Contact

