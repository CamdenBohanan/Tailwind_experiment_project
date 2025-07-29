const currentDate = new Date();

const day = currentDate.getDate();

const MonthNumber = currentDate.getDate();

const dayCell = document.createElement('div');
dayCell.classList.add('p-2', 'border', 'border-gray-200','min-h-10', 'flex','justify-center', 'items-center', 'cursor-pointer', 'rounded-md', 'm-0.5','text-sm'  );

if (MonthNumber) {
    dayCell.classList.add('bg-white', 'text-gray-800', 'hover:bg-gray-100');
} else {
    dayCell.classList.add('text-gray-400', 'bg-gray-50');
}

if (day) {
    dayCell.classList.add('bg-teal-100', 'border-2', 'border-teal-500', 'font-bold');
}

