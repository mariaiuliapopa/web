<template>
<p id="titlu"> Temperaturi și informații referitoare la vreme </p>
<br>
<br>
<p > &nbsp;&nbsp;&nbsp;&nbsp;Proiectul furnizează informații care fac referire la condițiile meteorologice 
    din diverse orașe de pe glob. </p>
<p >API-ul Fetch accesează resursele din rețea, face solicitări HTTP folosind metoda GET sau POS încărcând 
    sau descărcând fișiere. Pentru a incepe o solicitare se apelează funcția fetch() care acceptă două
     argumente :</p>
<p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* resurse: șirul URL sau un obiect Request </p>
<p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* opțiuni: obiectul de configurat cu proprietăți precum
     method, headers, body.</p>
<p >&nbsp;&nbsp;&nbsp;&nbsp;Await fetch() pornește o solicitare iar când cererea se finalizează, se atribuie un răspuns cererii 
    putând fi extrase date utile </p>
<br>
<img src="./primaimagine.jpg" alt="Prima" id="primaimagine">
<br>
<br>
<p> &nbsp;&nbsp;&nbsp;&nbsp;Obiectul returnat de await fetch() reprezintă un substituent generic pentru mai multe forme de date,
     printre care și obiectul JSON. response.json() reprezintă o metodă pe obiectul Response care 
     permite extracția unui obiect JSON din răspuns și opținând astfel informațiile necesare.  </p>
<br>
<br>
<img src="./adouaimagine.jpg" alt="Prima" id="adouaimagine">
<br>
<br>
 <p> &nbsp;&nbsp;&nbsp;&nbsp;Prin interemdiul metodelor anterior precizate, putem să generăm informații referitoare la condițiile
     meteorologice. În cadrul main-ului putem selecta doar informațiile care ne interesează și care dorim să apară 
     pe pagina WEB.</p>
<br>
<br>
<img src="./atreiaimagine.jpg" alt="Prima" id="atreiaimagine">
<br>
<br>
<p> &nbsp;&nbsp;&nbsp;&nbsp; Pe baza API-ul Fetch putem solicita informații meteorologice care fac 
    referire la locația în care se află dispozitivul de pe care se accesează pagina. </p>
<br>
<br>
<img src="./apatraimagine.jpg" alt="Prima" id="apatraimagine">

</template>
  

