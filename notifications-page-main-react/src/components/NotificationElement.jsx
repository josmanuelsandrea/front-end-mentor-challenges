import './NotificationElement.css'
import Message from './Messages/Message'

const NotificationsList = ({ notification_data }) => {
  return (
    <div className={`notification__element ${notification_data.unread ? 'active' : ''}`}>
      <div className="notification__flexbox">
        <div className='notification__image'>
          <img src={notification_data.person_image} alt="avatar-mark-webber" />
        </div>
        <Message notification_data={notification_data} />
      </div>
    </div>
  )
}

export default NotificationsList