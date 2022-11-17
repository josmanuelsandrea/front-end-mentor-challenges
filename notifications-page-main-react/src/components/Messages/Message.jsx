import './Message.css'

const Message = ({ notification_data }) => {
	const { action_type, ...data } = notification_data

	return (
		<>
			<div className='notification__message'>
				<p>
					<span className="person-name">{data.person_name} </span>
					<span className="message">{data.action_message} </span>
					{data.related_element ? <span className="related-element">{data.related_element}</span> : null}
					{data.unread ? <span className="notification_active"></span> : null}
				</p>
				<p className="minutes-ago">{data.minutes_ago}</p>
				{action_type === 'PRIVATE-MESSAGE' ? <p className="private-message">{data.message}</p>: null}
			</div>
			{data.related_pic ? <div className="related-image"><img src={data.related_pic} alt={data.related_pic} /></div> : null}
		</>
	)
}

export default Message