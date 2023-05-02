import{r as x,c as f,u as p,a as b,d as t,F as v,j as e,k as w,s as N}from"./index-b88c2340.js";import{i as y,a as F}from"./ToastifyAlerts-2e3f510d.js";import{u as C}from"./UserAuthentications-dac01475.js";const S=()=>{const[n,i]=x.useState({email:"",password:""});return{handleInputChange:a=>{const{name:s,value:l}=a.target;i({...n,[s]:l})},isValidForm:a=>{a.preventDefault();let s=!0;for(const l in n)n[l].trim()||(s=!1);return s},loginFormData:n}};function k(){const{userSignInGoogleAuth:n}=C(),i=f(),r=p(),{doLogin:c}=b(),{handleInputChange:a,isValidForm:s,loginFormData:l}=S();return t(v,{children:[e("div",{className:"h-screen flex justify-center items-center bg-gradient-to-r from-green-300 to-blue-400",children:t("div",{className:"drop-shadow-2xl pt-5 lg:flex bg-gradient-to-r w-full lg:w-4/5 shadow-lg h-screen lg:h-4/5 lg:rounded-2xl from-green-300 to-blue-400",children:[t("div",{className:"flex flex-col lg:w-2/5 mx-4 justify-center",children:[t("div",{className:"flex p-4 justify-center items-center ",children:[e("img",{className:"lg:w-1/5 w-1/5 mb-6",src:"./Images/LOGO.png",alt:"LOGO"}),e("p",{className:"text-5xl ml-2 font-bold text-green-900 drop-shadow-lg",children:"SWARM"})]}),e("div",{className:"flex justify-center lg:mb-32 lg:ml-16",children:t("p",{className:"font-bold text-xl",children:["Join the hive mind of productivity. ",e("br",{})," Swarm in and get things done"]})})]}),t("div",{className:"lg:mx-16 lg:w-3/5 p-4",children:[t("div",{className:"flex flex-col justify-center p-4 lg:mt-5 text-center",children:[e("p",{className:"font-bold text-xl lg:text-6xl mb-3 text-indigo-900",children:"Login"}),e("p",{className:"font-bold text-xl lg:text-2xl mt-2 text-gray-700",children:"Together we acheive"})]}),t("div",{className:"flex flex-col justify-center mt-5",children:[e("div",{className:"text-center",children:t("div",{className:"flex justify-center",children:[t("button",{onClick:async()=>{n()},type:"button",className:"text-white w-auto bg-[#4285F4] hover:bg-[#4285F4]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2",children:[e("svg",{className:"w-auto h-4 mr-2 -ml-1","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"google",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512",children:e("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})}),"Sign in with Google"]}),e("button",{onClick:()=>r("/otp"),type:"button",className:"text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2",children:"Sign in with OTP"})]})}),t("div",{className:"flex mt-2 px-6",children:[e("hr",{className:"w-full dark:bg-black mt-3 mr-2"}),e("p",{className:"text-gray-600",children:"OR"}),e("hr",{className:"w-full text-blue-50  mt-3 ml-2"})]})]}),t("form",{onSubmit:async d=>{if(!s(d)){y();return}try{const o=await c(l),{userId:m,name:g,email:h,accessToken:u}=o;i(N({userId:m,name:g,email:h,accessToken:u})),r("/home")}catch(o){F(o.msg)}},children:[t("div",{className:"mt-5 px-6",children:[e("input",{name:"email",onChange:a,value:l.email,type:"text",placeholder:"Email,Mobile",className:"rounded-lg p-2  w-full "}),e("br",{})]}),t("div",{className:"mt-5 px-6",children:[e("input",{name:"password",onChange:a,value:l.password,type:"text",placeholder:"Password",className:"rounded-lg p-2  w-full "}),e("br",{})]}),e("div",{className:"mt-5 px-5 text-white hover:text-green-900",children:e("p",{onClick:()=>r("/resetpassword"),children:"Forgot Password?"})}),e("div",{className:"mt-5 flex justify-center",children:e("button",{type:"submit",className:"text-white lg:w-2/6 bg-gradient-to-br to-green-800 from-blue-600 hover:bg-gradient-to-bl  shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",children:e("span",{className:"text-lg",children:"Sign Up"})})})]}),e("div",{className:"mt-2",children:t("p",{className:"text-blue-900 text-right text-lg",children:["Dont have an account yet?",e("span",{onClick:()=>{r("/register")},className:"text-white underline ml-4 hover:text-green-900 hover:cursor-pointer",children:"Register"})]})})]})]})}),e(w,{})]})}function P(){return e("div",{children:e(k,{})})}export{P as default};
