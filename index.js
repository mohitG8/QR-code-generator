const inp = document.getElementById('in')
const image = document.getElementById('aimg')
const button = document.getElementById('btn')

console.log(inp,image,button)
button.addEventListener("click", () => {
    const inputValue = inp.value;
    console.log(inputValue)
    if(!inputValue){
        alert("Please enter a valid url")
        return;
    }
    else{
        image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        image.alt=`QR code for ${inputValue}`
        return;
    }
})