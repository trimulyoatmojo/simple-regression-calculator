<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Simple Regression Calculator</title>

    <link rel="stylesheet" type="text/css" href="../css/reser.css">
    <link rel="stylesheet" type="text/css" href="../css/home.css">
    <link rel="stylesheet" type="text/css" href="../css/slide.css">
  </head>
  <body>



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


    <!-- Slideshow container -->
    <div class="slideshow-container">

      <!-- Full-width images with number and caption text -->
      <div class="mySlides fadE">
        <div class="numbertext">1 / 25</div>
        <img src="../img/Slide1.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">2 / 25</div>
        <img src="../img/Slide2.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">3 / 25</div>
        <img src="../img/Slide3.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">4 / 25</div>
        <img src="../img/Slide4.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">5 / 25</div>
        <img src="../img/Slide5.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">6 / 25</div>
        <img src="../img/Slide6.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">7 / 25</div>
        <img src="../img/Slide7.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">8 / 25</div>
        <img src="../img/Slide8.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">9 / 25</div>
        <img src="../img/Slide9.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">10 / 25</div>
        <img src="../img/Slide10.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">11 / 25</div>
        <img src="../img/Slide11.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">12 / 25</div>
        <img src="../img/Slide12.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">13 / 25</div>
        <img src="../img/Slide13.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">14 / 25</div>
        <img src="../img/Slide14.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">15 / 25</div>
        <img src="../img/Slide4.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">16 / 25</div>
        <img src="../img/Slide16.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">17 / 25</div>
        <img src="../img/Slide17.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">18 / 25</div>
        <img src="../img/Slide18.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">19 / 25</div>
        <img src="../img/Slide4.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">20 / 25</div>
        <img src="../img/Slide20.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">21 / 25</div>
        <img src="../img/Slide21.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">22 / 25</div>
        <img src="../img/Slide22.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">23 / 25</div>
        <img src="../img/Slide23.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">24 / 25</div>
        <img src="../img/Slide24.png" style="width:100%">
      </div>

      <div class="mySlides fadE">
        <div class="numbertext">25 / 25</div>
        <img src="../img/Slide25.png" style="width:100%">
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <!-- End slideshow container -->
    <br>


    <!-- The dots/circles -->
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
      <span class="dot" onclick="currentSlide(4)"></span>
      <span class="dot" onclick="currentSlide(5)"></span>
      <span class="dot" onclick="currentSlide(6)"></span>
      <span class="dot" onclick="currentSlide(7)"></span>
      <span class="dot" onclick="currentSlide(8)"></span>
      <span class="dot" onclick="currentSlide(9)"></span>
      <span class="dot" onclick="currentSlide(10)"></span>
      <span class="dot" onclick="currentSlide(11)"></span>
      <span class="dot" onclick="currentSlide(12)"></span>
      <span class="dot" onclick="currentSlide(13)"></span>
      <span class="dot" onclick="currentSlide(14)"></span>
      <span class="dot" onclick="currentSlide(15)"></span>
      <span class="dot" onclick="currentSlide(16)"></span>
      <span class="dot" onclick="currentSlide(17)"></span>
      <span class="dot" onclick="currentSlide(18)"></span>
      <span class="dot" onclick="currentSlide(19)"></span>
      <span class="dot" onclick="currentSlide(20)"></span>
      <span class="dot" onclick="currentSlide(21)"></span>
      <span class="dot" onclick="currentSlide(22)"></span>
      <span class="dot" onclick="currentSlide(23)"></span>
      <span class="dot" onclick="currentSlide(24)"></span>
      <span class="dot" onclick="currentSlide(25)"></span>
    </div>
    <!-- End the dots/circles -->



    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>


    <script type="text/javascript" src="../js/slide.js"></script>
  </body>
</html>