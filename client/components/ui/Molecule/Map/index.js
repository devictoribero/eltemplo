import PropTypes from "prop-types"
import {Map, Marker, Popup, TileLayer} from "react-leaflet-universal"

const attribution = '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'

export default function MyMap({
	id,
	width = "100%",
	height = "100%",
	center,
	zoom = 15,
}) {
	return (
		<div id={id}>
			<Map center={center} zoom={zoom}>
				<div>
					{/* <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" attribution={attribution}/> */}
					<TileLayer
						url={`https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=${process.env.MAP_ACCESS_TOKEN}`} />
					
					<Marker position={center}>
						<Popup>
							<h2>El Templo eSports</h2>
							<p>Calle Diputació 160, 08011 Barcelona</p>
						</Popup>
					</Marker>
				</div>
			</Map>
			<style jsx>{`
				#${id} {
					height: ${height};
					width: ${width};
					border-radius: 5px;
					overflow: hidden;
				}

				h2 {
					margin: 0;
					font-size: 1rem;
					font-weight: bold;
				}

				h2, p {
					color: var(--c-background-dark);
				}

				p {
					margin-top: 0.5rem;
					margin-bottom: 0;
				}
			`}</style>
			<style jsx global>{`
				.leaflet-container { height 100%;}
				
				.leaflet-popup-content-wrapper,
				.leaflet-popup-tip {
					color: var(--c-grey-darkest);
					box-shadow: 0 10px 14px -5px rgba(0,0,0,0.15);
				}

				.leaflet-popup-content {
					margin: 1.5rem 1rem 1rem 1rem;
				}

				.leaflet-container a.leaflet-popup-close-button {
					font-size: 22px !important;
					padding: 8px 8px 0 0;
				}
			`}</style>
		</div>
	)
}
MyMap.propTypes = {
	id: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	center: PropTypes.array.isRequired,
	zoom: PropTypes.number,
	shops: PropTypes.array,
	onMarkerClick: PropTypes.func
}
