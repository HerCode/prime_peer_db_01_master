var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assingmentSchema = new Schema({
assignment_number: Number,
student_name: String,
score: Number,
date_completed: Date,
});

var Assignment = mongoose.model('assignment', assignmentSchema);

module.exports = Assignment;
