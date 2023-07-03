import { Component } from "react";
import LeadsTable from "./LeadsTable";
class App extends Component {
  render()
  {
    const char = [
      {
        "id": 1,
        "updated_at": "2019-06-12T12:11:39.127842Z",
        "created_at": "2019-06-12T12:11:39.127901Z",
        "first_name": "Nilesh",
        "last_name": "Agarwal",
        "mobile": "9871028111",
        "email": "abc@gmail.com",
        "location_type": "City",
        "location_string": "India",
        "status": "Created",
        "communication": null,
        "tags": null
    }
  ]
    return (
    <div className="container">
      <button class ="button5">Add Leads</button>
      <LeadsTable charData = {char}/>
    </div>
  );
}
};
export default App;
