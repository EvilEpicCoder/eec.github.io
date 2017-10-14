//EvilEpicCoder JavaScript text wrap script
//add class "info" in to the div and your big text inside will be
//autoshorted and after click text will unwrap into normal sise
var jEEC_info={
  "classSelector":"info",
  "textLimit":10,
  "short_text":[],
  "long_text":[],
  "toggle_flag":[],
  "start":function(){
    var el=document.getElementsByClassName(jEEC_info.classSelector);
    //el.addEventListener("click",buttons,false);
      for(var ea in el){
        if(el[ea].innerText!=undefined){
          el[ea].addEventListener("click",jEEC_info.click,false);
          jEEC_info.long_text[ea]=el[ea].innerHTML;
          var tempTextArr=el[ea].innerText.split(" ");
          jEEC_info.short_text[ea]=tempTextArr.filter(function(el,index){if(index<jEEC_info.textLimit)return el;}).join(" ");
          //console.log(this.toggle_text);
          el[ea].innerText=jEEC_info.short_text[ea];
          el[ea].innerHTML+='<hr><a class="eec-read-toggle-on" href=" #'+" "+'"target="_self"> read </a>';
          jEEC_info.toggle_flag.push("false");
        }
      }
    },
    "click":function(r){
          var el=document.getElementsByClassName(jEEC_info.classSelector);
         console.log(jEEC_info.toggle_flag+"toggle_flag");
            for(var i in el){
              if(r.currentTarget.innerText==el[i].innerText&&jEEC_info.toggle_flag[i]==false){
                //r.currentTarget.innerText==el[i].innerText&&
                // &&jEEC_info.toggle_flag[i]==false
                el[i].innerText=jEEC_info.short_text[i];
                jEEC_info.toggle_flag[i]=true;
                el[i].innerHTML+='<hr><a class="eec-read-toggle-on" href=" #'+" "+'"target="_self"> read </a>';
                //break;
              }else if(r.currentTarget.innerText==el[i].innerText&&jEEC_info.toggle_flag[i]!=false){
                el[i].innerHTML=jEEC_info.long_text[i];
                jEEC_info.toggle_flag[i]=false;
                el[i].innerHTML+='<hr><a class="eec-read-toggle-off" href=" #'+" "+'"target="_self"> close </a>';
                //break;
              }
            }
  }
}

// window.onload=function(event){
//   var a=new Object(jEEC_info);
//   a.start();
// }
