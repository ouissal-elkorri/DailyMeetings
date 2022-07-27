const input = document.querySelector("input")
const log = document.getElementById("values")
input.addEventListener("input", updateValue)

function updateValue(e) {
  //log.textContent = e.target.value
  const date = e.target.value /*get the selected date*/
  const splitDate =
    date.split("-") /*split the month variable from the year variable*/
  var year = splitDate[0]
  var month = splitDate[1]
  function dailyMeetings(month, year) {
    /*output: an array where we will push our records*/
    const output = []
    /*the entries*/
    var entries = [
      {
        length: 900,
        timestamp: "2022-06-01T00:00:00.000Z",
        workItemId: 3648,
        comment: "",
        activityTypeId: "98923dd9-a6dc-4173-bb39-9b53e60593b7",
        userId: "45913ed9-5bb3-41cc-b89f-af890bab2e33",
      },
      {
        length: 900,
        timestamp: "2022-06-01T00:00:00.000Z",
        workItemId: 2985,
        comment: "",
        activityTypeId: "98923dd9-a6dc-4173-bb39-9b53e60593b7",
        userId: "45913ed9-5bb3-41cc-b89f-af890bab2e33",
      },
    ]

    /*know if a day is a part of the weeknend : true if saturday or sunday and false if not*/
    /* Sunday is 0 and Saturday is 6 */
    function isWeekend(date = new Date()) {
      return date.getDay() === 6 || date.getDay() === 0
    }

    const ent = Object.values(entries)
    //const t = ent[0].timestamp

    m = month - 1 //because the months in js start from 0 not 1 (if we chose 2 it won't be February it will be March)*/
    let firstDay = new Date(
      Date.UTC(year, m, 1)
    ) /*set the first day of the month*/
    let lastDay = new Date(
      Date.UTC(year, m + 1, 0)
    ) /*set the last day of the month*/

    const calculateDifference = () => {
      return (
        (new Date(Date.UTC(year, m + 1, 1)).getTime() - firstDay.getTime()) /
        86400 /
        1000
      )
    }

    for (let i = 1; i <= calculateDifference(); i++) {
      const d = new Date(Date.UTC(year, m, i))
      ent[0].timestamp = d
      ent[1].timestamp = d
      if (!isWeekend(d)) {
        output.push([{ ...ent[0] }, { ...ent[1] }])
      }
    }
    //console.log(output)

    /* Put the result in the textarea */
    document.getElementById("values").innerHTML = JSON.stringify(
      output,
      null,
      2
    )
    //document.getElementById("parag").innerHTML = JSON.stringify(output, null, 4)
  }
  dailyMeetings(month, year)
}

function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("values")

  /* Select the text field */
  copyText.select()

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value)

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value)
}
