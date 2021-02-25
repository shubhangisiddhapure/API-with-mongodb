module.exports = (app) => {
    const student = require('../controller/student.js');
    
    // Create a new student
    app.post('/student', student.create);
 
    // Get all student
    app.get('/student', student.getAll);
};