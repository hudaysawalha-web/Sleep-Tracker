const sleepForm = document.forms['sleepForm'];

let sleepData = [];

if (localStorage.getItem("sleepData") != null) {
  sleepData = JSON.parse(localStorage.getItem("sleepData"))
}

sleepForm.onsubmit = (e) => {
  e.preventDefault();

  const sleepDaytrack = {
    day: sleepForm.day.value,
    date: sleepForm.date.value,
    quality: sleepForm.quality.value,
  };

  sleepData.push(sleepDaytrack);
  localStorage.setItem("sleepData", JSON.stringify(sleepData));
  displaySleepData();
}





const displaySleepData = () => {
  const result = sleepData.map((sleepDaytrack, index) => {
    return `<tr>
            <td>${index}</td>
            <td>${sleepDaytrack.day}</td>
            <td>${sleepDaytrack.date}</td>
            <td>${sleepDaytrack.quality.toUpperCase()}</td> 
            <td>
                <button class="btn btn-danger btn-sm" onclick="removeSleep(${index})">Delete</button>
            </td>
      </tr> `
  }).join('')

  document.querySelector(".data").innerHTML = result;
}

displaySleepData();

const removeSleep = (index) => {
sleepData.splice(index,1);
localStorage.setItem("sleepData", JSON.stringify(sleepData));
displaySleepData();
}

