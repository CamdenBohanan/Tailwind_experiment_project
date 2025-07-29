document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    function renderCalendar(month, year) {
        calendarEl.innerHTML = ''; 

        const firstDayOfMonth = new Date(year, month, 1).getDay(); 
        const daysInMonth = new Date(year, month + 1, 0).getDate(); 

     
        const calendarHeader = document.createElement('div');
        
        calendarHeader.classList.add('flex', 'justify-between', 'items-center', 'mb-4', 'p-3', 'bg-gray-200', 'rounded-md');
        calendarHeader.innerHTML = `
            <button id="prevMonth" class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 transition-colors">&laquo;</button>
            <h3 class="text-lg font-semibold text-black">${new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
            <button id="nextMonth" class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-400 transition-colors">&raquo;</button>
        `;
        calendarEl.before(calendarHeader);

        
        document.getElementById('prevMonth').addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            calendarHeader.remove(); 
            renderCalendar(currentMonth, currentYear);
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            calendarHeader.remove(); 
            renderCalendar(currentMonth, currentYear);
        });

       
        calendarEl.classList.add('grid', 'grid-cols-7', 'gap-1', 'text-center');

        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(dayName => {
            const dayNameDiv = document.createElement('div');
           
            dayNameDiv.classList.add('font-bold', 'p-2', 'bg-yellow-500', 'rounded-sm', 'text-sm', 'md:text-base');
            dayNameDiv.textContent = dayName;
            calendarEl.appendChild(dayNameDiv);
        });

   
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('p-2', 'bg-yellow-400', 'invisible'); 
            calendarEl.appendChild(emptyDiv);
        }


        const today = new Date();
        for (let i = 1; i <= daysInMonth; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;
     
            dayDiv.classList.add('p-2', 'border', 'border-gray-200', 'rounded-md', 'bg-white', 'hover:bg-blue-50', 'cursor-pointer', 'transition-colors', 'text-base');

         
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
               
                dayDiv.classList.add('bg-yellow-500', 'text-black', 'font-bold', 'shadow-md');
            }
            calendarEl.appendChild(dayDiv);
        }
    }

    renderCalendar(currentMonth, currentYear);
});