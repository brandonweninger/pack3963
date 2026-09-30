const announcementBanner = document.getElementById('announcement-banner');
const announcementData = document.getElementById('announcement-events-data');

if (announcementBanner && announcementData) {
  const events = JSON.parse(announcementData.textContent);
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0')
  ].join('-');

  const nextEvent = events
    .filter((event) => (event.end_date || event.date) >= today)
    .sort((first, second) => first.date.localeCompare(second.date))[0];

  if (nextEvent) {
    const message = nextEvent.announcement
      || `Next event: ${nextEvent.date_label} — ${nextEvent.title}`;

    document.getElementById('announcement-message').textContent = message;
    announcementBanner.hidden = false;
  }
}
