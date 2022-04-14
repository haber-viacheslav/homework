function getShippingCost(country) {
  let message;
  // Change code below this line
  const China = 100;
  const Chile = 250;
  const Australia = 170;
  const Jamaica = 120;

  switch (country){
    case China:
      message = `Shipping to ${China} will cost ${100} credits`;
      break;

    case Chile:
      message = `Shipping to ${Chile} will cost ${250} credits`;
      break;

    case Australia:
      message = `Shipping to ${Australia} will cost ${170} credits`;
      break;

    case Jamaica:
      message = `Shipping to ${Jamaica} will cost ${120} credits`;
      break;

    default: 
      message = "Sorry, there is no delivery to your country"

  }
  // Change code above this line
  return message;
}
