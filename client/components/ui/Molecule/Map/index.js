import React from "react"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const STYLES_MAP = {
	width: '100%',
	height: '100%',
	borderRadius: '10px'
};

function MapContainer(props) {
	return (
		<Map
			google={props.google}
			zoom={8}
			style={STYLES_MAP}
			initialCenter={{ lat: 47.444, lng: -122.176}}>
			<Marker position={{ lat: 48.00, lng: -122.00}} />
		</Map>
	)
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAZ8JfKiVRRlUyK0E2-WYHOnazOhboChok'
})(MapContainer);