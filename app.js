//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  //Hide results
  document.getElementById('results').style.display = 'none';

  //show loader
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 1000);
  e.preventDefault();
});

//calculate results
function calculateResults() {

  //UI Vars
  const hours = document.getElementById('hour');
  const minutes = document.getElementById('minute');
  const seconds = document.getElementById('second');
  const kilometer = document.getElementById('kilometer');

  const convertHrToMin = parseFloat(hours.value) * 60;
  const convertMin = parseFloat(minutes.value);
  const convertSecToMin = parseFloat(seconds.value) / 60;

  const totalMin = convertHrToMin + convertMin + convertSecToMin;


  console.log(`total minute ${totalMin}`);


  const paceHr = Math.floor(totalMin / parseFloat(kilometer.value));
  const paceMin = Math.floor(((totalMin / parseFloat(kilometer.value)) % 1) * 60);

  console.log(paceHr);
  console.log(paceMin);



  const pacePerMinute = document.getElementById('paceperminute');
  // const totalPayment = document.getElementById('total-payment');
  // const totalInterest = document.getElementById('total-interest');

  // const principal = parseFloat(amount.value);
  // const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  // const calculatedPayments = parseFloat(years.value) * 12;

  //Compute monthly payment
  // const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  // const monthly = (principal * x * calculatedInterest) / (x - 1);



  if (isFinite(paceHr, paceMin)) {
    pacePerMinute.value = paceHr.toFixed(2);

    //show results
    document.getElementById('results').style.display = 'block';
    //hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Plase check your numbers');
  }



  // if (isFinite(monthly)) {
  //   monthlyPayment.value = monthly.toFixed(2);
  //   totalPayment.value = (monthly * calculatedPayments).toFixed(2);
  //   totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

  //   //show results
  //   document.getElementById('results').style.display = 'block';
  //   //hide loader
  //   document.getElementById('loading').style.display = 'none';
  // } else {
  //   showError('Plase check your numbers');
  // }

}

//Show error
function showError(error) {

  //hide results
  document.getElementById('results').style.display = 'none';
  //hide loader
  document.getElementById('loading').style.display = 'none';



  //create a div 
  const errorDiv = document.createElement('div');

  //get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //add class
  errorDiv.className = 'alert alert-danger';
  //Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  //Insert error above heading
  card.insertBefore(errorDiv, heading);


  //clear error after 3 seconds
  setTimeout(clearError, 3000);

}

//clear error
function clearError() {
  document.querySelector('.alert').remove();
}