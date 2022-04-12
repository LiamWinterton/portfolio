const Input = props => {
	const { label, type, name, id } = props

	if (type === 'textarea') {
		return (
			<div className="flex flex-col">
				<label className="block mb-3 font-bold" htmlFor={id}>
					{label}
				</label>
				<textarea
					className="form-input border-0 border-b-2 border-primary bg-gray-50"
					name={name}
					id={id}
					rows={3}
				/>
			</div>
		)
	}

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
