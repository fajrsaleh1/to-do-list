(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},39:function(e,t,a){e.exports=a(93)},45:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(19),l=a.n(s),r=(a(45),a(35)),i=a(8),c=a(9),u=a(11),h=a(10),m=a(12),p=(a(15),a(13)),d=a.n(p),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={line:"false"},a.strikethrough=function(){"false"===a.state.line?a.setState({line:"strikethrough"}):a.setState({line:"false"})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("ul",null,o.a.createElement("li",{value:this.props.index,className:this.state.line},o.a.createElement("span",{onClick:this.strikethrough},this.props.taskData," "),o.a.createElement(d.a,{onClick:function(){return e.props.deleteTask(e.props.index)},variant:"light"},"\u274c"))))}}]),t}(n.Component),k=a(36),T=a.n(k),g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"quotesCopm"},o.a.createElement("p",{className:"qouites"}," \u275d ",this.props.currentQuotes,"\u275e"),o.a.createElement("p",{className:"author"},this.props.currentAuthor))}}]),t}(n.Component),v=a(37),E=a.n(v),b=a(20),w=a.n(b),y=a(38),j=a.n(y),D=a(14),S=a.n(D),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={newTask:"",allTheToDoList:[],quotes:"",quoteAuthor:"",myNewTask:[]},a.submitForm=function(e){e.preventDefault();var t=a.state.newTask;if(""!==t){var n=a.state.allTheToDoList.slice(0);n.push(t),a.setState({allTheToDoList:n,newTask:"",myNewTask:n}),localStorage.setItem("task",n)}},a.updateForm=function(e){var t=e.target.value;localStorage.setItem("task",t),a.setState({newTask:t})},a.deleteTask=function(e){var t=a.state.allTheToDoList.splice(e,1);a.setState(Object(r.a)({newTask:t},"newTask",""))},a.deleteAllTasks=function(e){var t=a.state.allTheToDoList;localStorage.clear(),t.splice(0),a.setState({allTheToDoList:t})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getQute",value:function(){var e=this;T()({method:"get",url:"https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"}).then(function(t){e.setState({quotes:t.data.quoteText,quoteAuthor:t.data.quoteAuthor})}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){localStorage.getItem("task")?this.setState({allTheToDoList:localStorage.getItem("task").split(",")}):localStorage.setItem("task",JSON.stringify(this.state.allTheToDoList)),console.log(localStorage.getItem("task")),this.getQute()}},{key:"render",value:function(){var e=this,t=this.state.allTheToDoList.map(function(t,a){return o.a.createElement(f,{taskData:t,index:a,deleteTask:e.deleteTask})});return o.a.createElement("div",null,o.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/draft-js/0.7.0/Draft.min.css"}),o.a.createElement("h1",null,"To Do List"),o.a.createElement(E.a,{className:"container"},o.a.createElement("form",{onSubmit:this.submitForm},o.a.createElement(w.a,null,o.a.createElement(j.a,{className:"inputTask",placeholder:"What are you doing today;)","aria-label":"Recipient's username","aria-describedby":"basic-addon2",type:"text",name:"task",onChange:this.updateForm,value:this.state.newTask}),o.a.createElement(w.a.Append,null,o.a.createElement(d.a,{type:"submit",variant:"light"},"ADD"),o.a.createElement(d.a,{variant:"light",onClick:this.deleteAllTasks},"CLEAR")))),o.a.createElement("h3",null," My To Do List \ud83d\udca1"),t),o.a.createElement(g,{currentQuotes:this.state.quotes,currentAuthor:this.state.quoteAuthor}),o.a.createElement(S.a,null,o.a.createElement(S.a.Toggle,null),o.a.createElement(S.a.Collapse,{className:"justify-content-end"},o.a.createElement(S.a.Text,null,"Fajr Saleh - Made with \ud83d\udc9e and a lot of \u2615"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.64ff023f.chunk.js.map