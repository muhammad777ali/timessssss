const time = document.querySelector('.time')

var i = 0
function updates() {
    document.querySelector('.time').innerText = i;
    i++;
    if (i <= 46) {
      setTimeout(updates, 100);
    }
  }
  updates();

  function updatess() {
    document.querySelector('.time1').innerText = i;
    i++;
    if (i <= 102) {
      setTimeout(updatess, 100);
    }
  }
  updatess();

  function updatesss() {
    document.querySelector('.time2').innerText = i;
    i++;
    if (i <= 154 ) {
      setTimeout(updatesss, 30);
    }
  }
  updatesss();