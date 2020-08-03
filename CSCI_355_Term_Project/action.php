// Check if the form is submitted
if ( isset( $_POST['submit'] ) ) {

// retrieve the form data by using the element's name attributes value as key

echo '<h2>form data retrieved by using the $_REQUEST variable<h2/>'

$username = $_REQUEST['username'];
$basename = $_REQUEST['basename'];

// display the results
echo 'Your name is ' . $basename .' ' . $username;

// check if the post method is used to submit the form

if ( filter_has_var( INPUT_POST, 'submit' ) ) {

echo '<h2>form data retrieved by using $_POST variable<h2/>'

$username = $_POST['username'];
$basename = $_POST['basename'];

// display the results
echo 'Your name is ' . $basename .' ' . $username;
}

// check if the get method is used to submit the form

if ( filter_has_var( INPUT_GET, 'submit' ) ) {

echo '<h2>form data retrieved by using $_GET variable<h2/>'

$username = $_GET['username'];
$basename = $_GET['basename'];
}

// display the results
echo 'Your name is ' . $basename .' ' . $username;
exit;
}