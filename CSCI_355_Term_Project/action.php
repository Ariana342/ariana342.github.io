<!DOCTYPE html>
<html>
	<body>
		<?php>
		// Check if the form is submitted
		if ( isset( $_POST['submit'] ) ) {
			$userName = $_POST['username'];
			echo "User Name: " . $userName . "<br />";
			$baseName = $_POST['basename'];
			echo "Base Name: " . $baseName . "<br />";
			$base = $_POST['base'];
			echo "Base : " . $base . "<br />";
		}
		?>
	</body>
</html>