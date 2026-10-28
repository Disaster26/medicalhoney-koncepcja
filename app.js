(function(){
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  function zamknij(){n.classList.remove('otwarte');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','Otwórz menu');}
  b.addEventListener('click',function(){var o=n.classList.toggle('otwarte');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Zamknij menu':'Otwórz menu');});
  n.addEventListener('click',function(e){if(e.target.tagName==='A')zamknij();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')zamknij();});

  // dolny pasek dopiero po przewinieciu za przycisk hero
  var mob=document.getElementById('mob'),cta=document.querySelector('.hero-cta');
  if('IntersectionObserver' in window&&mob&&cta){
    new IntersectionObserver(function(w){var e=w[0];mob.classList.toggle('widac',!e.isIntersecting&&e.boundingClientRect.top<0);}).observe(cta);
  }

  // formularz: bez serwera, przygotowuje wiadomosc e-mail
  var f=document.getElementById('form'),info=document.getElementById('form-info');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var ok=true;
    ['imie','kontakt','tresc'].forEach(function(k){var el=f.elements[k];var pusty=!el.value.trim();el.classList.toggle('zle',pusty);if(pusty)ok=false;});
    if(!ok){info.textContent='Uzupełnij imię, kontakt i treść pytania.';return;}
    var temat='Pytanie: '+f.elements.temat.value;
    var tresc=f.elements.tresc.value.trim()+'\n\n'+f.elements.imie.value.trim()+'\nKontakt: '+f.elements.kontakt.value.trim();
    info.textContent='Dziękujemy. Otwieramy program pocztowy z gotową wiadomością do biuro@medicalhoney.pl.';
    location.href='mailto:biuro@medicalhoney.pl?subject='+encodeURIComponent(temat)+'&body='+encodeURIComponent(tresc);
  });
})();
