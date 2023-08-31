import TicketCard from "../components/TicketCard"

const DashBoard = () => {

    const tickets = [
        {
            category: 'Q1 2022',
            color: 'red',
            title:'Test',
            owner:  'Olvine',
            avatar: 'https://sessionize.com/image/1f04-400o400o2-axQER7K3bRNgrpUT9G7P8n.jpg',
            status:'done',
            priority:5,
            progress: 40,
            description:'Just testing',
            timestamp: '2023-02-11T07:36:17+0000'

        },
        {
            category: 'Q2 2022',
            color: 'blue',
            title:'Test',
            owner:  'Olvine',
            avatar: 'https://sessionize.com/image/1f04-400o400o2-axQER7K3bRNgrpUT9G7P8n.jpg',
            status:'working on it',
            priority:5,
            progress: 70,
            description:'Just testing',
            timestamp: '2023-02-11T07:36:17+0000'

        },
        {
            category: 'Q3 2022',
            color: 'green',
            title:'Brown',
            owner:  'Olvine',
            avatar: 'https://sessionize.com/image/1f04-400o400o2-axQER7K3bRNgrpUT9G7P8n.jpg',
            status:'stuck',
            priority:2,
            progress: 10,
            description:'Just testing',
            timestamp: '2023-02-11T07:36:17+0000'

        }
    ]

    const uniqueCategories = [
      ...new  Set(tickets?.map(({category}) => category))
    ]

    console.log(uniqueCategories)

    return (
        <div className="dashboard">
            <h1>Projects</h1>
            <div className="ticket-container">

                {tickets && uniqueCategories?.map((uniqueCategory,categoryIndex ) =>(
                  <div key={categoryIndex}>
                    <h3>{uniqueCategory}</h3>

                    {tickets.filter((ticket) => ticket.category === uniqueCategory).map((filteredTicket, ticketIndex) => (
                        <TicketCard color = {filteredTicket.color}  ticket ={filteredTicket} />
                    ))
                    }


                  </div>  
                ) )}
                {/* <TicketCard/> */}
            </div>

        </div> 
    )

    
}

export default DashBoard