function solution(my_string, overwrite_string, s) {
  const array = [...my_string]
  
  array.splice(s, overwrite_string.length, overwrite_string)

  return array.join('')
}