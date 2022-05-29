import "./App.css";
import { Button } from "react-bootstrap";
import { Entry } from "./pages/entry/Entry.page";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard.page";
import NewTicket from "./pages/new-ticket/NewTicket.page";
import { TicketListing } from "./pages/ticket-listing/TicketListing.page";
function App() {
  return (
    <div className='App'>
      {/* <Entry /> */}
      <DefaultLayout
        child1={<Dashboard />}
        child2={<NewTicket />}
        child3={<TicketListing />}
      ></DefaultLayout>
    </div>
  );
}

export default App;
