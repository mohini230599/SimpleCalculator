export function display(props){
    console.log("x"+props);
     document.getElementById("result").value +=props;
}
export function solve(){
  let exp=document.getElementById("result").value;
  document.getElementById("result").value =eval(exp);
}
export function clear(){
  document.getElementById("result").value ='';
}