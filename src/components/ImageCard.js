import React from 'react'

class ImageCard extends React.Component {
	constructor(props) {
		super(props)

		this.state = { spans: 0 }

		// DOM
		this.imageRef = React.createRef()
	}

	componentDidMount = () => {
		// need to wait till image loads perfectly
		this.imageRef.current.addEventListener('load', this.setSpans)
	}

	// setting different spans for each card
	setSpans = () => {
		const height = this.imageRef.current.clientHeight
		const spans = Math.ceil(height / 10) + 1

		this.setState({ spans })
	}

	render() {
		const { description, urls } = this.props.image

		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				{/* wiring up DOM with each element in ref*/}
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		)
	}
}

export default ImageCard
