<!DOCTYPE html>
<html>
	<body>
		<?php
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