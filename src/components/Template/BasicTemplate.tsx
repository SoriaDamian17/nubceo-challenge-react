import React from 'react'
import Header from '../molecules/Header'
import Panel from '../molecules/Panel'
import { useNavigate } from 'react-router-dom';

interface TemplateProps {
  children: any,
  sx?: any,
}

const BasicTemplate: React.FC<TemplateProps> = ({
  children,
  sx,
}: TemplateProps) => {
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('NubToken');
    navigate('/')
  }

  return (
    <>
      <Panel
        color='#E7E8E7'
        align='center'
        justify='flex-start'
        direction='column'
        width='100%'
        height="100%">
        <Header onClick={logout} />
        <div style={sx}>
          {children}
        </div>
      </Panel>
    </>
  )
}

export default BasicTemplate
