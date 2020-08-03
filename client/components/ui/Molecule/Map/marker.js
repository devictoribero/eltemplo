import {icon} from "leaflet"

export const ShopMarkerIcon = () => {
	return icon({
		iconUrl: "/static/images/marker.png",
		iconSize: [38, 95],
		iconAnchor: [22, 94],
		popupAnchor: [-3, -76],
	})
}
