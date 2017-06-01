function calendar(arr){
    let [day, month, year] = arr;
    let html = '<table>';
    html += ' <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    let currentDate = new Date(Date.UTC(year, month-1, 1));
    let lastDayOfPrevMonth = new Date(Date.UTC(year, month, 0)).getDate();

    if(currentDate.getDay() !== 0){
        currentDate = new Date(Date.UTC(year, month-2, lastDayOfPrevMonth - currentDate.getDay() + 1 ));
    }

    let prevMonth = new Date(Date.UTC(year, month-2, 1)).getMonth();
    let nextMonth = new Date(Date.UTC(year, month, 1)).getMonth();

    while (currentDate.getMonth() !== nextMonth || currentDate.getDay()!==0) {
        if(currentDate.getDay() === 0){
            html += '<tr>';
        }

        if(currentDate.getMonth() === prevMonth){
            html += `<td class="prev-month">${currentDate.getDate()}</td>`;
        }else if(currentDate.getMonth() === nextMonth){
            html += `<td class="next-month">${currentDate.getDate()}</td>`;
        }else if(currentDate.getDate() === day){
            html += `<td class="today">${currentDate.getDate()}</td>`;
        }else{
            html += `<td>${currentDate.getDate()}</td>`;
        }

        if(currentDate.getDay() == 6){
            html += "</tr>\n";
        }

        currentDate.setDate(currentDate.getDate()+1);

    }

    html += '</table>';
    return html;
}

// console.log(calendar([1, 9, 2017]));