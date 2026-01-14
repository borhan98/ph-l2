

const events = [
  { timestamp: '2025-10-22T10:01:00Z', type: "click" },
  { timestamp: '2025-10-22T10:05:00Z', type: "scroll" },
  { timestamp: '2025-10-22T10:14:00Z', type: "click" },
  { timestamp: '2025-10-22T10:31:00Z', type: "click" },
  { timestamp: '2025-10-22T10:45:00Z', type: "scroll" },
  { timestamp: '2025-10-22T11:02:00Z', type: "click" },
];

const interval = 30 * 60 * 1000; // 30 mins in ms

const getBinnedTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const binnedTimeStamp = Math.floor(date.getTime() / interval) * interval;
  return new Date(binnedTimeStamp).toISOString();
}

const binnedEvents = events.reduce((acc, event) => {
  const timeStamp = getBinnedTimestamp(event.timestamp);
  if (!acc[timeStamp]) {
    acc[timeStamp] = { totalEvent: 0 };
  }
  acc[timeStamp].totalEvent += 1;
  return acc;
}, {})

console.log(binnedEvents);