import React from 'react'
import Header from '../molecules/Header'
import Panel from '../molecules/Panel'

interface TemplateProps {
  children: any,
}

const BasicTemplate: React.FC<TemplateProps> = ({
  children,
}: TemplateProps) => {
  return (
    <Panel
      color='#E7E8E7'
      align='center'
      justify='flex-start'
      direction='column'
      width='100%'
      height="100%">
      <Header />
      <div style={{ width: '62rem'}}>
        {children}
      </div>
    </Panel>
  )
}

export default BasicTemplate
