const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });

function postData(name) {
    
    return fetch("https://api.nationalize.io?name="+name, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((response) => response.json())

  }

    document.querySelector('.button').addEventListener('click',()=>{
    const name = document.querySelector('.input').value


    document.querySelector('.country-container').remove()

    postData(name).then((data) => {
        document.querySelector(".result-container .title").innerHTML = data.name
        data.country.forEach(element => {
            const newDiv = document.createElement("div");
            const newDiv1 = document.createElement("div");
            const newDiv2 = document.createElement("div");
            const span = document.createElement('span')
            newDiv.className = "country"
            newDiv1.className = "country-container"
            newDiv2.className="chart"
            span.innerHTML = regionNamesInEnglish.of(element.country_id)+" "+ Math.round(element.probability*10000)/100+"%"
            document.querySelector('.result-container').appendChild(newDiv1)
            document.querySelector('.country-container').appendChild(newDiv)
            newDiv.appendChild(span)
            newDiv.appendChild(newDiv2)
        });
      });
    
  })