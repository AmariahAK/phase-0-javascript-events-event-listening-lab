function addingEventListener() {
    // Grab the element
    const input = document.getElementById('button');
  
    // Define a named function to handle the click event
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add event listener to the element using the named function
    input.addEventListener('click', clickAlert);
  }
  
