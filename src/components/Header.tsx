import React, { useState } from 'react'
import { Layout, Menu, Button, Drawer } from 'antd'
import { MenuOutlined, HomeOutlined, UserOutlined, CodeOutlined, ProjectOutlined, MailOutlined } from '@ant-design/icons'

const { Header: AntHeader } = Layout

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Inicio',
      onClick: () => scrollToSection('hero')
    },
    {
      key: 'about',
      icon: <UserOutlined />,
      label: 'Sobre mí',
      onClick: () => scrollToSection('about')
    },
    {
      key: 'skills',
      icon: <CodeOutlined />,
      label: 'Habilidades',
      onClick: () => scrollToSection('skills')
    },
    {
      key: 'projects',
      icon: <ProjectOutlined />,
      label: 'Proyectos',
      onClick: () => scrollToSection('projects')
    },
    {
      key: 'contact',
      icon: <MailOutlined />,
      label: 'Contacto',
      onClick: () => scrollToSection('contact')
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setVisible(false)
  }

  return (
    <AntHeader style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ 
        fontSize: '32px', 
        fontWeight: '800', 
        background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        cursor: 'pointer',
        letterSpacing: '-0.03em',
        textShadow: '0 2px 4px rgba(99, 102, 241, 0.2)'
      }} onClick={() => scrollToSection('hero')}>
        🚀 Stephano21
      </div>
      
      {/* Menú desktop */}
      <Menu
        mode="horizontal"
        items={menuItems}
        style={{ 
          flex: 1, 
          justifyContent: 'center',
          border: 'none',
          background: 'transparent'
        }}
      />
      
      {/* Botón menú móvil */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
        style={{ display: 'none' }}
        className="mobile-menu-btn"
      />
      
      {/* Drawer para móvil */}
      <Drawer
        title="Menú"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
        width={250}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          style={{ border: 'none' }}
        />
      </Drawer>
      
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .ant-menu-horizontal {
            display: none !important;
          }
        }
      `}</style>
    </AntHeader>
  )
}

export default Header

