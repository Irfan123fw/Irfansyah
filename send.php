<?php 
    if(isset($_POST['submit'])){
      $name  = $_POST['name'];
      $email = $_POST['email'];
      $pesan = $_POST['pesan'];
      $no_wa = $_POST['noWa'];
       header("location:https://wa.me/6282172716552?text=Nama:$name
      Email:$email Pesan:%20$pesan");

    }else {
      echo "
            <script>
            window.location=history.go(-1);
            </script>
      ";
    }
?>
