// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Roster staff (DATA)
// =============================================================
var staffs = [
  {
    routeName: "Managers",
    name: "Joe Walsh",
    role: "Project Manager",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all staffs
app.get("/api/staffs", function(req, res) {
  return res.json(staffs);
});

// Displays a single staff, or returns false
app.get("/api/staffs/:staff", function(req, res) {
  var chosen = req.params.staff;

  console.log(chosen);

  for (var i = 0; i < staffs.length; i++) {
    if (chosen === staffs[i].routeName) {
      return res.json(staffs[i]);
    }
  }

  return res.json(false);
});

// Create New staffs - takes in JSON input
app.post("/api/staffs", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newstaff = req.body;

  // Using a RegEx Pattern to remove spaces from newstaff
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newstaff.routeName = newstaff.name.replace(/\s+/g, "").toLowerCase();

  console.log(newstaff);

  staffs.push(newstaff);

  res.json(newstaff);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
