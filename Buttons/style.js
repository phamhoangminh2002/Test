var navItems = document.querySelectorAll('.nav-item');
var nav = document.querySelector('.nav');
var codeHTML = document.querySelector('.code-html');
var codeCSS = document.querySelector('.code-css');
var viewBtn = document.querySelectorAll('.btn-view');
var btnHTML = document.querySelectorAll('.btn-copyHTML');
var btnCSS = document.querySelectorAll('.btn-copyCSS');


//========= active nav ==========//

    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
    }

//========= Display hidden code ==========//

    viewBtn.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        const btnTarget = e.target.parentNode.parentNode.querySelector('.code');
        btnTarget.classList.toggle('active');
        if(this.innerHTML=="View code"){
          this.innerHTML = "Hide code";
        }else{
          this.innerHTML = "View code";
        }
        console.log(btnTarget)
      });
    });

//========= copy code html , css on clipboard ===========//

    btnHTML.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        const btnTarget = this.parentNode.parentNode.querySelector('.code-html .code-html-copy').innerHTML;
        console.log(btnTarget);
        navigator.clipboard.writeText(btnTarget);
      });
    });

    btnCSS.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        const btnTarget = this.parentNode.parentNode.querySelector('.code-css pre').innerHTML;
        navigator.clipboard.writeText(btnTarget);
        console.log(btnTarget);
      });
    });

//========= filter element nav ==========//

    filterSelection("all")
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("box");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
      }
    }

    function addClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
        }
      }
    }

    function removeClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
      }
      element.className = arr1.join(" ");
    }





