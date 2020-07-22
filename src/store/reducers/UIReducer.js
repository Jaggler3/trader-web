export default (ui, { type, payload }) => {
	const $ = (changes) => ({...ui, ...changes});
	switch (type) {
		case "open stock view":
			return $({
				stockViewOpen: true,
				stockViewSymbol: payload,
				stockViewTab: "stocks"
			})
		case "close stock view":
			return $({
				stockViewOpen: false,
				stockViewSymbol: "",
				stockViewTab: "stocks"
			})
		case "open option view":
			return $({
				stockViewOpen: true,
				stockViewSymbol: payload,
				stockViewTab: "options"
			})
		case "open stock tab":
			return $({
				stockViewTab: payload
			})
		case "open option data":
			return $({
				optionViewOpen: true,
				stockViewSymbol: payload.name,
				optionViewPositionID: payload.positionID	
			})
		case "close option data":
			return $({
				optionViewOpen: false,
				optionViewPositionID: -1
			})
		default:
			return ui
	}
}
