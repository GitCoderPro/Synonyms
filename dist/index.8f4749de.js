const e=document.getElementById("input"),t=document.getElementById("list"),n=document.getElementById("search-btn"),c=document.getElementById("delete"),a=document.getElementById("info");async function d(){try{let n="https://api.datamuse.com/words?rel_syn="+e.value,c=await fetch(n,{cache:"no-cache"});if(200===c.status){let n=await c.json();a.innerHTML=`Synonyms to ${e.value}:`,n.forEach(e=>{let n=document.createElement("li");n.textContent=e.word,t.append(n)})}}catch(e){alert("An error occurred!")}}n.addEventListener("click",d),c.addEventListener("click",function(){t.innerHTML=""});
//# sourceMappingURL=index.8f4749de.js.map
