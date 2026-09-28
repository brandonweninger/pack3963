const eventCards = Array.from(document.querySelectorAll('.event-card'));
const noUpcomingEvents = document.getElementById('no-upcoming-events');

if (eventCards.length) {
  const now = new Date();
  const today = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0')
  ].join('-');

  let visibleEventCount = 0;

  eventCards.forEach((eventCard) => {
    const eventEndDate = eventCard.dataset.eventEnd;
    const eventHasPassed = Boolean(eventEndDate && eventEndDate < today);

    eventCard.hidden = eventHasPassed;

    if (!eventHasPassed) {
      visibleEventCount += 1;
    }
  });

  if (noUpcomingEvents) {
    noUpcomingEvents.hidden = visibleEventCount > 0;
  }
}
