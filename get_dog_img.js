let num = 1;

async function getDogImg(){
    const responce = await fetch('https://random.dog/woof.json')
    const json = await responce.json()
    if(checkURL(json.url)){
        img1 = loadImage(json.url);
        ok = true;
        console.log(json.url);
        const url = {
            url : json.url,
            number : num
        }
        await postData('http://localhost:3000/dog', url)
        num++;
    } else {
        ok = false
    }
}
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
}