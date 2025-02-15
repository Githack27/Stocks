import sql from 'mssql';


const config = {
    user: 'myuser1', // SQL Server login username
    password: '252003', // SQL Server login password
    server: 'DESKTOP-0EURR19', // Server name or IP address
    database: 'mydatabase', // Database name
    options: {
        encrypt: true, // Use encryption (for Azure or SSL)
        trustServerCertificate: true, // Trust self-signed certificates
        enableArithAbort: true // Recommended for SQL Server
    }
};

async function connectToDatabase() {
    try {
        await sql.connect(config);
        console.log('Database connection successful!');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

connectToDatabase();