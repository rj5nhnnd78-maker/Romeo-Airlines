let romeoLanguage=localStorage.getItem("romeoLanguage")||"en";
const AR={
"Home":"الرئيسية","Book a Flight":"حجز رحلة","Manage Booking":"إدارة الحجز","Check-in":"تسجيل الوصول",
"Flight Status":"حالة الرحلة","Timetable":"جدول الرحلات","Destinations":"الوجهات","About Us":"من نحن",
"Our Fleet":"أسطولنا","Careers":"الوظائف","Contact Us":"اتصل بنا","FAQ":"الأسئلة الشائعة",
"Booking":"الحجز","Travel":"السفر","Company":"الشركة","Help":"المساعدة"
};
function toggleLanguage(){romeoLanguage=romeoLanguage==="en"?"ar":"en";localStorage.setItem("romeoLanguage",romeoLanguage);applyLanguage()}
function applyLanguage(){document.documentElement.lang=romeoLanguage;document.documentElement.dir=romeoLanguage==="ar"?"rtl":"ltr";document.body.classList.toggle("rtl-mode",romeoLanguage==="ar");let b=document.getElementById("languageToggle");if(b)b.textContent=romeoLanguage==="ar"?"English":"العربية"}
function toggleMenu(){let n=document.getElementById("mainNav");if(n)n.classList.toggle("open")}
function manageBooking(){let p=document.getElementById("managePnr")?.value.trim(),n=document.getElementById("manageLast")?.value.trim();let m=document.getElementById("manageMessage");if(m)m.textContent=p&&n?"Demo: booking reference accepted. Connect the PNR API for live retrieval.":"Please enter your PNR and last name."}
function flightStatus(){let f=document.getElementById("statusFlight")?.value.trim().toUpperCase(),m=document.getElementById("statusMessage");if(m)m.textContent=f?`${f} — Scheduled. Connect the operational data feed for live status.`:"Please enter a flight number."}
document.addEventListener("DOMContentLoaded",()=>{applyLanguage();let d=new Date().toISOString().split("T")[0];let s=document.getElementById("statusDate");if(s)s.value=d;let dep=document.getElementById("departure");if(dep)dep.min=d});
