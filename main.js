const getData = async () => {
    try {
        const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/product/",
            {
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZlZTc1NTllNzcxNjAwMTUzYTgwMjEiLCJpYXQiOjE2NDQwOTUzMTcsImV4cCI6MTY0NTMwNDkxN30.8Ssl3Nnftqadb6oAn8kI3oKkdVUvc51ajCi2-9nmQgE",
                },
            }
        )
        const resData = await response.json()
        return resData
    } catch (error){console.log(error)}
}

const renderItems = (arr) => {
    const mainContainer = document.getElementsByTagName("main")[0]
    const template = document.getElementsByTagName("template")[0]
    arr.forEach(item => {
        const newItem = template.content.cloneNode(true)
        newItem.querySelector(".title").innerText = `${item.name}`
        newItem.querySelector(".brand").innerText = `${item.brand}`
        newItem.querySelector(".price").innerText = `${item.price}`
        newItem.querySelector(".description").innerText = `${item.description}`
        newItem.querySelector(".admin-btn").setAttribute("href", `/admin.html?itemId=${item._id}`)
        mainContainer.append(newItem)
    })
}

window.onload = async () => {
    const response = await getData()
    renderItems(response)
}