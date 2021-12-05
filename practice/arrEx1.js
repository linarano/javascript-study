

const avengers = ['타노스', '아이언맨', '블랙 위도우']

// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

//맨마지막에 추가, 반환값으로 배열의 길이반환
const changedLength = avengers.push("블랙팬서")
console.log(changedLength)

//지정된 요소를 찾을 수 있는 첫번째 인덱스 반환, 그렇지않으면 -1
console.log(avengers.indexOf('신데렐라'))//-1
console.log(avengers)

//
avengers.splice(1,1,"헐크")
console.log(avengers)


for (let i = 0; i < avengers.length ; i++) {
    if(avengers[i] === '블랙 위도우'){
        continue
    }
    console.log(i)
    console.log(avengers[i])
}

console.log("-------------------------")
for (let i = 0; i < avengers.length ; i++) {
    if(avengers[i] === '블랙 위도우'){
        break
    }
    console.log(i)
    console.log(avengers[i])
}
////////
