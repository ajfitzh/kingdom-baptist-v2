// lib/baserow.ts
export interface Sermon {
  id: number;
  Title: string;
  Date: string;
  Speaker: { value: string; id: number } | string; // Handles Select or Text field
  Video_URL: string;
}

export async function getSermons() {
  const tableId = process.env.BASEROW_SERMONS_TABLE_ID;
  const token = process.env.BASEROW_TOKEN;

  // Order by date descending (-Date) so newest is first
  const url = `https://api.baserow.io/api/database/rows/table/${tableId}/?user_field_names=true&order_by=-Date`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Token ${token}`,
    },
    next: { revalidate: 60 }, // ISR: Cache for 60 seconds
  });

  if (!res.ok) throw new Error('Failed to fetch sermons');

  const data = await res.json();
  return data.results as Sermon[];
}

export interface ChurchEvent {
  id: number;
  "Event Name": string; // Note: Baserow keys have spaces if you didn't check "user_field_names"
  Date: string;
  Description: string;
  "Signup Link": string;
}

export async function getEvents() {
  const tableId = process.env.BASEROW_EVENTS_TABLE_ID;
  const token = process.env.BASEROW_TOKEN;

  // Order by Date ascending (oldest first) so we see the next upcoming event
  // Filter to only show future events (optional, but good practice)
  const url = `https://api.baserow.io/api/database/rows/table/${tableId}/?user_field_names=true&order_by=Date`;

  const res = await fetch(url, {
    headers: { Authorization: `Token ${token}` },
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch events");

  const data = await res.json();
  
  // Filter for future events only (Client-side filtering is easier for small datasets)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return (data.results as ChurchEvent[]).filter(event => 
    new Date(event.Date) >= today
  );
}