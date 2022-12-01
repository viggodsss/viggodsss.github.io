function tekan(form) 
{ 

var nimstr=(document.f10114044.nim.value); 
var namastr=(document.f10114044.nama.value); 
var jenisstr=(document.f10114044.jenis.value); 
var agamastr=(document.f10114044.agama.value); 
var status=""; 
 if(form.status.checked==true) 
  {status="Belum kawin";} 
     else 
  {status="Belum Kawin";} 
var jurusanstr=(document.f10114044.jurusan.value); 
var komstr=(document.f10114044.kom.value); 
document.f10114044.onim.value=nimstr; 
document.f10114044.onama.value=namastr; 
document.f10114044.ojenis.value=jenisstr; 
document.f10114044.oagama.value=agamastr; 
document.f10114044.ostatus.value=status; 
document.f10114044.ojurusan.value=jurusanstr; 
document.f10114044.okom.value=komstr; 

} 