function sorgula() {
  var tcKimlik = document.getElementById("tcKimlik").value;
  var dogumTarihi = document.getElementById("dogumTarihi").value;
  var guvenlikKodu = document.getElementById("guvenlikKodu").value;
  var sonuclarDiv = document.getElementById("sonuclar");

  // Burada gerçek bir sorgulama işlemi yapılmalı.
  // Bu örnekte sadece basit bir mesaj gösteriyoruz.

  if (tcKimlik && dogumTarihi && guvenlikKodu) {
    sonuclarDiv.innerHTML = "<p>Sorgulama başarılı! (Bu sadece bir örnektir.)</p>";
    sonuclarDiv.innerHTML += "<p>TC Kimlik: " + tcKimlik + "</p>";
    sonuclarDiv.innerHTML += "<p>Doğum Tarihi: " + dogumTarihi + "</p>";
  } else {
    sonuclarDiv.innerHTML = "<p>Lütfen tüm alanları doldurun.</p>";
  }
}
