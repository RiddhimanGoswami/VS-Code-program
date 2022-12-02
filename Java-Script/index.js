var feedback = [];

let addFeedback = () => {
  let input = document.getElementById("feedback");
  feedback.push(input.value);
  console.log("feedback: ", feedback);
  input.value = "";
  document.getElementById("result").innerHTML =
    "<h2>Feedback added successfully!</h2>";
};

let viewFeedback = () => {
  let result = document.getElementById("result");
  result.innerHTML = "";
  result.innerHTML += "<h2>All Feedbacks</h2><br/><ul>";
  for (let i = 0; i < feedback.length; i++) {
    result.innerHTML += "<li>" + feedback[i] + "</li>";
  }
  result.innerHTML += "</ul>";
};
let deleteFeedback = () => {
   feedback = []
   document.getElementById("result").innerHTML =
   "<h2>All feedback deleted!</h2>"
}