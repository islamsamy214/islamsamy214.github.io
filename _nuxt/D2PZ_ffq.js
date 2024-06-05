import{_ as d,o,c as l,f as A,r as L,a,g as P,t as i,u as t,b as c,p as v,e as b,F as h,h as f,n as g,i as E,j}from"./DgoSE78j.js";import{_ as C}from"./DdJFFOfM.js";import{u as m}from"./BxmHG740.js";import{u as N}from"./D9Yetw8i.js";import"./Dka4pXdH.js";import"./BQkc-AXV.js";const z={},D={class:"fixed opacity-15 -z-10 min-w-screen min-h-screen top-20 md:right-64 uppercase text-6xl md:text-9xl font-black"};function H(n,e){return o(),l("span",D," About")}const G=d(z,[["render",H]]),U=A("/images/profile.jpg"),V={class:"flex flex-col md:flex-row items-center gap-16 mt-10 md:mt-28"},B={class:"md:w-1/3 h-full"},F={src:U,class:"relative object-cover opacity-50 hover:opacity-100 transition-all h-full"},O={class:"md:w-1/2 min-h-full flex flex-col gap-8"},Q={class:"text-3xl md:text-5xl font-light md:mb-8"},R={class:"text-gray-400 text-lg md:text-xl"},M=a("a",{href:"/files/resume.pdf",target:"_blank",download:"",class:"text-lg md:text-xl text-emerald-500 cursor-pointer"},"Checkout my resume",-1),q={__name:"Hero",setup(n){const{profile:e}=m();return(_,u)=>{const p=C,s=L("parallax");return o(),l("div",V,[a("div",B,[P(a("img",F,null,512),[[s,{speed:.5}]])]),a("div",O,[a("h1",Q," Hi! I'm "+i(t(e).name),1),a("p",R,i(t(e).intro),1),M,c(p)])])}}},r=n=>(v("data-v-e6c2753d"),n=n(),b(),n),T={class:"flex flex-col gap-4 md:gap-8 xl:px-36"},W={class:"flex flex-col gap-4 md:gap-8"},X=r(()=>a("h3",{class:"text-xl md:text-3xl text-white font-bold"},"Profile",-1)),J={class:"text-lg md:text-xl"},K={class:"text-gray-400 text-lg md:text-xl"},Y={class:"flex flex-col gap-2 md:gap-4"},Z={class:"info-contianer"},aa=r(()=>a("span",null,"Name: ",-1)),ea={class:"info-contianer"},ta=r(()=>a("span",null,"Address: ",-1)),na={class:"info-contianer"},sa=r(()=>a("span",null,"Email: ",-1)),ia=["href","title"],oa={class:"info-contianer"},la=r(()=>a("span",null,"Phone: ",-1)),ca=["href","title"],pa={class:"info-contianer"},da=r(()=>a("span",null,"Alt Phone: ",-1)),ra=["href","title"],_a={__name:"Profile",setup(n){const{profile:e}=m();return(_,u)=>(o(),l("div",T,[a("div",W,[X,a("h4",J,i(t(e).header),1),a("p",K,i(t(e).description),1)]),a("div",Y,[a("div",Z,[aa,a("p",null,i(t(e).name),1)]),a("div",ea,[ta,a("p",null,i(t(e).address),1)]),a("div",na,[sa,a("a",{href:"mailto:"+t(e).email,title:"Email "+t(e).email+" directly"},i(t(e).email),9,ia)]),a("div",oa,[la,a("a",{href:"tel:"+t(e).phoneNumber,title:"Call "+t(e).phoneNumber+" directly"},i(t(e).phone),9,ca)]),a("div",pa,[da,a("a",{href:"tel:"+t(e).altPhoneNumber,title:"Call "+t(e).altPhoneNumber+" directly"},i(t(e).altPhone),9,ra)])])]))}},ua=d(_a,[["__scopeId","data-v-e6c2753d"]]),ma={},va={class:"w-full h-0.5 bg-gray-500 my-8 opacity-15"};function ba(n,e){return o(),l("div",va)}const x=d(ma,[["render",ba]]),y=n=>(v("data-v-8b8b3ecc"),n=n(),b(),n),ha={class:"flex flex-col gap-4 md:gap-8 xl:px-36"},fa=y(()=>a("h3",{class:"text-xl md:text-3xl text-white font-bold"},"Experience",-1)),ga={class:"flex gap-2 justify-between items-center"},xa={class:"flex gap-2"},ya=y(()=>a("span",null,"-",-1)),wa={__name:"Experience",setup(n){const{experiences:e}=m();return(_,u)=>{const p=x;return o(),l("div",ha,[fa,(o(!0),l(h,null,f(t(e),s=>(o(),l("div",{class:"flex flex-col gap-4 text-lg md:text-xl",key:s.title},[a("div",ga,[a("div",xa,[a("h4",null,i(s.title),1),ya,a("h5",null,i(s.company),1)]),a("div",null,[a("span",null,i(s.year),1)])]),a("div",null,[a("span",null,i(s.location),1)]),c(p,{class:g({hidden:t(e)[t(e).length-1]===s})},null,8,["class"])]))),128))])}}},Sa=d(wa,[["__scopeId","data-v-8b8b3ecc"]]),w=n=>(v("data-v-8cc6e722"),n=n(),b(),n),$a={class:"flex flex-col gap-4 md:gap-8 xl:px-36"},Ia=w(()=>a("h3",{class:"text-xl md:text-3xl text-white font-bold"},"Education",-1)),ka={class:"flex gap-2 justify-between items-center"},Aa={class:"flex gap-2"},La=w(()=>a("span",null,"-",-1)),Pa={__name:"Education",setup(n){const{educations:e}=m();return(_,u)=>{const p=x;return o(),l("div",$a,[Ia,(o(!0),l(h,null,f(t(e),s=>(o(),l("div",{class:"flex flex-col gap-4 text-lg md:text-xl",key:s.title},[a("div",ka,[a("div",Aa,[a("h4",null,i(s.title),1),La,a("h5",null,i(s.university),1)]),a("div",null,[a("span",null,i(s.year),1)])]),a("div",null,[a("span",null,i(s.location),1)]),c(p,{class:g({hidden:t(e)[t(e).length-1]===s})},null,8,["class"])]))),128))])}}},Ea=d(Pa,[["__scopeId","data-v-8cc6e722"]]),ja={},Ca={class:"flex flex-col gap-4 md:gap-8"},Na=E('<ul class="list-disc list-outside text-lg md:text-xl flex flex-col gap-4 md:gap-6 px-4" data-v-e566ba07><li data-v-e566ba07><p data-v-e566ba07> Proficient in front-end technologies, including <span data-v-e566ba07>Nuxt.js</span>, <span data-v-e566ba07>Vue.js</span>, <span data-v-e566ba07>JavaScript (ES6)</span>, <span data-v-e566ba07>jQuery</span>, <span data-v-e566ba07>Ajax</span>, <span data-v-e566ba07>HTML5</span>, <span data-v-e566ba07>CSS3</span>, <span data-v-e566ba07>Tailwindcss</span>, <span data-v-e566ba07>Bootstrap</span>, and of course <span data-v-e566ba07>SEO</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Experienced in <span data-v-e566ba07>PHP</span> programming language and adhering to best practices, with strong skills in <span data-v-e566ba07>Object-Oriented Programming (OOP)</span>. I have previously utilized <span data-v-e566ba07>Laravel</span> and <span data-v-e566ba07>Lumen</span> frameworks extensively in development, recently, I have also acquired valuable skills in <span data-v-e566ba07>Golang</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Proficient in caching strategies for optimizing application performance using <span data-v-e566ba07>File caching</span> or even <span data-v-e566ba07>Redis caching</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Skilled in implementing real-time features utilizing <span data-v-e566ba07>Redis</span> for efficient data handling. </p></li><li data-v-e566ba07><p data-v-e566ba07> High proficiency in various queuing systems for scalable and efficient data processing such as <span data-v-e566ba07>Kafka</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Expertise in indexing and searching using <span data-v-e566ba07>Elasticsearch</span> and <span data-v-e566ba07>Laravel Scout</span> for efficient and robust search functionality. </p></li><li data-v-e566ba07><p data-v-e566ba07> I excel in handling relational databases, particularly proficient with <span data-v-e566ba07>MySQL</span> and <span data-v-e566ba07>MSSQL</span> in recent projects, and of course, <span data-v-e566ba07>SQLite</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Strong skilled with <span data-v-e566ba07>NoSQL databases</span> and their different structures such as <span data-v-e566ba07>MongoDB</span>, <span data-v-e566ba07>Elasticsearch</span>, and even basic knowledge of column-family stores such as <span data-v-e566ba07>Apache Cassandra</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Well-versed in <span data-v-e566ba07>RESTful APIs</span> and possess extensive knowledge of <span data-v-e566ba07>GraphQL</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Highly proficient in <span data-v-e566ba07>Docker</span>, with a record of accomplishment of practical implementations. </p></li><li data-v-e566ba07><p data-v-e566ba07> Recently acquired <span data-v-e566ba07>DevOps</span> skills with <span data-v-e566ba07>AWS cloud</span>, including Cloud Fundamentals such as static hosting with <span data-v-e566ba07>S3</span> and promotion with <span data-v-e566ba07>CloudFront</span>. I am familiar with <span data-v-e566ba07>VPC</span> functionality and capable of creating private networks manually and using automation. Proficient in deploying Infrastructure as Code (IaC) with <span data-v-e566ba07>AWS CloudFormation</span> and building <span data-v-e566ba07>CI/CD</span> pipelines using <span data-v-e566ba07>CircleCI</span> and <span data-v-e566ba07>GitHub</span>. Experienced in Monitoring &amp; Logging with <span data-v-e566ba07>Prometheus</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Solid understanding of <span data-v-e566ba07>Git</span> essentials and version control systems, including <span data-v-e566ba07>GitHub</span> and <span data-v-e566ba07>GitLab</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Currently practicing and gaining expertise in <span data-v-e566ba07>bash scripting</span> using <span data-v-e566ba07>Linux</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Familiar with the foundations of <span data-v-e566ba07>Agile methodologies</span>. </p></li><li data-v-e566ba07><p data-v-e566ba07> Proficient in <span data-v-e566ba07>SOLID principles</span> and <span data-v-e566ba07>Design Patterns</span>, having achieved exceptional grades in this field. </p></li><li data-v-e566ba07><p data-v-e566ba07> Competent in <span data-v-e566ba07>UI/UX</span> and <span data-v-e566ba07>Graphic Design</span>, which is also a personal hobby. Proficient in utilizing <span data-v-e566ba07>Adobe Illustrator</span>, <span data-v-e566ba07>Adobe Photoshop</span>, and <span data-v-e566ba07>Adobe XD</span> to bring creative ideas to life. </p></li><li data-v-e566ba07><p data-v-e566ba07> Possess excellent <span data-v-e566ba07>soft skills</span>, including effective <span data-v-e566ba07>communication</span>, <span data-v-e566ba07>teamwork</span>, <span data-v-e566ba07>leadership</span>, and <span data-v-e566ba07>critical thinking</span> abilities. </p></li></ul>',1),za=[Na];function Da(n,e){return o(),l("div",Ca,za)}const Ha=d(ja,[["render",Da],["__scopeId","data-v-e566ba07"]]),Ga={class:"flex flex-col gap-16"},Ra={__name:"index",setup(n){const e=j();return N({title:"About Islam Samy - Software Engineer",meta:[{name:"description",content:"Learn more about Islam Samy, a software engineer specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js. Based in Dubai, UAE."},{name:"keywords",content:"About Islam Samy, software engineer, web development, Laravel, Golang, Nuxt.js, Vue.js, Dubai, UAE"},{property:"og:title",content:"About Islam Samy - Software Engineer"},{property:"og:description",content:"Learn more about Islam Samy, a software engineer specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js."},{property:"og:type",content:"website"},{property:"og:url",content:e.public.appUrl+"/about"},{property:"og:image",content:e.public.appUrl+"/images/profile.jpg"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:"About Islam Samy - Software Engineer"},{name:"twitter:description",content:"Specialized in web development using Laravel, Golang, Nuxt.js, and Vue.js."},{name:"twitter:image",content:e.public.appUrl+"/images/profile.jpg"},{name:"twitter:site",content:"@zolom214"},{name:"twitter:creator",content:"@zolom214"}],link:[{rel:"canonical",href:e.public.appUrl+"/about"}]}),(_,u)=>{const p=G,s=q,S=ua,$=Sa,I=Ea,k=Ha;return o(),l("div",Ga,[c(p),c(s),c(S),c($),c(I),c(k)])}}};export{Ra as default};