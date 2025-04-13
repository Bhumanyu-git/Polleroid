function conduct_poll() {
    let candidates = []
    no_candidates = prompt("No. of candidates: ")
    no_candidates = Number.parseInt(no_candidates)
    for(let i = no_candidates; i > 0; i--) {
        c = prompt(`Candidate ${i}: `)
        candidates.push(c)
    }
    let voters = prompt("No. of voters: ")
    if(candidates.length > 0) {
        for(i = Number.parseInt(voters); i > 0; i--) {
            let name = prompt("Name: ")
            let vote = prompt("Vote: ")
            confirm(`Mr./Mrs. ${name}, do you want to give your vote to ${vote}?`)
            let result = document.getElementById("result")
            let row = result.insertRow(0)
            let cell_name = row.insertCell(0)
            let cell_vote = row.insertCell(1)
            cell_name.innerHTML = name
            cell_vote.innerHTML = vote
        }
    }
    else {
        alert("No candidates found!")
    }
}