const $=(s)=>document.querySelector(s);const menu=$('.menu-btn');menu?.addEventListener('click',()=>$('.site-header nav').classList.toggle('open'));
const icon={pdf:'Documento',link:'Enlace',video:'Vídeo',audio:'Pódcast'};
async function getJSON(path){const r=await fetch(path);if(!r.ok)throw new Error(path);return r.json()}
function resourceCard(x){return `<article class="card" data-category="${x.category}"><span class="tag">${x.category}</span><h3>${x.title}</h3><p>${x.description}</p><div class="card-footer"><span>${icon[x.type]||x.type}</span><a href="${x.url}" target="_blank" rel="noopener">Abrir →</a></div></article>`}
function postCard(x){return `<article class="card"><span class="tag">${x.kind}</span><h3>${x.title}</h3><p>${x.excerpt}</p><div class="card-footer"><span>${x.date}</span><a href="${x.url}" target="_blank" rel="noopener">Ver →</a></div></article>`}
function projectCard(x){return `<article class="project-card"><span class="status">● ${x.status}</span><h3>${x.title}</h3><p>${x.description}</p></article>`}
Promise.all([getJSON('content/resources.json'),getJSON('content/posts.json'),getJSON('content/projects.json')]).then(([r,p,j])=>{
 const resources=r.items||r, posts=p.items||p, projects=j.items||j;
 $('#resource-count').textContent=resources.length;$('#article-count').textContent=posts.length;$('#project-count').textContent=projects.length;
 const cats=['Todos',...new Set(resources.map(x=>x.category))];$('#resource-filters').innerHTML=cats.map((c,i)=>`<button class="filter ${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
 $('#resources-grid').innerHTML=resources.map(resourceCard).join('');$('#posts-grid').innerHTML=posts.map(postCard).join('');$('#projects-grid').innerHTML=projects.map(projectCard).join('');
 document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('#resources-grid .card').forEach(c=>c.style.display=b.dataset.cat==='Todos'||c.dataset.category===b.dataset.cat?'block':'none')}));
}).catch(console.error);
