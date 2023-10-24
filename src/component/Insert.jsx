import React, { useState } from 'react'

const Insert = ({ onInsert }) => {
	const [form, setForm] = useState({
		id: 5,
		name: "이름",
		address: "주소"
	});

	const { id, name, address } = form;
	const onSubmit = (e) => {
		e.preventDefault();
		if (window.confirm("등록하시겠습니까?")) {
			//console.log(form);
			onInsert(form);
			setForm({
				id: id+1,
				name: '',
				address: ''
			})
		}
	}

	const onChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div>
			<h1>주소등록</h1>
			<form onSubmit={(e) => onSubmit(e)}>
				<span>{id}</span>
				<input value={name} name="name" onChange={(e) => onChange(e)} />
				{name}
				<hr />
				<input value={address} name="address" onChange={(e) => onChange(e)} />
				{address}
				<hr />
				<button>등록</button>
				<button type="reset">취소</button>
			</form>
		</div>
	)
}

export default Insert