const map = L.map('map').setView([20, 0], 2); // Center on the world

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

const form = document.getElementById('place-form');
const placeList = document.getElementById('place-list');

// Load places from localStorage
const savedPlaces = JSON.parse(localStorage.getItem('places')) || [];
savedPlaces.forEach(place => addPlaceToList(place, false));

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const city = document.getElementById('city').value.trim();
  const country = document.getElementById('country').value.trim();
  const note = document.getElementById('note').value.trim();

  if (city && country && note) {
    const place = { city, country, note };
    addPlaceToList(place, true);
    form.reset();
  }
});

function addPlaceToList(place, save) {
  // Add to list
  const li = document.createElement('li');
  li.innerHTML = `<strong>${place.city}, ${place.country}</strong><br>${place.note}`;
  placeList.appendChild(li);

  // Use OpenStreetMap to geocode (simple version)
  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place.city},${place.country}`)
    .then(res => res.json())
    .then(data => {
      if (data[0]) {
        const lat = data[0].lat;
        const lon = data[0].lon;

        L.marker([lat, lon])
          .addTo(map)
          .bindPopup(`<b>${place.city}, ${place.country}</b><br>${place.note}`)
          .openPopup();
      }
    });

  // Save to localStorage
  if (save) {
    savedPlaces.push(place);
    localStorage.setItem('places', JSON.stringify(savedPlaces));
  }
}
