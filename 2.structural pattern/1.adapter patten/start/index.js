// local storage is an API available in web browser and not in node. We will wrten an adapter for this code to work in server side.

console.log( "localStorage length: ", localStorage.length );

var uid = localStorage.getItem("user_id");

console.log( "user_id: ", uid );

if (!uid) {
    console.log('User ID not found. Setting the user id and token...');
    localStorage.setItem("token", "TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
    localStorage.setItem("user_id", "12345");
} else {
    console.log('User ID found.', uid);
    console.log('clearning the User ID...');
    localStorage.clear();
}
