async function fetchData() {
  try {
    // First API request
    const firstResponse = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!firstResponse.ok) {
      throw new Error(`HTTP error! Status: ${firstResponse.status}`);
    }

    const firstData = await firstResponse.json();

    // Extract necessary data from the first response
    const userId = firstData.userId;

    // Second API request using data from the first response
    const secondResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!secondResponse.ok) {
      throw new Error(`HTTP error! Status: ${secondResponse.status}`);
    }

    const secondData = await secondResponse.json();

    // Process the results
    console.log('First Data:', firstData);
    console.log('Second Data:', secondData);

    // Continue with further processing as needed
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// Call the function to initiate the sequence of API requests
fetchData();
