const endpoint = "https://striveschool-api.herokuapp.com/api/product/"
const itemId = new URLSearchParams(window.location.search).get("itemId")
const customUrl = itemId ? endpoint + itemId : endpoint
const method = itemId ? "PUT" : "POST"
const displayAlert = itemId ? true : false

const formSubmit = async (e) => {
  e.preventDefault()

  const product = {
    name: document.getElementById("name").value,
    brand: document.getElementById("brand").value,
    description: (description = document.getElementById("description").value),
    imageUrl: (imageUrl = document.getElementById("imageUrl").value),
    price: (price = document.getElementById("price").value),
  }

  try {
    const response = await fetch(customUrl, {
      method: method,
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlZTc1NTllNzcxNjAwMTUzYTgwMjEiLCJpYXQiOjE2NDQwOTUzMTcsImV4cCI6MTY0NTMwNDkxN30.8Ssl3Nnftqadb6oAn8kI3oKkdVUvc51ajCi2-9nmQgE",
      },
    })
    const resData = await response.json()
    if (displayAlert) document.getElementById("update").classList.remove("hide")
    else document.getElementById("create").classList.remove("hide")
    setTimeout(() => {
      window.location.replace("index.html")
    }, 1500)
  } catch (error) {
    console.log(error)
  }
}

const deleteItem = async () => {
  try {
    const response = await fetch(customUrl, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlZTc1NTllNzcxNjAwMTUzYTgwMjEiLCJpYXQiOjE2NDQwOTUzMTcsImV4cCI6MTY0NTMwNDkxN30.8Ssl3Nnftqadb6oAn8kI3oKkdVUvc51ajCi2-9nmQgE",
      },
    })
    document.getElementById("delete").classList.remove("hide")
  } catch (error) {
    console.log(error)
  } finally {
    setTimeout(() => {
      window.location.assign("index.html")
    }, 2000)
  }
}

window.onload = async () => {
  try {
    if (itemId) {
      const response = await fetch(customUrl, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlZTc1NTllNzcxNjAwMTUzYTgwMjEiLCJpYXQiOjE2NDQwOTUzMTcsImV4cCI6MTY0NTMwNDkxN30.8Ssl3Nnftqadb6oAn8kI3oKkdVUvc51ajCi2-9nmQgE",
        },
      })
      const { name, brand, price, imageUrl, description } =
        await response.json()
      document.title = name
      document.getElementsByTagName("input")[0].setAttribute("value", `${name}`)
      document
        .getElementsByTagName("input")[1]
        .setAttribute("value", `${brand}`)
      document
        .getElementsByTagName("input")[2]
        .setAttribute("value", `${price}`)
      document
        .getElementsByTagName("input")[3]
        .setAttribute("value", `${imageUrl}`)
      document
        .getElementsByTagName("input")[4]
        .setAttribute("value", `${description}`)
      document.getElementById("reset").classList.add("hide")
      document.getElementById("save").innerText = "Update"
    }
  } catch (err) {
    console.log(err)
  }
}
