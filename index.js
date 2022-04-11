function fetchSimpsonJSON() {
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; 
      })
      .then(function(simpson) {
        console.log('data decoded from JSON:', simpson);

        const simpsonHtml = `
          <p><strong>${simpson[0].character}</strong></p>
          <p><strong>${simpson[0].quote}</strong></p>
          <img src="${simpson[0].image}" />
        `;
        document.querySelector('#simpson').innerHTML = simpsonHtml;
      });
  }
  
  fetchSimpsonJSON();