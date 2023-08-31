import TicketCard from "../components/TicketCard"

const DashBoard = () => {

    return (
        <div className="dashboard">
            <h1>Projects</h1>
            <div className="ticket-container">
                <TicketCard/>
            </div>

        </div> 
    )

    
}

export default DashBoard