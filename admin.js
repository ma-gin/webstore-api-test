const formSubmit = async (e) => {
  e.preventDefault()

  const baseUrl = "https://striveschool-api.herokuapp.com/api/product/"

  const product = {
    name: document.getElementById("name").value,
    brand: document.getElementById("brand").value,
    description: (description = document.getElementById("description").value),
    imageUrl: (imageUrl = document.getElementById("imageUrl").value),
    price: (price = document.getElementById("price").value),
  }

  try {
    const response = await fetch(baseUrl, {
     method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlZTc1NTllNzcxNjAwMTUzYTgwMjEiLCJpYXQiOjE2NDQwOTUzMTcsImV4cCI6MTY0NTMwNDkxN30.8Ssl3Nnftqadb6oAn8kI3oKkdVUvc51ajCi2-9nmQgE",
      },
    })
    // const bodyResp = await response.json()
    // console.log(bodyResp)
    window.location.replace("index.html")

  }
  catch (error) {console.log(error)}
}