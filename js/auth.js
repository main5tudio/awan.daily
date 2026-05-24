const client = new Appwrite.Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65fa9194e9f9bd927f61');

const account = new Appwrite.Account(client);

async function checkSession() {
    try {
        const session = await account.get();
        window.appState.user = session;
        console.log("Logged in as:", session.name);
        
        // Pull database entries immediately after login verified
        if (window.fetchUserLogs) {
            window.appState.logs = await window.fetchUserLogs(session.$id);
        }
        
        // Refresh UI
        if (typeof window.renderCalendar === 'function') window.renderCalendar();
        if (typeof window.renderLastActivities === 'function') window.renderLastActivities();
        
        return session;
    } catch (error) {
        console.log("No active session found.");
        window.appState.user = null;
        return null;
    }
}

async function login(email, password) {
    try {
        await account.createEmailPasswordSession(email, password);
        return await checkSession();
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
}

async function logout() {
    try {
        await account.deleteSession('current');
        window.appState.user = null;
        window.appState.logs = [];
        if (typeof window.renderCalendar === 'function') window.renderCalendar();
        if (typeof window.renderLastActivities === 'function') window.renderLastActivities();
    } catch (error) {
        console.error("Logout failed:", error);
    }
}

// Global Exports
window.account = account;
window.checkSession = checkSession;
window.login = login;
window.logout = logout;
