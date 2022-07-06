<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Kalkulator</title>

    <link rel="stylesheet" type="text/css" href="../css/reset.css">
    <link rel="stylesheet" type="text/css" href="../css/home.css">
    <link rel="stylesheet" type="text/css" href="../css/kalkulator.css">
  </head>
  <body class="bg-dark">



    <!-- awal navbar -->
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">


          <!-- awal isi nav -->
         <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="home.php">SIMPLE REGRESSION CALCULATOR</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="home.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="kalkulator.php">Kalkulator</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    lain-lain
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="../tabel/F-tabel/tabel-f-0-01.pdf" download="">Download F tabel</a>
                    <a class="dropdown-item" href="../tabel/tabel-t.pdf" download="">Download T tabel</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0" action="main-program.php" method="GET">
                <input class="form-control mr-sm-2" type="text" placeholder="Input number" aria-label="Search" name="row" autofocus="" required="required" autocomplete="off">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Create table</button>
              </form>
            </div>
          </nav>
          <!-- akhir isi nav -->


        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
    <!-- akhir navbar -->

    <div class="text-center" style="color: white;">
      <?php echo(date("l, d F Y",time())) ?>
    </div>

    <div class="main">
    <h2>Kalkulator JS</h2>
    <form name="formAngka">
     <input type="text" name="isiText" autocomplete="off">
    </form>
    <table>
     <tr>
      <td><input type="button" value="C" onclick="hapusAll()"></td>
      <td colspan="2"><input type="button" value="Bcksp" onclick="bcksp()"></td>
      <td><input type="button" value="+" onclick="ins('+')"></td>
     </tr>
     <tr>
      <td><input type="button" value="1" onclick="ins(1)"></td>
      <td><input type="button" value="2" onclick="ins(2)"></td>
      <td><input type="button" value="3" onclick="ins(3)"></td>
      <td><input type="button" value="-" onclick="ins('-')"></td>
     </tr>
     <tr>
      <td><input type="button" value="4" onclick="ins(4)"></td>
      <td><input type="button" value="5" onclick="ins(5)"></td>
      <td><input type="button" value="6" onclick="ins(6)"></td>
      <td><input type="button" value="*" onclick="ins('*')"></td>
     </tr>
     <tr>
      <td><input type="button" value="7" onclick="ins(7)"></td>
      <td><input type="button" value="8" onclick="ins(8)"></td>
      <td><input type="button" value="9" onclick="ins(9)"></td>
      <td><input type="button" value="/" onclick="ins('/')"></td>
     </tr>
     <tr>
      <td><input type="button" value="." onclick="ins('.')"></td>
      <td><input type="button" value="0" onclick="ins(0)"></td>
      <td colspan="2"><input type="button" value="=" onclick="samaDengan()"></td>
     </tr>
    </table>
   </div>



    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


    <script type="text/javascript" src="../js/kalkulator.js"></script>
  </body>
</html>