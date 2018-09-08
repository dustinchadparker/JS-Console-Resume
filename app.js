let name = "Dustin Parker";
let career = "Atomic Student";
let description = "I want to create the code for consciousness.";

let myInterests = ["Coding", "Pool", "Games", "Swimming"];


console.log("Name: " + name.toUpperCase());
console.log("Career: " + career);
console.log("Description: " + description + "\n");
console.log("\nMy Interests: ");

for (i = 0; i < myInterests.length; i++) {
    console.log("* " + myInterests[i]);
}

console.log("\nMy Previous Experience:");
displayPosition("Some School", "Math, Chemistry, Physics, Biology, and English tutor", "Tutored students in those areas.");
displayPosition("University of Georgia", "Undergraduate Teaching Assistant", "Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.");
displayPosition("Georgia Museum of Art", "Lead Programmer for iBeacon Experiment", "Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.");

console.log("\nMy Skills:");
displaySkill("Spanish", false);
displaySkill("Trombone", true);
displaySkill("Java", false);
displaySkill("C/C++", false);
displaySkill("Opera Singing", true);
displaySkill("JavaScript", false);
displaySkill("Python", true);


/* Logs skill and if that skill is cool. */
function displaySkill(skillName, isCool) {
    if(isCool == true) {
        console.log("* BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
};

/* Logs name of company, job title, and job description. */
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("* " + jobTitle + " at " + companyName + " - " + jobDescription);
};