import React from "react"
import PropTypes from "prop-types"
import { Map, Marker, Popup, TileLayer } from "react-leaflet-universal"
import {Link} from "../../Atom/Link"
import {Title, titleSizes, titleTags} from "../../Atom/Title"

export default function MyMap({
	id,
	width = "100%",
	height = "100%",
	center,
	zoom = 12,
	shops = [],
	onMarkerClick
}) {
	const attribution = "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"

	return (
		<div id={id}>
			<Map center={center} zoom={zoom}>
				<div>
					<TileLayer
						url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
						attribution={attribution}
					/>

					{shops.map(shop => {
						const {
							name,
							description,
							website,
							coordinates,
							phone_country_code,
							phone,
							email
						} = shop
						const [lat, lng] = coordinates
						const uniqueKey = `marker_${name}_${lat}_${lng}`

						return (
							<Marker
								key={uniqueKey}
								position={coordinates} 
								onClick={e => onMarkerClick(e, {shop})}>
								<Popup>
									<div>
										<Title size={titleSizes.s} as={titleTags.h2}>{name}</Title>
										{description && <p>{description}</p>}
										<address>
											{website && (
												<span>
													<img src='/static/images/emojis/search.svg' aria-hidden="true" />
													<Link
														href={website}
														target='_blank'
														rel='nofollow noreferrer noopener'>
														{website}
													</Link>
												</span>
											)}
											{email && (
												<span>
													<img src='/static/images/emojis/mail.svg' aria-hidden="true" />
													{email}
												</span>
											)}
											{phone && (
												<span>
													<img src='/static/images/emojis/phone.svg' aria-hidden="true" />
													+{phone_country_code} {phone}
												</span>
											)}
										</address>
									</div>
								</Popup>
							</Marker>
						)
					})}
				</div>
			</Map>
			<style jsx>{`
				#${id} {
					height: ${height};
					width: ${width};
					border-radius: 10px;
					overflow: hidden;
				}

				p {
					margin : 0.5rem 0;
					font-size: 0.8rem;
				}

				address {
					font-size: 0.8rem;
					margin-top: 0.3rem;
					display: flex;
					flex-direction: column;
				}

				address > * {
					margin-top: 0.25rem;
				}
				address span {
					display: flex;
					align-items: center;
					font-weight: 400;
				}
				address img {
					width: 15px;
					height: 15px;
					margin-right: 0.5rem;
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
