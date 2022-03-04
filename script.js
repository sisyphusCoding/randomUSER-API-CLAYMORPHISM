const filter  = document.getElementById("filter")

const output  = document.getElementById("output")



filter.addEventListener("input", (e)=>{
	
output.scrollTo(0, 0)
filterData(e.target.value)
	
})

const listUsers = []

const filterData = (search) => {
	listUsers.forEach(elem => {
		console.log(elem.innerText)
		if(elem.innerText.toLowerCase().includes(search.toLowerCase())){
			elem.classList.remove('hide')
		} else {
			elem.classList.add('hide')
		}
	})
}


const getData = async () => {
	
	const res = await fetch('https://randomuser.me/api?results=50')
	const {results} = await res.json()
	
	
	
	output.innerHTML = ' '
	
	results.forEach(user => {
		
		const listEl = document.createElement('div')
		
		listUsers.push(listEl)
		listEl.className = "outputChild"
		
		listEl.innerHTML = `
		<div class="img-wrapper"><img loading="lazy" src="${user.picture.large}" alt="${user.name.first}" /></div>
      <div class="contentWrap">
        <h3>${user.name.first} ${user.name.last}</h3>
        <div class="subWrap">
          <h5>${user.location.city}</h5>
          <h5>${user.location.country}</h5>
		`
		
		output.appendChild(listEl)
		
	})
	
	
}


getData()