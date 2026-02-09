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