const Input = props => {
	const { label, type, name, id } = props

	return (
		<div className="flex flex-col">
			<label className="block mb-3 font-bold" htmlFor={id}>
				{label}
			</label>
			<input
				type={type}
				className="form-input border-0 border-b-2 border-primary bg-gray-50"
				name={name}
				id={id}
			/>
		</div>
	)
}

export default Input
