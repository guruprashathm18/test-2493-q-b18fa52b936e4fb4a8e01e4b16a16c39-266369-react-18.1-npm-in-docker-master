import React, { useEffect, useState } from 'react';
import LeadsTable from './LeadsTable';

const LeadsPage = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    // Fetch leads data from backend API
    fetch('/api/leads')
      .then(response => response.json())
      .then(data => setLeads(data));
  }, []);

  return (
    <div>
      <h1>Leads</h1>
      <LeadsTable leads={leads} />
    </div>
  );
};

export default LeadsPage;