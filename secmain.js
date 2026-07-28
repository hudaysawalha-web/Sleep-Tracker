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
    const result = sleepData.map(function (sleepData) {
        return `<tr>
          <td>${sleepData.day}</td>
          <td>${sleepData.date}</td>
          <td>${sleepData.quality}</td>
        </tr>`
    });

    console.log(result);

    let datatable = document.querySelector('.data').innerHTML = result.join('');


}




displaysleepHistory();



