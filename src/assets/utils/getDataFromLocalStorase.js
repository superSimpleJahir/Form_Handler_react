export const getDataFromLocalStorase =()=>{
  const data = localStorage.getItem('data')
  return data ? JSON.parse(data): []

}