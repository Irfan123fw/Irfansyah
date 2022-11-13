<?php 
    if(isset($_POST['submit'])){
      $name  = $_POST['name'];
      $email = $_POST['email'];
      $pesan = $_POST['pesan'];
      $no_wa = $_POST['noWa'];
      header("location:https://api.whatsapp.com/send?phone=$no_wa&text=Nama:$name
      Email:$email Pesan:$pesan");

    }else {
      echo "
            <script>
            window.location=history.go(-1);
            </script>
      ";
    }
?>
