//////////////////////////////// Assignment 6A

// Creating a new array to store the 'Add' class in CSSS
var addToCart = document.getElementsByClassName('Add-button')

// Creating a new variable to store the only element in the 'Cart' Class
var cartNum = document.getElementsByClassName('Cart')[0]

// Adding event listeners to all of the elements in the 'Add' Class
// Decrementing the amount of remaining buns for the User on Click
for (var i = 0; i < addToCart.length; i++) {
    var button = addToCart[i]
    button.addEventListener('click', function() {
        var x = cartNum.innerHTML
        x = x-1
        if (x < 0){
            x = 0
        }
        cartNum.innerHTML = x
    })
}

//////////////////////////////// Assignment 6B

// item pic + desc
var checkoutItems = document.getElementsByClassName('Checkout-Bun-Grid-Item')
//console.log(checkoutItems)

// item quan + price
var checkoutItemsQuantity = document.getElementsByClassName('Checkout-Bun-Grid-Item2')
//console.log(checkoutItemsQuantity)

for (var j = 3; j < checkoutItems.length; j++) {
    setVisibility(checkoutItems[j], false)
}
for (var j = 0; j < checkoutItems.length; j++) {
    setVisibility(checkoutItemsQuantity[2 * j], false)
    setVisibility(checkoutItemsQuantity[(2 * j) + 1], false)
}

// Setting variable to the Add Button on Items
var addButtons = document.getElementsByClassName('Add-button')
//console.log(addButtons)

//Defining inital-variables for Total Quantity & Price
var totalQuantity = 0
var totalPrice = 0
var totalQuan = document.getElementById('TotalQuantity')
var totalP = document.getElementById('TotalPrice')
var cartNum = document.getElementsByClassName('Cart')[0]
// Intl.NumberFormat formatter = new DecimalFormat("#0.00")    

//Created a function to allow for updating the checkout based on clicks of the Add Button
function updateCheckout(i, q, p, name) {
    var curr = checkoutItems[i]
    var currQuan = checkoutItemsQuantity[q]
    var currPrice = checkoutItemsQuantity[p]
    setVisibility(curr, true)
    setVisibility(currQuan, true)
    setVisibility(currPrice, true)
    quantity = localStorage.getItem(name)
    //console.log(quantity)
    currQuan.innerText = quantity
    //console.log(currQuan)
    currPrice.innerText = (quantity * 2.99)
    totalQuantity = totalQuantity + 1
    totalPrice = totalPrice + 2.99
    totalQuan.innerText = totalQuantity
    totalP.innerText = totalPrice.toFixed(2)
}

//Defined when an original was added to update the quantity & prices for the buns
var addOriginal = document.getElementById('Add-Original')
addOriginal.addEventListener('click', function () {
    //console.log('original added')
    var currQuan = checkoutItemsQuantity[0]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) + 1
    } else {
        var quantity = 1
    }
    localStorage.setItem("originalQ", quantity)
    updateCheckout(3, 0, 1, "originalQ")
})

//Defined when an blackberry was added to update the quantity & prices for the buns
var addBlackberry = document.getElementById('Add-Blackberry')
addBlackberry.addEventListener('click', function () {
    //console.log('blackberry added')
    var currQuan = checkoutItemsQuantity[2]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) + 1
    } else {
        var quantity = 1
    }
    localStorage.setItem("blackberryQ", quantity)
    updateCheckout(4, 2, 3, "blackberryQ")
})

//Defined when an walnut was added to update the quantity & prices for the buns
var addWalnut = document.getElementById('Add-Walnut')
addWalnut.addEventListener('click', function () {
    //console.log('walnut added')
    var currQuan = checkoutItemsQuantity[4]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) + 1
    } else {
        var quantity = 1
    }
    localStorage.setItem("walnutQ", quantity)
    updateCheckout(5, 4, 5, "walnutQ")
})

//Defined when an caramel was added to update the quantity & prices for the buns
var addCaramel = document.getElementById('Add-Caramel')
addCaramel.addEventListener('click', function () {
    //console.log('caramel added')
    var currQuan = checkoutItemsQuantity[8]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) + 1
    } else {
        var quantity = 1
    }
    localStorage.setItem("caramelQ", quantity)
    updateCheckout(7, 8, 9, "caramelQ")
})

//Defined when an PSL was added to update the quantity & prices for the buns
var addPSL = document.getElementById('Add-Pumpkin')
addPSL.addEventListener('click', function () {
    //console.log('Pumpkin added')
    var currQuan = checkoutItemsQuantity[6]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) + 1
    } else {
        var quantity = 1
    }
    localStorage.setItem("pumpkinlQ", quantity)
    updateCheckout(6, 6, 7, "pumpkinlQ")
})

//Defined when an GF was added to update the quantity & prices for the buns
var addGF = document.getElementById('Add-Gluten')
addGF.addEventListener('click', function () {
    //console.log('GF added')
    var currQuan = checkoutItemsQuantity[10]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) + 1
    } else {
        var quantity = 1
    }
    localStorage.setItem("gflQ", quantity)
    updateCheckout(8, 10, 11, "gflQ")
})

//All possible glazes
var glazes = ['No Glaze', 'Vanilla Milk', 'Sugar Milk', "Double-Chocolate"]

//Setting variable for glaze buttons in HTML
var glazeButtons = document.getElementsByClassName("Glaze-button")
//console.log(glazeButtons)

//Setting variable for Original Glaze
var originalGlaze = document.getElementById("OG")
setVisibility(originalGlaze, false)

//console.log(originalGlaze)

//Setting variable for No Glaze Original and adding an event listener to update Checkout Cart Label
ogNoGlaze = glazeButtons[0]
ogNoGlaze.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[0])
    setVisibility(originalGlaze, true)
    originalGlaze.innerHTML = glazes[0]
})

//Setting variable for Vanilla Glaze Original and adding an event listener to update Checkout Cart Label
ogVanilla = glazeButtons[1]
ogVanilla.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[1])
    setVisibility(originalGlaze, true)
    originalGlaze.innerHTML = glazes[1]
})

//Setting variable for Sugar Milk Original and adding an event listener to update Checkout Cart Label
ogSugarMilk = glazeButtons[2]
ogSugarMilk.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[2])
    setVisibility(originalGlaze, true)
    originalGlaze.innerHTML = glazes[2]
})

//Setting variable for Double Chocolate Original and adding an event listener to update Checkout Cart Label
ogChocolate = glazeButtons[3]
ogChocolate.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[3])
    setVisibility(originalGlaze, true)
    originalGlaze.innerHTML = glazes[3]
})


//Setting variable for BB Glaze
var bbGlaze = document.getElementById("BB")
setVisibility(bbGlaze, false)

//console.log(bbGlaze)

//Setting variable for No Glaze BB and adding an event listener to update Checkout Cart Label
bbNoGlaze = glazeButtons[4]
bbNoGlaze.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[0])
    setVisibility(bbGlaze, true)
    bbGlaze.innerHTML = glazes[0]
})

//Setting variable for Vanilla Glaze BB and adding an event listener to update Checkout Cart Label
bbVanilla = glazeButtons[5]
bbVanilla.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[1])
    setVisibility(bbGlaze, true)
    bbGlaze.innerHTML = glazes[1]
})

//Setting variable for Sugar Milk BB and adding an event listener to update Checkout Cart Label
bbSugarMilk = glazeButtons[6]
bbSugarMilk.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[2])
    setVisibility(bbGlaze, true)
    bbGlaze.innerHTML = glazes[2]
})

//Setting variable for Double Chocolate BB and adding an event listener to update Checkout Cart Label
bbChocolate = glazeButtons[7]
bbChocolate.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[3])
    setVisibility(bbGlaze, true)
    bbGlaze.innerHTML = glazes[3]
})

//Setting variable for Walnut Glaze
var WalnutGlaze = document.getElementById("Walnut")
setVisibility(WalnutGlaze, false)

//console.log(WalnutGlaze)

//Setting variable for No Glaze Walnut and adding an event listener to update Checkout Cart Label
WalnutNoGlaze = glazeButtons[8]
WalnutNoGlaze.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[0])
    setVisibility(WalnutGlaze, true)
    WalnutGlaze.innerHTML = glazes[0]
})

//Setting variable for Vanilla Glaze Walnut and adding an event listener to update Checkout Cart Label
WalnutVanilla = glazeButtons[9]
WalnutVanilla.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[1])
    setVisibility(WalnutGlaze, true)
    WalnutGlaze.innerHTML = glazes[1]
})

//Setting variable for Sugar Milk Walnut and adding an event listener to update Checkout Cart Label
WalnutSugarMilk = glazeButtons[10]
WalnutSugarMilk.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[2])
    setVisibility(WalnutGlaze, true)
    WalnutGlaze.innerHTML = glazes[2]
})

//Setting variable for Double Chocolate Walnut and adding an event listener to update Checkout Cart Label
WalnutChocolate = glazeButtons[11]
WalnutChocolate.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[3])
    setVisibility(WalnutGlaze, true)
    WalnutGlaze.innerHTML = glazes[3]
})

//Setting variable for PSL Glaze
var PSLGlaze = document.getElementById("PSL")
setVisibility(PSLGlaze, false)

//console.log(PSLGlaze)

//Setting variable for No Glaze PSL and adding an event listener to update Checkout Cart Label
PSLNoGlaze = glazeButtons[12]
PSLNoGlaze.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[0])
    setVisibility(PSLGlaze, true)
    PSLGlaze.innerHTML = glazes[0]
})

//Setting variable for Vanilla Glaze PSL and adding an event listener to update Checkout Cart Label
PSLVanilla = glazeButtons[13]
PSLVanilla.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[1])
    setVisibility(PSLGlaze, true)
    PSLGlaze.innerHTML = glazes[1]
})

//Setting variable for Sugar Milk PSL and adding an event listener to update Checkout Cart Label
PSLSugarMilk = glazeButtons[14]
PSLSugarMilk.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[2])
    setVisibility(PSLGlaze, true)
    PSLGlaze.innerHTML = glazes[2]
})

//Setting variable for Double Chocolate PSL and adding an event listener to update Checkout Cart Label
PSLChocolate = glazeButtons[15]
PSLChocolate.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[3])
    setVisibility(PSLGlaze, true)
    PSLGlaze.innerHTML = glazes[3]
})

//Setting variable for caramel Glaze
var caramelGlaze = document.getElementById("caramel")
setVisibility(caramelGlaze, false)

//console.log(caramelGlaze)

//Setting variable for No Glaze caramel and adding an event listener to update Checkout Cart Label
caramelNoGlaze = glazeButtons[16]
caramelNoGlaze.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[0])
    setVisibility(caramelGlaze, true)
    caramelGlaze.innerHTML = glazes[0]
})

//Setting variable for Vanilla Glaze caramel and adding an event listener to update Checkout Cart Label
caramelVanilla = glazeButtons[17]
caramelVanilla.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[1])
    setVisibility(caramelGlaze, true)
    caramelGlaze.innerHTML = glazes[1]
})

//Setting variable for Sugar Milk caramel and adding an event listener to update Checkout Cart Label
caramelSugarMilk = glazeButtons[18]
caramelSugarMilk.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[2])
    setVisibility(caramelGlaze, true)
    caramelGlaze.innerHTML = glazes[2]
})

//Setting variable for Double Chocolate caramel and adding an event listener to update Checkout Cart Label
caramelChocolate = glazeButtons[19]
caramelChocolate.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[3])
    setVisibility(caramelGlaze, true)
    caramelGlaze.innerHTML = glazes[3]
})

//Setting variable for gf Glaze
var gfGlaze = document.getElementById("gf")
setVisibility(gfGlaze, false)

//console.log(gfGlaze)

//Setting variable for No Glaze gf and adding an event listener to update Checkout Cart Label
gfNoGlaze = glazeButtons[20]
gfNoGlaze.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[0])
    setVisibility(gfGlaze, true)
    gfGlaze.innerHTML = glazes[0]
})

//Setting variable for Vanilla Glaze gf and adding an event listener to update Checkout Cart Label
gfVanilla = glazeButtons[21]
gfVanilla.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[1])
    setVisibility(gfGlaze, true)
    gfGlaze.innerHTML = glazes[1]
})

//Setting variable for Sugar Milk gf and adding an event listener to update Checkout Cart Label
gfSugarMilk = glazeButtons[22]
gfSugarMilk.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[2])
    setVisibility(gfGlaze, true)
    gfGlaze.innerHTML = glazes[2]
})

//Setting variable for Double Chocolate gf and adding an event listener to update Checkout Cart Label
gfChocolate = glazeButtons[23]
gfChocolate.addEventListener('click', function () {
    //console.log('glaze added')
    //console.log(glazes[3])
    setVisibility(gfGlaze, true)
    gfGlaze.innerHTML = glazes[3]
})

//Creating a Function to update the "Your Order" when a user selects the remove button 
function updateRemove (name, quantity, c, q, p) {
    localStorage.setItem(name, quantity)
    var curr = checkoutItems[c]
    var currQuan = checkoutItemsQuantity[q]
    var currPrice = checkoutItemsQuantity[p]
    currQuan.innerText = quantity
    currPrice.innerText = (quantity * 2.99).toFixed(2)
    if (!quantity) {
        currQuan.innerText = ""
        currPrice.innerText = ""
        setVisibility(curr, false)
        setVisibility(currQuan, false)
        setVisibility(currPrice, false)
    }
    totalQuantity = totalQuantity - 1
    totalPrice = totalPrice - 2.99
    totalQuan.innerText = totalQuantity
    if (totalPrice > 0)
        totalP.innerText = totalPrice.toFixed(2)
    else
        totalP.innerText = 0
    if (totalQuantity < 3)
        cartNum.innerText = 3 - totalQuantity
}

//Defining Original's Remove button and adding an event listener to remove the item
var ogRemove = document.getElementById("og-remove")
ogRemove.addEventListener('click', function () {
    //console.log('original removed')
    var currQuan = checkoutItemsQuantity[0]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) - 1
    } else {
        var quantity = 0
    }
    updateRemove("originalQ", quantity, 3, 0, 1)
})

//Defining BB's Remove button and adding an event listener to remove the item
var bbRemove = document.getElementById("bb-remove")
bbRemove.addEventListener('click', function () {
    //console.log('bb removed')
    var currQuan = checkoutItemsQuantity[2]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) - 1
    } else {
        var quantity = 0
    }
    updateRemove("bbQ", quantity, 4, 2, 3)
})

//Defining Walnuts's Remove button and adding an event listener to remove the item
var walnutRemove = document.getElementById("walnut-remove")
walnutRemove.addEventListener('click', function () {
    //console.log('walnut removed')
    var currQuan = checkoutItemsQuantity[4]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) - 1
    } else {
        var quantity = 0
    }
    updateRemove("walnutQ", quantity, 5, 4, 5)
})

//Defining PSL's Remove button and adding an event listener to remove the item
var pslRemove = document.getElementById("psl-remove")
pslRemove.addEventListener('click', function () {
    //console.log('psl removed')
    var currQuan = checkoutItemsQuantity[6]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) - 1
    } else {
        var quantity = 0
    }
    updateRemove("pumpkinQ", quantity, 6, 6, 7)
})

//Defining Caramel's Remove button and adding an event listener to remove the item
var caramelRemove = document.getElementById("caramel-remove")
caramelRemove.addEventListener('click', function () {
    //console.log('caramel removed')
    var currQuan = checkoutItemsQuantity[8]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) - 1
    } else {
        var quantity = 0
    }
    updateRemove("caramelQ", quantity, 7, 8, 9)
})

//Defining GF's Remove button and adding an event listener to remove the item
var gfRemove = document.getElementById("gf-remove")
gfRemove.addEventListener('click', function () {
    //console.log('gf removed')
    var currQuan = checkoutItemsQuantity[10]
    if (parseInt(currQuan.innerText)) {
        var quantity = parseInt(currQuan.innerText) - 1
    } else {
        var quantity = 0
    }
    updateRemove("caramelQ", quantity, 8, 10, 11)
})



//Created a function to set the visibility of items "hidden" in the cart, allowing for items to be "revealed" once they are added to the cart and "hidden" once they are removed
function setVisibility(x, b) {
    if (x === undefined) {
        return
    }
    x.hidden = !b
    if (x.children.length < 1) {
        return
    }
    for (i = 0; i < x.children.length; i++) {
        var y = x.children[i]
        y.hidden = !b
    }
}



