import React from 'react'

class SearchBar extends React.Component {
	state = { term: '' }

	// saving values of forms
	onFormSubmit = (event) => {
		// won't reload page after submit
		event.preventDefault()

		// callback from child to parent
		this.props.onSubmit(this.state.term)
	}

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						{/* setting value of terms into state */}
						<input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar
