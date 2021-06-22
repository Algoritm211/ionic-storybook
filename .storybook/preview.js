/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../src/theme/variables.css';
import { withConsole } from '@storybook/addon-console'
import { IonApp, IonPage } from '@ionic/react'
import { addDecorator } from '@storybook/react'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const IonWrapper = ({ children }) => {
  return (
    <IonApp>
      <IonPage>
        {children}
      </IonPage>
    </IonApp>
  )
}

addDecorator((story) => <IonWrapper>{story()}</IonWrapper>)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))