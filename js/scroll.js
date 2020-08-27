var item = document.getElementById("fixedNav");
    window.addEventListener("scroll", fixedNav);

    function fixedNav() {
      if(document.body.scrollTop > 145 || document.documentElement.scrollTop > 145) {
        if(window.innerWidth >= 880)
          item.classList.remove("d-lg-none")
      } else {
        item.classList.add("d-lg-none")
      }
    }