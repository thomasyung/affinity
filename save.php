<?php 

$uuid = $_POST['uuid'];
$data = $_POST['data'];

if (json_decode($data) != Null) {
	if (file_put_contents($uuid.'.json', $data) > 0 ) {
		echo 'Saved successfully.';
	}
} else {
	echo 'Not valid JSON data.';
}

?>