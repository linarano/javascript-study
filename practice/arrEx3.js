

const arr = [54,22,14,64,95,85]

//평균 => 모든 점수의 합(sum) / 개수

let sum = 0

for (let i = 0; i <arr.length; i++) {

    sum+=arr[i]
    console.log(`sum : ${sum}`)

}


//평균점수 구하기
let avg = (sum / arr.length).toFixed(3)
console.log("AVG : "+ avg)
console.log(`avg: ${avg}`)

//최저점수 구하기
let min = 101

for (let i = 0; i < arr.length ; i++) {
    const score = arr[i]
    //만일 score가 min보다 작으면 swap
    if (score < min){
        min =score
    }

}

console.log(min)


//최고

let max = -1

for (let i = 0; i < arr.length ; i++) {

    const score = arr[i]

    if(score > max){
        max = score

    }

}

console.log(`MAX : ${max}`)