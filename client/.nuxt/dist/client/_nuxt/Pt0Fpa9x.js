import{_ as d,c as i,p as r,v as n,a as s,q as p,o as l}from"./fwwaM3pC.js";const m={data(){return{name:"",price:""}},methods:{async addGoods(){try{const o={name:this.name,price:this.price},e=await this.$axios.post("/addGood",o);console.log(e)}catch(o){console.error("Error fetching goods:",o)}}}};function c(o,e,u,f,h,a){return l(),i("form",{onSubmit:e[2]||(e[2]=p(t=>a.addGoods(),["prevent"]))},[r(s("input",{type:"text",name:"name","onUpdate:modelValue":e[0]||(e[0]=t=>this.name=t),placeholder:"Name"},null,512),[[n,this.name]]),r(s("input",{type:"number",name:"price","onUpdate:modelValue":e[1]||(e[1]=t=>this.price=t),placeholder:"price"},null,512),[[n,this.price]]),e[3]||(e[3]=s("button",{type:"submit"},"Add goods",-1))],32)}const y=d(m,[["render",c]]);export{y as default};
