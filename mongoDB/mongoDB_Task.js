// 1 - command: 
// use FacultySystemDB;
// --------------------
// 2 - command:
db.createCollection("student");
db.student.insertOne({
  id: 1,
  FirstName: 'Ahmed',
  LastName: 'Mohamed',
  Age: 24,
  Faculty: { Name: 'Commerce', Address: 'Mansoura' },
  Grades: [
    { CourseName: 'Nodejs', Grade: 'Excellent', Pass: true },
    { CourseName: 'javaScript', Grade: 'Good', Pass: false }
  ],
  IsFired: true
});

// Try inserting many documents using one insert statement?
db.student.insertOne([
  { id: 3, FirstName: 'Nada', LastName: 'Ahmed', Age: 27 },
  { id: 4, FirstName: 'Omar', LastName: 'Reda', Age: 17 },
  { id: 5, FirstName: 'Mona', LastName: 'Ahmed', Age: 19 }
]);

// - Return One Document with have 3 keys echo key have one document.
// ---------------------
// 3 - command:
db.student.find();
db.student.findOne({ FirstName: "Ahmed" });
db.student.find({ $or: [{ FirstName: "Ahmed" }, { LastName: "Ahmed" }] });
db.student.find({ FirstName: { $ne: "Ahmed" } });
db.student.find({ Age: { $lt: 21 } });
db.student.find({ IsFired: true });
db.student.find({ $and: [{ Age: { $gte: 21 } }, { Faculty: { $ne: null } }] });
db.student.find({}, { FirstName: 1, LastName: 1, IsFired: 1, _id: 0 });
db.student.updateMany({ FirstName: "Ahmed" }, { $set: { LastName: 'Mohamed' } });
db.student.updateMany({}, { $unset: { IsFired: "" } });
db.student.drop();
db.FacultySystem.drop();
