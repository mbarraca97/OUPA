import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const locations = [
  { position: [40.924440748600816, -8.562721132376682], name: '4520 Cervejaria e Snack-Bar' },
  { position: [40.892829457051576, -8.233179707818447], name: 'Espinheiro - Casa no Campo' },
  { position: [41.00875863096856, -8.515010475276005], name: 'Wimpy Restaurante' },
  { position: [40.99011745023609, -8.464308034804413], name: 'Dindão Restaurante e Bar' },
  { position: [41.141561272169554, -8.60821787590187], name: 'The Bridge Restaurant' },
]

export default function LocationMap() {
  return (
    <MapContainer
      center={[40.9253, -8.5428]}
      zoom={10}
      style={{ height: '500px', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, idx) => (
        <Marker key={idx} position={location.position}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
