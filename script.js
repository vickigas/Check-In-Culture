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

/* HEADER */

.topbar{
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 30px;
background:#f0f0f0;
position:sticky;
top:0;
z-index:100;
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
color:#555;
text-decoration:none;
transition:.3s;
}

nav a:hover{
color:#6ec6c4;
}

/* SEARCH */

.search-section{
text-align:center;
padding:40px 20px;
}

.search-box{
background:white;
border-radius:30px;
padding:12px 20px;
display:inline-flex;
align-items:center;
gap:10px;
max-width:500px;
width:100%;
}

.search-box input{
border:none;
outline:none;
width:100%;
font-size:16px;
}

/* DESTINOS */

.destinos{
background:#f0f0f0;
padding:40px 20px;
}

.destinos h2{
text-align:center;
margin-bottom:30px;
}

.grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px;
}

.card{
background:white;
border-radius:12px;
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
padding:15px;
font-weight:700;
color:#8d7b68;
}

.hidden{
display:none;
}

#noResults{
margin-top:20px;
text-align:center;
font-weight:bold;
}

/* AEROPUERTO */

.aeropuerto{
margin:30px;
padding:20px;
border:2px dashed #8d7b68;
background:#e0f2f1;
text-align:center;
}

.aeropuerto h3{
margin-bottom:15px;
}

.aeropuerto ul{
display:flex;
justify-content:center;
gap:20px;
list-style:none;
flex-wrap:wrap;
}

/* TIPS */

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

.tips-box p{
margin:10px 0;
}

/* AUDIO */

.audio-section{
text-align:center;
padding:30px;
}

/* FOOTER */

footer{
text-align:center;
padding:20px;
background:#dcdcdc;
}

/* RESPONSIVE */

@media(max-width:768px){

.grid{
grid-template-columns:1fr;
}

.topbar{
flex-direction:column;
gap:15px;
}

.logo{
width:50px;
}

h1{
font-size:18px;
}

}
