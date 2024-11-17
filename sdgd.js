async function sendProfileRequest() {
  try {
    const response = await fetch('https://www.screwfix.com/ffx-api/account/v1/SFXUK/me', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        'Dnt': '1',
        'Origin': 'https://www.screwfix.com'
      },
      body: JSON.stringify({data:{type:'UpdateCustomer',
                                  attributes:{firstName:'hello',
                                                                    lastName:'test',
                                                                    emailAddress:'testindeed400+ATO@gmail.com',
                                                                    title:'Mr',
                                                                    phone:'02073838150',
                                                                    profession:'Plumbing/Heating Engineer'
                                                                   }
                                 }}),
      credentials: 'include' // Ensures cookies from the browser are sent
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Response:', data);
    } else {
      console.error('Request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Execute the function immediately at the end of the script
sendProfileRequest();
