import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
/*let solved = nameSolver(); i tried calling this function but the problem was that the req.body will not be ready as at 
this position of calling it, so i have to correct that by doing it inside the POST handler
*/
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {Output:"Enter your names here"});
});

app.post("/submit", (req, res) => {
  //this line is written here so that the request body can be passed or accessed
  let fname = req.body.fname; //i can also get it lik this
  //let fname = req.body["fname"]; //collecting the data, 
  let lname = req.body["lname"]; //collecting the data

  let fullnameCount = nameSolver(fname, lname); // so to solve that problem i had to call the name solver function here 
  console.log(fullnameCount);

   res.render("index.ejs", {
    Output: `There are ${fullnameCount} letters in your name.`
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

function nameSolver(fname, lname){ //here i passed the recieved data from the req.body as parameters
  let fullname = (fname + lname).length; // or at the end i could have written fullname.length, to count the charcter in A STRING
  return fullname;
}

//note u cannot use req.body outside the HTTP method handlers, except u pass them as parameters if u want to use the outside