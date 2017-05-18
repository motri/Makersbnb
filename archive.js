// interpolation in angular
[innerHTML]="'Sign Out ' + signout()"


// Henry's genius function
  signout(){
    var name = JSON.parse(localStorage.user).name;
    return name;
  }
