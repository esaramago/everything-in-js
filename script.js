var database = {
	name: "Emanuel",
	surname: "Saramago",
	birthdate: new Date("02/04/1988")
}

var css = {
	title: {
		fontSize: "20px",
		fontFamily: "Arial"
	},
	button: {
		background: "#FF0000",
		color: "#FFF",
		fontFamily: "Arial"
	},
	image: {
		fontSize: "30px",
		color: "#FF0000"
	}
}

var images = {
	cat: "🐱"
}

var components = {
	title: `<h1 style="font-size:${css.title.fontSize}; font-family:${css.title.fontFamily};">Me: ${database.name} ${database.surname}</h1>`,
	button: `<button type="button" style="background:${css.button.background}; color:${css.button.color}; font-family:${css.title.fontFamily};" onclick="showBirthdate()">Show birthdate</button>`,
	image: `<i style="font-size:${css.image.fontSize}; color:${css.button.color}">${images.cat}</i>`
}

function showBirthdate() {
	document.querySelector('[data-birthdate]').innerHTML = `
		${components.image}
		${database.birthdate.toDateString()}
	`;
}

document.body.innerHTML = `
	${components.title}
	${components.button}
	<div data-birthdate></div>
`;