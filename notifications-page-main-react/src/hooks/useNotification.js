import { useState } from 'react'
import { notifications as notificationList } from './notificationsList'

export const useNotification = () => {
    const [notificationsObject, setNotifications] = useState(notificationList)
    const setNotificationsRead = () => {
        const changedNotifications = notificationsObject.map(notif => {
            return { ...notif, unread: false }
        })

        setNotifications(changedNotifications)
    }

    let amount_of_unread_notifications = notificationsObject.filter(obj => {
        if (obj.unread) {
            return true;
        }

        return false
    }).length

    return [notificationsObject, amount_of_unread_notifications, setNotificationsRead]
}