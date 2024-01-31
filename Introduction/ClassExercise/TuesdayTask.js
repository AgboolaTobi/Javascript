const studenttScores =  [95, 78,85,60,45,92]

    // const result = studenttScores.map((eachScore)=> eachScore >= 90, console.log("For scores between 90 and 100, grade is ", "A"));

    // const result2 = studenttScores.map((eachScore)=> eachScore >= 80 <= 89, console.log("For scores between 80 and 89, grade is ", "B"))

    // const result3 = studenttScores.map((eachScore)=> eachScore >= 70 <= 79, console.log("For scores between 70 and 79, grade is ", "C"))


    // const result4 = studenttScores.map((eachScore)=> eachScore >= 60 <= 69, console.log("For scores between 60 and 69, grade is ", "D"))

    // const result5 = studenttScores.map((eachScore)=> eachScore < 60, console.log("For scores below, grade is ", "F"))




    const answer = studenttScores.map((score)=> score < 60 ? "F": score <= 69 ? "D": score <= 79 ? "C" : score <= 89 ? "B" : score <= 100 ? "A":"Invalid score")
    console.log(answer)


    // function gradePicker(scores){
    //     let result ;
    //     for

    // }

