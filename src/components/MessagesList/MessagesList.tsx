import { IonAvatar, IonBadge, IonItem, IonLabel, IonList, IonRadio, IonText } from '@ionic/react'
import { type } from 'os'
import React from 'react'

type PropsType = {
  messages: Array<{ name: string, notifications: number }>,
  handleClick: (name: string) => void
}

const MessagesList: React.FC<PropsType> = ({ messages, handleClick }) => {

  const messagesBlock = messages.map((message, index) => {
    return (
      <IonItem key={index} onClick={() => handleClick(message.name)}>
        <IonLabel>{message.name}</IonLabel>
        <IonBadge color="tertiary">{message.notifications}</IonBadge>
      </IonItem>
    )
  })

  return (
    <IonList>
      {messagesBlock}
    </IonList>
  )
}

export default MessagesList