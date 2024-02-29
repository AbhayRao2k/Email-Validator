console.log("This is my script")

// Sample result
let result = {
  "tag": "",
  "free": true,
  "role": false,
  "user": "abc",
  "email": "abc@abc.com",
  "score": 0,
  "state": "unknown",
  "domain": "abc.com",
  "reason": "no_connect",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": false,
  "did_you_mean": "abc@mac.com",
  "format_valid": true
}

// Adding event listener for submit button
submitBtn.addEventListener("click", async (e) => {
  
  e.preventDefault() // To prevent refreshing the page

  // Loading animation
  resultCont.innerHTML = `<img width="123" src="img/loading.svg" alt="">`

  console.log("Clicked!")
  let key = "ema_live_IzoibiQXHIZOhyp0eDzanQ3PbmksjUe1GzAm9l1e"
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  let str = ""

  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str = str + `<div>${key}: ${result[key]}</div>`
    }
  }

  console.log(str)
  resultCont.innerHTML = str
})


