import options from "../config/ApiConnection";

async function getPrice() {
    const response = await fetch("https://openapiv1.coinstats.app/coins", options)
    const data = await response.json();
    console.log(data);
    
    return data.result
   }
export default getPrice;
