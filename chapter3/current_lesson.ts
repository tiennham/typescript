// lesson 26: continue keyword

let ignore_guy = "cung dau"

let team_guys = ["ninh than", "cung dau", "xinh dep", "culi", "leader"]

for (let i = 0; i < team_guys.length; i++) {
    if (team_guys[i] == 'cung dau') {
        continue
    }
    console.log(`${team_guys[i]}, You have 1000$ for your efforce!!`)
}

export { }
