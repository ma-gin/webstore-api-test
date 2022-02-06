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
        console.log(resData)
    } catch (error){}
}

window.onload = () => {
    getData()
}