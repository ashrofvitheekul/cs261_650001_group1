const appState = { keyword: '', markers: {} };

const map = L.map('map').setView(MAP_CENTER, MAP_ZOOM);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);
const markerLayer = L.layerGroup().addTo(map);

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text ?? '';
    return div.innerHTML;
}

function showMessage(text) {
    const box = document.getElementById('message');
    box.textContent = text;
    box.hidden = !text;
}

function renderLots(lots) {
    markerLayer.clearLayers();
    appState.markers = {};
    const list = document.getElementById('lot-list');
    list.innerHTML = '';

    lots.forEach((lot) => {
        const title = `${escapeHtml(lot.code)} · ${escapeHtml(lot.nameTh)}`;
        const marker = L.circleMarker([lot.latitude, lot.longitude], {
            radius: 11, color: '#ffffff', weight: 2, fillColor: '#1565c0', fillOpacity: 0.95,
        }).bindPopup(`<strong>${title}</strong><br><small>${escapeHtml(lot.building)}</small>`)
          .bindTooltip(lot.code, { permanent: true, direction: 'top', offset: [0, -10] });
        marker.addTo(markerLayer);
        appState.markers[lot.code] = marker;

        const item = document.createElement('li');
        item.className = 'lot';
        item.innerHTML = `
            <button type="button" class="lot-name">${title}</button>
            <div class="lot-building">${escapeHtml(lot.building)}</div>
            <a class="nav-link" href="${directionsUrl(lot.latitude, lot.longitude)}" target="_blank" rel="noopener">นำทาง</a>`;
        item.querySelector('.lot-name').addEventListener('click', () => focusLot(lot.code));
        list.appendChild(item);
    });
}

function focusLot(code) {
    const marker = appState.markers[code];
    if (!marker) return;
    map.setView(marker.getLatLng(), 18);
    marker.openPopup();
}

async function loadLots() {
    try {
        const lots = await fetchLots(appState.keyword);
        renderLots(lots);
        if (lots.length === 0) {
            showMessage(appState.keyword ? `ไม่พบลานจอดที่ตรงกับ ${appState.keyword}` : 'ยังไม่มีข้อมูลลานจอด');
        } else {
            showMessage('');
        }
    } catch (err) {
        showMessage('โหลดข้อมูลลานจอดไม่สำเร็จ กรุณาลองใหม่');
    }
}

loadLots();