const Student= require('../model/student.js');

// Create and Save a new student record
exports.create = (req, res) => {
    // Validate request because in model we required the student name
    if(!req.body.name) {
        return res.status(400).send({
            message: "Please enter student name."
        });
    }
 
    // Create a student recoed
    const student = new Student({
        name: req.body.name,
        subject: req.body.subject,
        age:req.body.age,
    });
 
    // Save student record in the database
    student.save()
        .then(oStudent => {
            res.send(oStudent);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the student record."
        });
    });
 };



 // Get all and return all student record.
exports.getAll = (req, res) => {
    Student.find()
        .then(oStudent => {
            res.send(oStudent);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the student record."
        });
    });
 };