const sleeptracker = document.forms['sleepForm'];

let sleepData = [];

if (localStorage.getItem("sleepData") != null) {

    sleepData = JSON.parse(localStorage.getItem("sleepData"))
    console.log(sleepData);
}

sleeptracker.onsubmit = function (e) {

    e.preventDefault();

    const sleepDaytrack = {
        day: sleeptracker.day.value,
        date: sleeptracker.date.value,
        quality: sleeptracker.quality.value,
    };


    sleepData.push(sleepDaytrack);
    localStorage.setItem("sleepData", JSON.stringify(sleepData));
    displaysleepHistory();
}



displaysleepHistory = () => {
    const result = sleepData.map(function (sleepDataDay, index) {
      
        return `<tr>
          <td>${sleepDataDay.day}</td>
          <td>${sleepDataDay.date}</td>
          <td>${sleepDataDay.quality}</td>
          <td><button  class="removebutton btn btn-danger" onclick="removeSleepDay(${index})" >remove</button></td>
        </tr>`
    });



    document.querySelector('.data').innerHTML = result.join('');


}

const removeSleepDay = (index) => {
    sleepData.splice(index, 1);
    localStorage.setItem("sleepData", JSON.stringify(sleepData));
    displaysleepHistory();


}



displaysleepHistory();


