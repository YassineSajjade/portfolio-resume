(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,s,c){},function(e,s,c){},,function(e,s,c){},function(e,s,c){},,function(e,s,c){},function(e,s,c){},function(e,s,c){},,,function(e,s,c){},function(e,s,c){"use strict";c.r(s);var a=c(1),t=c.n(a),l=c(7),i=c.n(l),n=(c(14),c(15),c(16),c(2)),r=c(3),d=c(5),o=c(4),j=(c(17),c(18),c(0)),b=function(e){Object(d.a)(c,e);var s=Object(o.a)(c);function c(e){var a;return Object(n.a)(this,c),(a=s.call(this,e)).handleActive=function(){a.setState({active:!a.state.active})},a.handleAbout=function(){a.setState({aboutLink:!0,resumeLink:!1,contactLink:!1,myProjectsLink:!1})},a.handleResume=function(){a.setState({aboutLink:!1,resumeLink:!0,contactLink:!1,myProjectsLink:!1})},a.handleContact=function(){a.setState({aboutLink:!1,resumeLink:!1,contactLink:!0,myProjectsLink:!1})},a.handleMyProjects=function(){a.setState({aboutLink:!1,resumeLink:!1,contactLink:!1,myProjectsLink:!0})},a.handleScroll=function(){window.scrollY>70?a.setState({nav:!0}):a.setState({nav:!1})},a.state={active:!1,nav:!1,aboutLink:!1,resumeLink:!1,contactLink:!1,myProjectsLink:!1},a}return Object(r.a)(c,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:this.state.nav?"menu menu--active":"menu",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",style:{width:"100%"},children:[Object(j.jsx)("div",{className:"menu__wrapper d-none d-lg-block col-md-12",style:{width:"100%"},children:Object(j.jsx)("nav",{className:"",children:Object(j.jsxs)("ul",{className:"",children:[Object(j.jsx)("li",{className:"",children:Object(j.jsx)("a",{className:this.state.aboutLink?"link_active":"null",href:"#about",onClick:this.handleAbout,children:"About"})}),Object(j.jsx)("li",{className:"",children:Object(j.jsx)("a",{className:this.state.resumeLink?"link_active":"null",href:"#resume",onClick:this.handleResume,children:"Resume"})}),Object(j.jsx)("li",{className:"",children:Object(j.jsx)("a",{className:this.state.myProjectsLink?"link_active":"null",href:"#myprojects",onClick:this.handleMyProjects,children:"My projects"})}),Object(j.jsx)("li",{className:"",children:Object(j.jsx)("a",{className:this.state.contactLink?"link_active":"null",href:"#contact",onClick:this.handleContact,children:"Contact"})})]})})}),Object(j.jsx)("div",{className:"menu__wrapper col-md-12 d-lg-none",style:{marginTop:"20px"},children:Object(j.jsx)("button",{className:"menu__mobile-button",type:"button",onClick:this.handleActive,children:Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"fas fa-bars","aria-hidden":"true"})})})})]})})}),Object(j.jsx)("div",{className:this.state.active?"mobile-menu d-lg-none active":"mobile-menu d-lg-none",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"mobile-menu__close",onClick:this.handleActive,children:Object(j.jsx)("span",{children:Object(j.jsx)("i",{className:"fas fa-times"})})}),Object(j.jsx)("nav",{className:"mobile-menu__wrapper",children:Object(j.jsxs)("ul",{className:"",children:[Object(j.jsx)("li",{className:"",children:Object(j.jsx)("a",{className:"",href:"#about",onClick:this.handleActive,children:"About"})}),Object(j.jsx)("li",{className:"",children:Object(j.jsx)("a",{className:"",href:"#resume",onClick:this.handleActive,children:"Resume"})}),Object(j.jsx)("li",{className:"",children:Object(j.jsx)("a",{className:"",href:"#myprojects",onClick:this.handleActive,children:"My Projects"})}),Object(j.jsx)("li",{className:"",children:Object(j.jsx)("a",{className:"",href:"#contact",onClick:this.handleActive,children:"Contact"})})]})})]})})]})}}]),c}(a.Component),h=c.p+"static/media/profile.274934b3.png",m=(c(20),function(e){Object(d.a)(c,e);var s=Object(o.a)(c);function c(){return Object(n.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"about",id:"about",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row personal-profile",children:[Object(j.jsx)("div",{className:"col-md-4 personal-profile-image",children:Object(j.jsx)("img",{src:h,alt:"profile-avatar"})}),Object(j.jsxs)("div",{className:"col-md-8",children:[Object(j.jsx)("p",{className:"personal-profile__name",children:"Yassine Sajjade"}),Object(j.jsx)("p",{className:"personal-profile__work",children:"Mobile & Web developer"}),Object(j.jsx)("div",{className:"personal-profile__contacts",children:Object(j.jsx)("div",{className:"contact-list contact-list__opacity-titles",children:Object(j.jsxs)("dl",{children:[Object(j.jsx)("dt",{children:"AGE:"}),Object(j.jsx)("dd",{children:"21"}),Object(j.jsx)("dt",{children:"PHONE:"}),Object(j.jsx)("dd",{children:"+212 6-7518-1648"}),Object(j.jsx)("dt",{children:"EMAIL:"}),Object(j.jsx)("dd",{children:"yassinesajjade@gmail.com"}),Object(j.jsx)("dt",{children:"ADDRESS:"}),Object(j.jsx)("dd",{children:"Sidi maarouf, CASABLANCA"})]})})}),Object(j.jsxs)("p",{className:"personal-profile__social",children:[Object(j.jsx)("a",{href:"#",className:"hvr-pulse",children:Object(j.jsx)("i",{className:"fab fa-github-square"})}),Object(j.jsx)("a",{href:"#",className:"hvr-pulse",children:Object(j.jsx)("i",{className:"fab fa-linkedin"})}),Object(j.jsx)("a",{href:"#",className:"hvr-pulse",children:Object(j.jsx)("i",{className:"fab fa-facebook-square"})})]})]})]})})}),Object(j.jsx)("section",{className:"section_about",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{className:"section_title ","data-aos":"fade-right",children:"Hi_"}),Object(j.jsx)("p",{children:"I am Junior Mobile & Web developer able to build applications from the ground up(concept, navigation, layout and programming). Skilled at writing well-designed, testable and efficient code using current best practices. Passionate,fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools."})]})}),Object(j.jsx)("hr",{})]})}}]),c}(a.Component)),O=c(8),x=(c(21),function(e){Object(d.a)(c,e);var s=Object(o.a)(c);function c(){return Object(n.a)(this,c),s.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("section",{className:"section_resume",id:"resume",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h2",{className:"section_title ","data-aos":"fade-right",children:"Resume_"})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md-8 section_education",children:[Object(j.jsx)("h3",{className:"education_title",children:"EDUCATION"}),Object(j.jsxs)("div",{className:"education_block",children:[Object(j.jsx)("p",{className:"education_block_title",children:"IT-Learning Campus Casablanca, FST de Settat"}),Object(j.jsx)("p",{className:"education_block_date",children:"2019 - 2020"}),Object(j.jsx)("p",{children:"LICENCE PRO EN INGENIERIE DES APPLICATIONS MOBILES"})]}),Object(j.jsxs)("div",{className:"education_block",children:[Object(j.jsx)("p",{className:"education_block_title",children:"ISTA-NTIC 2 Sidi Maarouf"}),Object(j.jsx)("p",{className:"education_block_date",children:"2017 - 2019"}),Object(j.jsx)("p",{children:"DTS EN D\xe9VELOPPEMENT INFORMATIQUE"})]}),Object(j.jsxs)("div",{className:"education_block",children:[Object(j.jsx)("p",{className:"education_block_title",children:"Lyc\xe9e Mohamed 6"}),Object(j.jsx)("p",{className:"education_block_date",children:"2016 - 2017"}),Object(j.jsx)("p",{children:"BAC SVT"})]})]})}),Object(j.jsxs)("div",{className:"row progress_list",children:[Object(j.jsx)("div",{className:"col-md-12 section-skills",children:Object(j.jsx)("h3",{className:"skills_title",children:"SKILLS"})}),Object(j.jsxs)("div",{className:"col-md-5 mr-auto",children:[Object(j.jsxs)("div",{className:"skills_block",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"skill_block_title",children:"JAVA"}),Object(j.jsx)("span",{className:"skill_block_value",children:"90%"})]}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",Object(O.a)({className:"progress_bar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"90",role:"progressbar",style:{backgroundColor:"#1f5bb1",width:"90%"},"data-aos":"fade-right"},"data-aos","fade-right"))})]}),Object(j.jsxs)("div",{className:"skills_block",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"skill_block_title",children:"JavaScript"}),Object(j.jsx)("span",{className:"skill_block_value",children:"80%"})]}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress_bar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"80",role:"progressbar",style:{backgroundColor:"#1f5bb1",width:"80%"},"data-aos":"fade-right"})})]}),Object(j.jsxs)("div",{className:"skills_block",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"skill_block_title",children:"PHP"}),Object(j.jsx)("span",{className:"skill_block_value",children:"70%"})]}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress_bar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"70",role:"progressbar",style:{backgroundColor:"#1f5bb1",width:"70%"},"data-aos":"fade-right"})})]}),Object(j.jsxs)("div",{className:"skills_block",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"skill_block_title",children:"HTML 5"}),Object(j.jsx)("span",{className:"skill_block_value",children:"80%"})]}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress_bar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"80",role:"progressbar",style:{backgroundColor:"#1f5bb1",width:"80%"},"data-aos":"fade-right"})})]})]}),Object(j.jsxs)("div",{className:"col-md-5 mr-auto",children:[Object(j.jsxs)("div",{className:"skills_block",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"skill_block_title",children:"CSS"}),Object(j.jsx)("span",{className:"skill_block_value",children:"70%"})]}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress_bar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"70",role:"progressbar",style:{backgroundColor:"#1f5bb1",width:"70%"},"data-aos":"fade-right"})})]}),Object(j.jsxs)("div",{className:"skills_block",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"skill_block_title",children:"ReactJS"}),Object(j.jsx)("span",{className:"skill_block_value",children:"80%"})]}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress_bar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"80",role:"progressbar",style:{backgroundColor:"#1f5bb1",width:"80%"},"data-aos":"fade-right"})})]}),Object(j.jsxs)("div",{className:"skills_block",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"skill_block_title",children:"BootStrap"}),Object(j.jsx)("span",{className:"skill_block_value",children:"75%"})]}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress_bar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"75",role:"progressbar",style:{backgroundColor:"#1f5bb1",width:"75%"},"data-aos":"fade-right"})})]}),Object(j.jsxs)("div",{className:"skills_block",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"skill_block_title",children:"LARAVEL"}),Object(j.jsx)("span",{className:"skill_block_value",children:"67%"})]}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"progress_bar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":"67",role:"progressbar",style:{backgroundColor:"#1f5bb1",width:"67%"},"data-aos":"fade-right"})})]})]})]})]})}),Object(j.jsx)("hr",{})]})}}]),c}(a.Component)),u=c.p+"static/media/logo2.e41098cb.png",p=c.p+"static/media/covid-19.b0f597f7.PNG",v=c.p+"static/media/bon-app.3318ec5b.mp4",N=(c(22),function(e){Object(d.a)(c,e);var s=Object(o.a)(c);function c(e){var a;return Object(n.a)(this,c),(a=s.call(this,e)).closeVideo=function(){a.setState({display:!1}),a.btnClose.current.pause()},a.openVideo=function(){a.setState({display:!0})},a.btnClose=t.a.createRef(),a.state={display:!1},a}return Object(r.a)(c,[{key:"render",value:function(){var e=this.state.display?Object(j.jsx)("div",{className:"frame_video",style:{display:"block",overflow:"auto"},children:Object(j.jsxs)("div",{className:"container",style:{width:"80%",background:"#0E3994",marginTop:"10%"},children:[Object(j.jsx)("div",{className:"row close_video",children:Object(j.jsx)("span",{onClick:this.closeVideo,children:Object(j.jsx)("i",{className:"fas fa-times"})})}),Object(j.jsx)("div",{className:"row video",children:Object(j.jsx)("video",{style:{height:"30rem"},ref:this.btnClose,controls:!0,children:Object(j.jsx)("source",{src:v,type:"video/mp4"})})})]})}):Object(j.jsx)("div",{className:"frame_video",style:{display:"none"},children:Object(j.jsxs)("div",{className:"container",style:{width:"80%",background:"#0E3994",marginTop:"10%"},children:[Object(j.jsx)("div",{className:"row close_video",children:Object(j.jsx)("span",{onClick:this.closeVideo,children:Object(j.jsx)("i",{className:"fas fa-times"})})}),Object(j.jsx)("div",{className:"row video",children:Object(j.jsx)("video",{style:{height:"30rem"},ref:this.btnClose,controls:!0,children:Object(j.jsx)("source",{src:v,type:"video/mp4"})})})]})});return Object(j.jsxs)("section",{className:"section_myprojects container",id:"myprojects",children:[e,Object(j.jsx)("h2",{className:"section_title","data-aos":"fade-right",children:"My projects_"}),Object(j.jsx)("div",{className:"card mb-3","data-aos":"fade-right",children:Object(j.jsxs)("div",{className:"row no-gutters",children:[Object(j.jsx)("div",{className:"col-md-5 colImg",children:Object(j.jsx)("img",{className:"imgCovid19 hvr-bounce-in",src:p,alt:""})}),Object(j.jsx)("div",{className:"col-md-7 colDesc",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:"WEB SITE FOR COVID-19"}),Object(j.jsx)("p",{className:"card-text",children:"web site full responsive for COVID-19 CORONAVIRUS PANDEMIC STATISTICS"}),Object(j.jsx)("p",{className:"card-text-link",children:Object(j.jsx)("a",{className:"text-muted",href:"https://friendly-ride-4d005d.netlify.app/",children:"https://friendly-ride-4d005d.netlify.app"})})]})})]})}),Object(j.jsx)("div",{className:"card mb-3","data-aos":"fade-right",children:Object(j.jsxs)("div",{className:"row no-gutters",children:[Object(j.jsx)("div",{className:"col-md-5 colImg",children:Object(j.jsx)("img",{className:"logoMobApp hvr-bounce-in",src:u,alt:""})}),Object(j.jsx)("div",{className:"col-md-7 colDesc",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:"ANDROID APP FOR COUPON MANAGEMENT"}),Object(j.jsx)("p",{className:"card-text",children:"A mobile application(android) to take advantage of available offers and manage coupons(vouchers)"}),Object(j.jsx)("p",{className:"card-text-link",children:Object(j.jsx)("small",{className:"text-muted",onClick:this.openVideo,children:"watch demo of the APP"})})]})})]})})]})}}]),c}(a.Component)),f=c(9),k=c.n(f),_=(c(25),function(e){Object(d.a)(c,e);var s=Object(o.a)(c);function c(){var e;Object(n.a)(this,c);for(var a=arguments.length,t=new Array(a),l=0;l<a;l++)t[l]=arguments[l];return(e=s.call.apply(s,[this].concat(t))).sendEmail=function(e){e.preventDefault(),k.a.sendForm("service_4u3xu66","template_2e2rf5q",e.target,"user_53jsRktFU77cOjJD0Huyv").then((function(e){alert("Your message send with success !!"),console.log(e.text)}),(function(e){console.log(e.text),alert(e.text)})),e.target.reset()},e}return Object(r.a)(c,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"contact_background",id:"contact",children:Object(j.jsxs)("div",{className:"container contact_section",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)("p",{className:"contact_title","data-aos":"fade-right",children:"Get in touch_"})})}),Object(j.jsxs)("div",{className:"row contacts",children:[Object(j.jsxs)("div",{className:"col-md-5 col-lg-4",children:[Object(j.jsx)("div",{className:"contact_list",children:Object(j.jsxs)("dl",{children:[Object(j.jsx)("dt",{children:"PHONE:"}),Object(j.jsx)("dd",{children:"+212 6-7518-1648"}),Object(j.jsx)("dt",{children:"EMAIL:"}),Object(j.jsx)("dd",{children:"yassinesajjade@gmail.com"})]})}),Object(j.jsx)("div",{className:"contact_social",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"hvr-pulse",children:"Facebook"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"hvr-pulse",children:"GitHub"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",className:"hvr-pulse",children:"Linkedin"})})]})})]}),Object(j.jsx)("div",{className:"col-md-7 col-lg-5",children:Object(j.jsxs)("div",{className:"contact_form",children:[Object(j.jsx)("p",{className:"contact_form_title",children:"Or just write me a letter here"}),Object(j.jsxs)("form",{onSubmit:this.sendEmail,children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Your name",name:"name",required:!0})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"email",className:"form-control",placeholder:"Your e-mail",name:"email",required:!0})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Type your message here",name:"message",required:!0})}),Object(j.jsx)("button",{className:"btn btn_send",type:"submit",children:"send"})]}),Object(j.jsx)("p",{className:"footer",children:"\xa9 2020 Yassine Sajjade. All Rights Reserved"})]})})]})]})})}}]),c}(a.Component));var g=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{}),Object(j.jsx)(m,{}),Object(j.jsx)(x,{}),Object(j.jsx)(N,{}),Object(j.jsx)(_,{})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,27)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,l=s.getLCP,i=s.getTTFB;c(e),a(e),t(e),l(e),i(e)}))};i.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),y()}],[[26,1,2]]]);
//# sourceMappingURL=main.e51017b2.chunk.js.map