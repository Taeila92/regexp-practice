let str = `
010-1234-2231
kim920125@naver.com.
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
thunder
hxdp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

const regexp = new RegExp('the', 'g')
console.log(str.match(regexp)) //["the"]
const regexp1 = new RegExp('the', 'gi')
console.log(str.match(regexp1)) //(2) ["The", "the"]
const regexp2 = /co/gi
console.log(str.match(regexp2)) //(2) ["co", "Co"]
const regexp3 = /fox/gi
console.log(regexp3.test(str)) // true
const regexp4 = /taeila/gi
console.log(regexp3.test(str)) // false
console.log(str.replace(regexp3, 'AAA')) // 원본에는 영향을 주지않음
/*
010-1234-2231
kim920125@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown AAA jumps over the lazy dog.
abbcccdddd
*/

console.log(str.match(/\.$/gim)) // (2) [".", "."]

console.log(
  str.match(/d$/gm) // ["d"]
) 

console.log(
  str.match(/^t/gim) // (2) ["T", "t"]
)

console.log(
  str.match(/h..p/g) //(2) ["http", "hxdp"]
)

console.log(
  str.match(/fox|dog/g) // (2) ["fox", "dog"]
)

console.log(
  str.match(/https?/g) // (2) ["https", "http"]
)
console.log(
  str.match(/d{2}/g) // (2) ["dd", "dd"]
)
console.log(
  str.match(/d{2,}/g) // (2) ["dddd"]
)
console.log(
  str.match(/d{2,3}/g) // (2) ["ddd"]
)
console.log(
  str.match(/\w{2,3}/g) // (45) ["010", "123", "223", "kim", "920", "125", "nav", "er", "com", "htt", "ps", "www", "omd", "bap", "com", "api", "key", "703", "5c6", "0c", "fro", "zen", "The", "qui", "ck", "bro", "wn", "fox", "jum", "ps", "ove", "the", "laz", "dog", "abb", "ccc", "ddd", "thu", "nde", "hxd", "htt", "loc", "alh", "ost", "123"]
)
console.log(
  str.match(/\b\w{2,3}\b/g) // (8) ["010", "com", "www", "com", "The", "fox", "the", "dog"]
)
console.log(
  str.match(/[fox]/g) // (14) ["o", "o", "o", "f", "o", "o", "f", "o", "x", "o", "o", "x", "o", "o"]
)
console.log(
  str.match(/[0-9]{1,}/g) // (7) ["010", "1234", "2231", "920125", "7035", "60", "1234"]
)
console.log(
  str.match(/[가-힣]{1,}/g) // (4) ["동해물과", "백두산이", "마르고", "닳도록"]
)
console.log(
  str.match(/\w/g) 
)
console.log(
  str.match(/\bf\w{1,}\b/g) // (2) ["frozen", "fox"]
)
console.log(
  str.match(/\d{1,}/g) // (7) ["010", "1234", "2231", "920125", "7035", "60", "1234"]
)

const h = `   the hello world     !


`
console.log(
  h.replace(/\s/g, '') // thehelloworld!
)

console.log(
  str.match(/.{1,}(?=@)/g) // kim920125
)
console.log(
  str.match(/(?<=@).{1,}/g) // ["naver.com."]
)
