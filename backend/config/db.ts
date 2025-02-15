import sql from 'mssql/msnodesqlv8';

const config = {
  server: 'DESKTOP-0EURR19',     // Your server name
  database: 'mydatabase',  // Replace with your database name
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
};

async function connectDB() {
  try {
    await sql.connect(config);
    console.log('Connected to the database!');
  } catch (err) {
    console.error('Database connection failed:', err);
  }
}

export default connectDB;
