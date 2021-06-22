import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import MessagesList from '../components/MessagesList/MessagesList';
import './Tab1.css';

const Tab1: React.FC = () => {
  const messages = [
    { name: 'Alex', notifications: 21 },
    { name: 'Edward', notifications: 34 },
    { name: 'Alexander', notifications: 67 },
    { name: 'Marianna', notifications: 15 }
  ]
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MessagesList messages={messages} handleClick={(name) => console.log(name)} />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
