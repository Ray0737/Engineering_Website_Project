let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Check Session
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) {
        window.location.replace('login.html');
        return;
    }

    const userDisplay = document.getElementById('user-display');
    if (userDisplay) userDisplay.innerText = session.user.email;

    renderCalendar();
});

// Toggle between Calendar and List
function setFilter(filter) {
    currentFilter = filter;

    const calendarEl = document.getElementById('calendarGrid');
    const listEl = document.getElementById('taskListView');

    if (filter === 'task') {
        calendarEl.classList.add('d-none');
        listEl.classList.remove('d-none');
        renderTaskList();
    } else {
        listEl.classList.add('d-none');
        calendarEl.classList.remove('d-none');
        renderCalendar(); // Your existing function
    }
}

async function renderTaskList() {
    const container = document.getElementById('taskListContainer');
    container.innerHTML = '<div class="col-12 text-center py-5"><div class="spinner-border spinner-border-sm"></div></div>';

    // Get date range for current month view
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-01`;
    const endDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${daysInMonth}`;

    const { data: tasks, error } = await supabaseClient
        .from('user_entries')
        .select('*')
        .eq('entry_type', 'task')
        .gte('date_time', startDate)
        .lte('date_time', endDate)
        .order('date_time', { ascending: true });

    if (error || !tasks || tasks.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5 text-muted">No tasks scheduled for this month.</div>';
        return;
    }

    container.innerHTML = ''; // Clear spinner
    tasks.forEach(task => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';

        // Sanitize task data for the onclick function
        const taskData = JSON.stringify(task).replace(/'/g, "&apos;");

        col.innerHTML = `
            <div class="card border-0 shadow-sm rounded-4 p-3 h-100 transition hover-shadow cursor-pointer" 
                 onclick='showEntryDetails(${taskData})'>
                <div class="d-flex justify-content-between align-items-start mb-2">
                    <span class="badge bg-dark rounded-pill px-2" style="font-size: 0.6rem; letter-spacing: 0.05em;">
                        ${task.subject ? task.subject.toUpperCase() : 'GENERAL'}
                    </span>
                    <div class="text-muted small" style="font-size: 0.7rem;">
                        <i class="bi bi-calendar3 me-1"></i>${task.date_time}
                    </div>
                </div>
                <h6 class="fw-bold mb-1 text-dark">${task.title}</h6>
                <p class="small text-secondary mb-0 text-truncate">${task.notes || 'No additional notes.'}</p>
            </div>
        `;
        container.appendChild(col);
    });
}

async function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const monthLabel = document.getElementById('monthDisplay');
    if (!grid || !monthLabel) return;

    const viewDate = new Date(currentYear, currentMonth);
    monthLabel.innerText = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
    }).format(viewDate);

    // Grid Headers
    grid.innerHTML = `
        <div class="calendar-header-day text-center fw-bold py-2">Sun</div>
        <div class="calendar-header-day text-center fw-bold py-2">Mon</div>
        <div class="calendar-header-day text-center fw-bold py-2">Tue</div>
        <div class="calendar-header-day text-center fw-bold py-2">Wed</div>
        <div class="calendar-header-day text-center fw-bold py-2">Thu</div>
        <div class="calendar-header-day text-center fw-bold py-2">Fri</div>
        <div class="calendar-header-day text-center fw-bold py-2">Sat</div>
    `;

    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Fetch Entries
    const startDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-01`;
    const endDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${daysInMonth}`;

    let query = supabaseClient.from('user_entries').select('*').gte('date_time', startDate).lte('date_time', endDate);
    if (currentFilter === 'task') query = query.eq('entry_type', 'task');

    const { data: entries, error } = await query;
    if (error) console.error("Fetch Error:", error.message);

    // Spacers
    for (let i = 0; i < firstDayIndex; i++) {
        const spacer = document.createElement('div');
        spacer.className = 'calendar-day bg-light opacity-50 border';
        grid.appendChild(spacer);
    }

    // Days
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day border p-1';
        cell.innerHTML = `<div class="fw-bold mb-1 small text-secondary">${day}</div><div class="pill-stack"></div>`;

        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayEntries = entries?.filter(e => e.date_time === dateStr) || [];

        const pillStack = cell.querySelector('.pill-stack');
        dayEntries.forEach(entry => {
            const pill = document.createElement('div');
            pill.className = `event-pill bg-${entry.entry_type} px-2 mb-1 small rounded-1 shadow-sm text-truncate`;

            const subjectTag = entry.subject ? `<strong>[${entry.subject}]</strong> ` : '';
            pill.innerHTML = `${subjectTag}${entry.title}`;

            // CLICK EVENT FOR THE PILL
            pill.onclick = (e) => {
                e.stopPropagation();
                showEntryDetails(entry);
            };

            pillStack.appendChild(pill);
        });

        grid.appendChild(cell);
    }
}

// THE POPUP FUNCTION
function showEntryDetails(entry) {
    try {
        // Fill the modal with data
        document.getElementById('detailTitle').innerText = entry.title;
        document.getElementById('detailDate').innerText = entry.date_time;
        document.getElementById('detailSubject').innerText = entry.subject || 'No Subject';
        document.getElementById('detailNotes').innerText = entry.notes || 'No extra notes.';

        const typeBadge = document.getElementById('detailType');
        typeBadge.innerText = entry.entry_type.toUpperCase();
        typeBadge.className = `badge rounded-pill px-3 ${entry.entry_type === 'task' ? 'bg-success' : 'bg-primary'}`;

        // Initialize and show the Bootstrap modal
        const modalElement = document.getElementById('detailModal');
        const bsModal = new bootstrap.Modal(modalElement);
        bsModal.show();

        // Setup Delete Button (Optional)
        const deleteBtn = document.getElementById('deleteEntryBtn');
        if (deleteBtn) {
            deleteBtn.onclick = () => deleteEntry(entry.id);
        }
    } catch (err) {
        console.error("Modal Error:", err);
    }
}

async function deleteEntry(id) {
    if (!confirm("Delete this entry?")) return;
    const { error } = await supabaseClient.from('user_entries').delete().eq('id', id);
    if (!error) {
        const modal = bootstrap.Modal.getInstance(document.getElementById('detailModal'));
        if (modal) modal.hide();
        renderCalendar();
    }
}

async function saveEntry() {
    const title = document.getElementById('entryTitle').value;
    const type = document.getElementById('entryType').value;
    const date = document.getElementById('entryDate').value;
    const subject = document.getElementById('entrySubject').value;
    const notes = document.getElementById('entryNotes').value;

    if (!title || !date) return alert("Please fill in Title and Date.");

    const { data: { user } } = await supabaseClient.auth.getUser();
    const { error } = await supabaseClient.from('user_entries').insert([
        { user_id: user.id, title, entry_type: type, subject, notes, date_time: date }
    ]);

    if (!error) {
        bootstrap.Modal.getInstance(document.getElementById('entryModal')).hide();
        renderCalendar();
    } else {
        alert(error.message);
    }
}

function changeMonth(diff) {
    currentMonth += diff;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar();
}