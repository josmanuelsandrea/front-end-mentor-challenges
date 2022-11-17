import './Notifications.css'
import NotificationElement from './NotificationElement'
import { useNotification } from '../hooks/useNotification'

const Notifications = () => {
    const [notifications, amount, setNotificationsToReaded] = useNotification()

    return (
        <div className="notifications">

            <div className="notifications__top-bar">
                <div className="top-bar__title">
                    <p className="text">Notifications</p>
                    <p className="number">{amount}</p>
                </div>
                <p className="mark_as_read" onClick={setNotificationsToReaded}>Mark all as read</p>
            </div>


            <div className="notifications__list">
                {notifications.map(x => {
                    return <NotificationElement notification_data={x} key={x.person_name} />
                })}
            </div>
        </div>
    )
}

export default Notifications