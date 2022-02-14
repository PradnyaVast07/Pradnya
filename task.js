function substraction(event) {
  event.preventDefault();
  let a = document.querySelector("#myText").value;
  console.log(a);
  let no = a.toString().split("");
  //console.log(no);
  let assending = no.sort(function (a, b) {
    return a - b;
  });
  // console.log(assending);
  let Assjoin = assending.join("");
  //console.log(Assjoin);
  let descending = no.sort(function (a, b) {
    return b - a;
  });
  let Desjoin = descending.join("");
  //console.log(Desjoin);

  let substract = Desjoin - Assjoin;
  document.write("substraction of two nos is" + ":" + substract);

  if (substract != 6174) {
    document.writeln("The substraction is equal to" + 6174 + "<br />");
    substraction();
  }
}
