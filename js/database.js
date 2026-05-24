const databases = new Appwrite.Databases(client);

const DATABASE_ID = '65fa92d1948332db9c6d';
const COLLECTION_ID = '65fa92daef45b73d2b21'; // Real Collection ID mapped

async function fetchUserLogs(userId) {
    try {
        const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [Appwrite.Query.equal('userId', userId)]
        );
        return response.documents;
    } catch (error) {
        console.error("Error fetching documents from Appwrite:", error);
        return [];
    }
}

async function saveLog(logData) {
    try {
        const response = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            Appwrite.ID.unique(),
            {
                userId: logData.userId,
                type: logData.type,
                content: logData.content,
                timestamp: logData.timestamp || new Date().toISOString()
            }
        );
        return response;
    } catch (error) {
        console.error("Error writing document to Appwrite:", error);
        throw error;
    }
}

// Global Exports
window.databases = databases;
window.fetchUserLogs = fetchUserLogs;
window.saveLog = saveLog;
