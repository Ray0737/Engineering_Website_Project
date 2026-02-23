const SB_URL = "https://hbgknlafjtowoxgwpjyq.supabase.co";
const SB_KEY = "sb_publishable_sGBdjzYXFS9Tz3uDpe7loA_RpmUnxEj";
const supabaseClient = supabase.createClient(SB_URL, SB_KEY);

// State flag to prevent mobile "redirect loops"
let isRedirecting = false;

document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    setupListeners();
});

function setupListeners() {
    const loginBtn = document.getElementById('loginBtn');
    const regBtn = document.getElementById('regBtn');
    const navLogoutBtn = document.getElementById('nav-logout-btn');

    // Using onclick or addEventListener both work; sticking to your preference
    if (loginBtn) loginBtn.addEventListener('click', handleLogin);
    if (regBtn) regBtn.addEventListener('click', handleRegister);
    if (navLogoutBtn) navLogoutBtn.addEventListener('click', handleLogout);
}

function initAuth() {
    // Initial check for current session to handle immediate page loads
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
        handleRedirectLogic(session);
        updateNoticeableUI(session);
    });

    // Listen for auth changes (Login, Logout, Token Refresh)
    supabaseClient.auth.onAuthStateChange((event, session) => {
        // Only trigger heavy redirect logic on major events to save mobile battery/data
        if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
            handleRedirectLogic(session);
        }
        updateNoticeableUI(session);
    });
}

function handleRedirectLogic(session) {
    if (isRedirecting) return;

    const path = window.location.pathname;
    const isAuthPage = path.endsWith('login.html') || path.endsWith('register.html');
    const isHubPage = path.endsWith('index.html');

    // 1. If logged in, always push to calendar (unless already there)
    if (session && (isAuthPage || isHubPage)) {
        isRedirecting = true;
        window.location.replace('calendar.html'); // replace prevents back-button loops
    }

    // 2. If guest tries to access calendar, push to login
    if (!session && path.includes('calendar.html')) {
        isRedirecting = true;
        window.location.replace('login.html');
    }
}

// --- LOGIN LOGIC ---
// --- IMPROVED LOGIN LOGIC ---
async function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPass').value;
    const errorMsg = document.getElementById('errorMsg');
    const btn = document.getElementById('loginBtn');

    if (!email || !password) return;

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Checking...';

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
        btn.disabled = false;
        btn.innerText = 'Sign In';
        errorMsg.classList.remove('d-none');
        errorMsg.classList.replace('alert-success', 'alert-danger');

        // Check specifically for the "Email not confirmed" error
        if (error.message.includes("Email not confirmed")) {
            errorMsg.innerHTML = `
                <i class="bi bi-envelope-exclamation-fill me-2"></i>
                <strong>Email not verified!</strong><br>
                Please check your inbox and click the link.
            `;
        } else if (error.status === 400 || error.message.includes("Invalid login credentials")) {
            errorMsg.innerText = "Incorrect passcode or email.";
        } else {
            errorMsg.innerText = error.message;
        }
    }
    // Success is handled by your onAuthStateChange listener
}

// --- REGISTER LOGIC WITH POPUP ---
async function handleRegister() {
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPass').value;
    const regMsg = document.getElementById('regMsg');
    const btn = document.getElementById('regBtn');

    // Password validation regex
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // 1. Check if fields are empty
    if (!email || !password) {
        showRegError("Please fill in all fields.");
        return;
    }

    // 2. Validate Password Strength
    if (!passwordRegex.test(password)) {
        showRegError("Password must have 8+ chars, 1 capital, 1 number, and 1 special char.");
        return;
    }

    // 3. Start Supabase Sign Up
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Creating Account...';

    const { data, error } = await supabaseClient.auth.signUp({ email, password });

    if (error) {
        btn.disabled = false;
        btn.innerText = 'Create Account';
        showRegError(error.message);
    } else {
        btn.innerHTML = '<i class="bi bi-envelope-check me-2"></i> Sent!';
        btn.classList.replace('btn-primary', 'btn-success');

        if (regMsg) {
            regMsg.classList.remove('d-none', 'alert-danger');
            regMsg.classList.add('alert-success');
            regMsg.innerHTML = `<strong>Success!</strong> Confirmation sent to:<br><b>${email}</b>`;
        }
        setTimeout(() => window.location.replace('login.html'), 5000);
    }
}

function showRegError(msg) {
    const regMsg = document.getElementById('regMsg');
    if (regMsg) {
        regMsg.classList.remove('d-none', 'alert-success');
        regMsg.classList.add('alert-danger');
        regMsg.innerText = msg;
    }
}
// --- LOGOUT LOGIC ---
async function handleLogout() {
    await supabaseClient.auth.signOut();
    // replace stops the user from hitting "back" and seeing the private data again
    window.location.replace('index.html');
}

function updateNoticeableUI(session) {
    const navLogin = document.getElementById('nav-login-btn');
    const navLogout = document.getElementById('nav-logout-btn');
    const navUser = document.getElementById('user-info');
    const displayEmail = document.getElementById('user-email-display');
    const calendarUserDisplay = document.getElementById('user-display'); // For your Calendar page

    // Update the specific calendar email display if it exists
    if (calendarUserDisplay && session) calendarUserDisplay.innerText = session.user.email;

    // Status Bar / Nav UI logic
    const statusIndicator = document.getElementById('status-indicator');
    const statusText = document.getElementById('status-text');
    const statusIcon = document.getElementById('status-icon');
    const statusEmail = document.getElementById('status-email');
    const calendarLock = document.getElementById('calendar-lock-icon');

    if (session) {
        if (navLogin) navLogin.classList.add('d-none');
        if (navLogout) navLogout.classList.remove('d-none');
        if (navUser) navUser.classList.remove('d-none');
        if (displayEmail) displayEmail.innerText = session.user.email;

        if (statusIndicator) {
            statusIndicator.className = "alert alert-success py-1 px-3 small shadow-sm d-flex align-items-center justify-content-between border-0 rounded-pill mt-2";
            statusText.innerText = "Logged in as:";
            statusIcon.className = "bi bi-check-circle-fill me-2 text-success";
            statusEmail.innerText = session.user.email;
        }

        if (calendarLock) {
            calendarLock.classList.replace('bi-lock-fill', 'bi-arrow-right');
            calendarLock.classList.replace('text-muted', 'text-primary');
        }
    } else {
        if (navLogin) navLogin.classList.remove('d-none');
        if (navLogout) navLogout.classList.add('d-none');
        if (navUser) navUser.classList.add('d-none');

        if (statusIndicator) {
            statusIndicator.className = "alert alert-secondary py-1 px-3 small shadow-sm d-flex align-items-center justify-content-between border-0 rounded-pill mt-2";
            statusText.innerText = "Guest Mode (Private Archive Locked)";
            statusIcon.className = "bi bi-exclamation-circle-fill me-2 text-muted";
            statusEmail.innerText = "";
        }

        if (calendarLock) {
            calendarLock.classList.replace('bi-arrow-right', 'bi-lock-fill');
            calendarLock.classList.replace('text-primary', 'text-muted');
        }
    }
}