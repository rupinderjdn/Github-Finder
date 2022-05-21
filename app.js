// Init github
const github = new Github;

//Init UI
const ui = new UI;
// Search input
const searchUser = document.getElementById("searchUser")

// Search input event listener
searchUser.addEventListener("keyup", (e) => {
    const userText = e.target.value.trim()
    if (userText !== "") {
        // console.log(userText)
        // make HTTP call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show Alert
                    ui.showAlert('User Not found','alert alert-danger');
                }
                else {
                    //Show profile
                    // console.log(data.profile)
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                }
            })
    }
    // else {
    //     //clear profile
    //     ui.clearProfile();
    // }
})