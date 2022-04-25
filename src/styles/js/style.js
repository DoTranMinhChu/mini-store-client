function changeClass(idChange,className){
   let elementChange = document.getElementById(idChange);
   elementChange.classList.toggle(className)
}
export default changeClass;