	  Vue.component('dynamicnav', {
		  template: `<div><nav id="fixednav" class="navbar navbar-dark navbar-expand-sm navstyle fixednav">
			  <!--<a class="navbar-brand" href="#"><span class="brand">DebLabs</span></a>-->
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			    <span style="color:white;" class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="collapsibleNavbar">
			    <ul class="navbar-nav mr-auto">
			      <template v-for="item in menu">
			      	  <li class="nav-item dropdown" v-if="item.dropdown">
					        <a class="nav-link dropdown-toggle linkstyleactive" href="#" v-if="item.selected==true" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          	{{item.name}}
					        </a>
					        <a class="nav-link dropdown-toggle linkstyle" v-else href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          	{{item.name}}
					        </a>
					        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               					<a class="dropdown-item" v-for="ditem in item.dropdown" v-bind:href="ditem.link">{{ditem.name}}</a>
               				</div>
				      </li>	
				      <li class="nav-item" v-else>
				        	<a class="nav-link linkstyleactive" v-if="item.selected==true" v-on:click="choose(item.name)" v-bind:href="item.link">{{item.name}}</a>
				        	<a class="nav-link linkstyle" v-else v-on:click="choose(item.name)" v-bind:href="item.link">{{item.name}}</a>
				      </li>
				  </template>                
			    </ul>
				<form class="form-inline">
					<input class="form-control mr-sm-2" type="text" placeholder="Search">
				</form>			    
			  </div>  
			</nav>
			<nav id="nav" class="navbar navbar-dark navbar-expand-sm navstyle">
			  <!--<a class="navbar-brand" href="#"><span class="brand">DebLabs</span></a>-->
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
			    <span style="color:white;" class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="collapsibleNavbar">
			    <ul class="navbar-nav mr-auto">
			      <template v-for="item in menu">
			      	  <li class="nav-item dropdown" v-if="item.dropdown">
					        <a class="nav-link dropdown-toggle linkstyleactive" href="#" v-if="item.selected==true" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          	{{item.name}}
					        </a>
					        <a class="nav-link dropdown-toggle linkstyle" v-else href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          	{{item.name}}
					        </a>
					        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               					<a class="dropdown-item" v-for="ditem in item.dropdown" v-bind:href="ditem.link">{{ditem.name}}</a>
               				</div>
				      </li>	
				      <li class="nav-item" v-else>
				        	<a class="nav-link linkstyleactive" v-if="item.selected==true" v-on:click="choose(item.name)" v-bind:href="item.link">{{item.name}}</a>
				        	<a class="nav-link linkstyle" v-else v-on:click="choose(item.name)" v-bind:href="item.link">{{item.name}}</a>
				      </li>
				  </template>                
			    </ul>
				<form class="form-inline">
					<input class="form-control mr-sm-2" type="text" placeholder="Search">
				</form>			    
			  </div>  
			</nav></div>`,
		  data:vueNav,
		  methods:{
			  choose:function(name){
					for(let j = 0; j < this.menu.length; j++) {
						this.menu[j].selected = false;
					}
				    let i = matchArrayOnValue(this.menu, 'name', name);
				    this.menu[i].selected = true;
			  }
		  }
		});
	  
	  Vue.component('footermodule', {
		 template:`
			 		<div class="jumbotron text-center footerstyle" style="margin-bottom:0">
			 	   	<span>© <a href='https://www.upwork.com/freelancers/~017c3476499b7734d2'>Arnab Roy Productions Inc.</a></span> 
			 	   </div>`,
		 data:function() {
			 return {};
		 }
	  });