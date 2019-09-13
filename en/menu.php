<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>burger_menu</title>
  <link rel="stylesheet" href="../burger_menu.css">
  <link rel="shortcut icon" href="#">
</head>

<body>
  <!--   Insert code from this commentary to the other one / Don't forget to add the script files just before the </body> tag -->
  <div id="burger_menu" role="button">
    <img id="logo_simplon" src="../images/logo_simplon.png">
    <button class="inactive">
      <div></div>
      <div></div>
    </button>
  </div>
  <!-- End of the burger menu -->
  <!-- Part revealed when clicked on the burger menu -->
  <div id="menu_open">
    <div>
      <div>
        <ul>
          <li><a href="#" class="menu_first_item">Link 1</a></li>
          <li><a href="#" class="menu_second_item">Link 2</a></li>
          <li><a href="#" class="menu_third_item">Link 3</a></li>
          <li><a href="#" class="menu_fourth_item">Link 4</a></li>
        </ul>
      </div>
      <span class="madeBy"><a href="https://www.matthieugras.fr">Made by MG</a></span>
    </div>
    <div>
      <img class="simplon" src="../images/simplon.jpg">
      <div>
        <span class="menu_first_item">Change <br>language</span>
        <span>
          <hr />
        </span>
        <ul>
          <li class="menu_second_item"><a href="../en/menu.php" class="languageActive">English</a></li>
          <li class="menu_third_item"><a href="../menu.php">Français</a></li>
          <li class="menu_fourth_item"><a href="../es/menu.php">Español</a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- End of the revealed part -->
  <script src="../jquery/jquery-3.4.1.js"></script>
  <script src="../script.js"></script>
</body>

</html>
