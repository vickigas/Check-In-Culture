*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Montserrat',sans-serif;
background:#6ec6c4;
color:#444;
}

.topbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 30px;
background:#f0f0f0;
}

.logo-area{
display:flex;
align-items:center;
gap:10px;
}

.logo{
width:60px;
}

h1{
font-size:20px;
}

.light{
font-weight:300;
}

.bold{
font-weight:700;
}

nav a{
font-size:22px;
margin-left:15px;
text-decoration:none;
color:#444;
}

.search-section{
text-align:center;
padding:40px;
}

.search-box{
background:white;
border-radius:30px;
padding:10px 20px;
display:inline-flex;
align-items:center;
gap:10px;
width:min(500px,90%);
}

.search-box input{
border:none;
outline:none;
width:100%;
font-size:16px;
}

.destinos{
background:#f0f0f0;
padding:30px;
}

.destinos h2{
text-align:center;
margin-bottom:20px;
}

.grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px;
}

.card{
background:white;
border-radius:10px;
overflow:hidden;
text-align:center;
transition:0.3s;
cursor:pointer;
}

.card:hover{
transform:scale(1.05);
}

.card img{
width:100%;
height:180px;
object-fit:cover;
}

.card p{
padding:10px;
font-weight:bold;
color:#8d7b68;
}

.aeropuerto{
margin:20px;
padding:20px;
border:2px dashed #8d7b68;
background:#e0f2f1;
text-align:center;
}

.aeropuerto ul{
display:flex;
justify-content:center;
gap:20px;
list-style:none;
flex-wrap:wrap;
}

.tips{
padding:40px;
text-align:center;
}

.tips-box{
background:white;
border-radius:15px;
padding:20px;
display:inline-block;
box-shadow:0 5px 15px rgba(0,0,0,.1);
}

footer{
text-align:center;
padding:20px;
background:#dcdcdc;
}

.hidden{
display:none;
}

#noResults{
text-align:center;
margin-top:20px;
font-weight:bold;
}

@media(max-width:768px){

.grid{
grid-template-columns:1fr;
}

.topbar{
flex-direction:column;
gap:15px;
}

}
