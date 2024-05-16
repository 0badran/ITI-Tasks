let divOfImgs = document.querySelector("div");
let imgs = document.querySelectorAll("img");
let cointer = 0;
let isOn;

// وضع السيت انترنل في فانكشن عشان ترن اول ما الصفحه تلود
function onInterval()
{
  isOn = setInterval(() => {
    // كل نص ثانية تعين سورس لجميع الصور
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].src = "./images/marble1.jpg";
    }
    // تعين عداد بيلف حوالين نفسه بعدد الصور بالترتيب كل نص ثانية باستخدام باقي القسمه
    indexOfCurrentElem = cointer++ % imgs.length;
    // console.log(cointer - 1,"%",imgs.length,"=",indexOfCurrentElem);
    // وضع الصوره كل نص ثانية بمكان مختلف 
    imgs[indexOfCurrentElem].src = "./images/marble2.jpg";
    // كان لازم اكسر قيمة متغير توليد الارقام بشرط, لان كل نص ثانية بيزيد بواحد الي مالا نهاية
    cointer = (indexOfCurrentElem==4)?0:cointer
  }, 500);
}
// Loop :)
// مسح السيت انترفل
divOfImgs.addEventListener("mouseover", () => {
  clearInterval(isOn);
});
// استدعاء السيت انترفل
divOfImgs.addEventListener("mouseout", () => {
  onInterval()
});

onInterval();