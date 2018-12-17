const checkInDate = document.getElementById("checkInDate")
const checkOutDate = document.getElementById("checkOutDate")
const result = document.getElementById("result")
checkInDate.valueAsDate = new Date()
checkOutDate.valueAsDate = new Date()

function submitForm() {
    let checkIn = checkInDate.valueAsDate
    let checkOut = checkOutDate.valueAsDate
    let delta = checkOut.getTime() - checkIn.getTime()
    //
    result.innerText = delta <= 0 ? "Check-in date must be before check-out!" : "Valid date!"
}