document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".steps__link").forEach(function(tabsBtn) {
        tabsBtn.addEventListener("click", function(event) {
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll(".tab-content").forEach(function(tabContent){
                tabContent.classList.remove("tab-is-active")
            })
            document.querySelector(`[data-target="${path}"]`).classList.add("tab-is-active")
        })
    })
})      