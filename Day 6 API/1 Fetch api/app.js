async function apicall() {
  try {
    let data = await fetch("https://randomuser.me/api/");

    if (!data.ok) {
      throw new Error(`HTTP error! Status: ${data.status}`);
    }

    let info = await data.json();
    console.log(info.results);
    console.log("Name - "+info.results[0].name.title + " " +info.results[0].name.first + " " + info.results[0].name.last );
    console.log("Gender - "+info.results[0].gender);
    console.log("Email - "+info.results[0].email);
    console.log("Age - "+info.results[0].dob.age);



  } catch (error) {
    console.error("Fetch error:", error);
  }
}

apicall();
