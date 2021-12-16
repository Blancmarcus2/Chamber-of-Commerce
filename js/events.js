const evenURL = 'https://../event.json';
fetch(evenURL)
    .then(response => response.json())
    .then(jsonObject => {
        const eventsObj = jsonObject['chamber'];
        // Chamber of commerce events
        document.getElementById('chamber_event_one').textContent = eventsObj[0].events[0];
        document.getElementById('chamber_event_two').textContent = eventsObj[0].events[1];
        document.getElementById('chamber_event_three').textContent = eventsObj[0].events[2];
    })