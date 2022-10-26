import React from 'react'
import { IState } from '../../store';
import { useSelector } from 'react-redux';
import Header from '../molecules/Header'
import Panel from '../molecules/Panel'
import Alert from '../atoms/Alert';

interface TemplateProps {
  children: any,
}

const BasicTemplate: React.FC<TemplateProps> = ({
  children,
}: TemplateProps) => {
  const isServiceWorkerInitialized = useSelector(
      (state: IState) => state.serviceWorkerInitialized,
  );
  const isServiceWorkerUpdated = useSelector(
      (state: IState) => state.serviceWorkerUpdated,
  );
  const serviceWorkerRegistration = useSelector(
      (state: IState) => state.serviceWorkerRegistration,
  );

  const updateServiceWorker = () => {
    const registrationWaiting = serviceWorkerRegistration.waiting;

    if (registrationWaiting) {
        registrationWaiting.postMessage({ type: 'SKIP_WAITING' });
    
        registrationWaiting.addEventListener('statechange', (e:any) => {
            if (e.target.state === 'activated') {
              window.location.reload();
            }
        });
    }
  };

  return (
    <>
      <div className="App-alert">
          {isServiceWorkerUpdated && (
          <Alert
              type={'success'}
              label="New version available."
              buttonText="Update"
              onClick={updateServiceWorker}
          />
          )}
      </div>
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
    </>
  )
}

export default BasicTemplate
