import React from 'react'
import { connect } from 'react-redux'
import { ModalOverlay, ModalContainer } from '../Modal'

export const StockAction = () => {
	return (
		<ModalOverlay>
			<ModalContainer>
				
			</ModalContainer>
		</ModalOverlay>
	)
}

const mapStateToProps = (state) => ({
	
})

const mapDispatchToProps = {
	
}

export default connect(mapStateToProps, mapDispatchToProps)(StockAction)
