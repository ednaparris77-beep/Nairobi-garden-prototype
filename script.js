document.addEventListener('DOMContentLoaded', function () {
  const daySelect   = document.getElementById('day');
  const monthSelect = document.getElementById('month');
  const yearSelect  = document.getElementById('year');
  const fullDate    = document.getElementById('full-date');

  // Populate days (01 to 31)
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement('option');
    option.value = i.toString().padStart(2, '0');  // "01", "02", ..., "31"
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Populate years (current year - 5 to current + 5 is enough for reservations)
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 5; i <= currentYear + 5; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }

  // Function to update hidden YYYY-MM-DD field
  function updateFullDate() {
    const d = daySelect.value;
    const m = monthSelect.value;
    const y = yearSelect.value;

    if (d && m && y) {
      fullDate.value = `${y}-${m}-${d}`;   // e.g. 2026-02-15
    } else {
      fullDate.value = '';
    }
  }

  // Listen for changes on all three selects
  daySelect.addEventListener('change', updateFullDate);
  monthSelect.addEventListener('change', updateFullDate);
  yearSelect.addEventListener('change', updateFullDate);
});