import MessagesList from "./MessagesList";
import { action } from '@storybook/addon-actions';

export default {
  title: 'MyIonic/Messages List',
  component: MessagesList,
  args: {
    messages: [
      { name: 'Man 1', notifications: 34 },
    ]
  }
}


export const List = (args) => {

  return (
    <MessagesList {...args} handleClick={action('Clicked')} />
  )
}

List.storyName = 'List'

