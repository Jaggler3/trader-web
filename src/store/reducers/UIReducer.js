export default (ui, { type, payload }) => {
	switch (type) {
		case "open stock view":
			return {
				...ui,
				stockViewOpen: true,
				stockViewSymbol: payload
			}
		case "close stock view":
			return {
				...ui,
				stockViewOpen: false,
				stockViewSymbol: ""
			}
		case "open stock tab":
			return {
				...ui,
				stockViewTab: payload
			}

		default:
			return ui
	}
}
