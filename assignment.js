function substraction(number) {
  let no = number.toString().split("");

  let assending = no.sort(function (a, b) {
    return a - b;
  });
  let Ass = assending.join("");
  console.log(Ass);

  let descending = no.sort(function (a, b) {
    return b - a;
  });
  let Des = descending.join("");
  console.log(Des);
  let substrat = Des - Ass;
  console.log(substrat);
  if (substrat == 6174) {
    console.log("The substraction is equal to " + 6174);
  } else {
    substraction(substrat);
  }
}
substraction(2456);
