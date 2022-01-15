

function placeOrder(e){
    e.preventDefault()
    setTimeout(()=>{alert("Your order is accepted ")},3000)
    setTimeout(()=>{alert("Your order is being cooked  ")},8000)
    setTimeout(()=>{alert("Your order is ready ")},10000)
    setTimeout(()=>{alert("Order out for delivery")},12000)
    setTimeout(()=>{alert("Order delivered ")},12000)

}