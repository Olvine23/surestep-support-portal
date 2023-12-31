import React from 'react'
import AvatarDisplay from './AvatarDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'
import StatusDisplay from './StatusDisplay'
import { Link } from 'react-router-dom'

 
const TicketCard = ({color,ticket}) => {
  return (
    <div className='ticket-card'> 
    
  
   <div className="ticket-color" style={{backgroundColor: color}}></div>
   <Link to={'/ticket/${ticket.documentId}'} id ="link">
   <h3>{ticket.title}</h3>
   <AvatarDisplay ticket={ticket}/>
   <StatusDisplay status={ticket.status} />
   <PriorityDisplay  priority = {ticket.priority}/>
   <ProgressDisplay progress={ticket.progress}  />

   </Link>
   <DeleteBlock />


    </div>
  )
}

export default TicketCard