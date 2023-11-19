var arr = [
    {
        dp: "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=500&auto = format & fit=crop& q=60& ixlib=rb- 4.0.3 & ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA % 3D",
        story: "https://images.unsplash.com/photo-1613005798967-632017e477c8 ? w = 500 & auto=format & fit=crop & q=60 & ixlib=rb - 4.0.3 & ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA % 3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format & fit=crop& q=60 & ixlib=rb - 4.0.3 & ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA % 3D",
        story: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1675107359685-f268487a3a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
 var storyian = document.querySelector("#storyian");
var clutter = "";
arr.forEach(function (elem,idx) {
    clutter += `<div class="story">
<img  id="${idx}" src="${elem.dp}" alt="">
</div > `
})

storyian.innerHTML = clutter;

/*storyian.addEventListener("click", function (dets) {
    document.querySelector("#fullscreen").style.display = "block"
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function () {
document.querySelector("#fullscreen").style.display = "none"
    },3000)
});*/
storyian.addEventListener("click", function (dets) {
    document.querySelector("#fullscreen").style.display = "block";
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function () {
        document.querySelector("#fullscreen").style.display = "none";
    }, 2000);
});


