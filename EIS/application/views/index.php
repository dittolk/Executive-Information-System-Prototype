<!DOCTYPE HTML>
<html>

<head>
<title>Sales</title>
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
<script type="text/javascript" src="<?php echo base_url("assets/js/jquery-1.12.4.min.js"); ?>"></script>
<script type="text/javascript" src="<?php echo base_url("assets/fusioncharts/fusioncharts.js"); ?>"></script>
<script type="text/javascript" src="<?php echo base_url("assets/fusioncharts/themes/fusioncharts.theme.zune.js?cacheBust=56"); ?>"></script>
<script type="text/javascript" src="<?php echo base_url("assets/fusioncharts/fusioncharts.jqueryplugin.js"); ?>"></script>

<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/css/bootstrap.min.css"); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/css/bootstrap-theme.min.css"); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/css/bootstrap-datetimepicker.css"); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo base_url("assets/css/main.css"); ?>">


<script type="text/javascript" src="<?php echo base_url("assets/js/bootstrap.min.js"); ?>"></script>
<script type="text/javascript" src="<?php echo base_url("assets/js/moment-with-locales.js"); ?>"></script>
<script type="text/javascript" src="<?php echo base_url("assets/js/bootstrap-datetimepicker.js"); ?>"></script>

</head>
<body>
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12 hidden" id="loader">
           <center>
              <img src="./imgs/ajax-loader.gif">
            </center>
        </div>

        <nav class="navbar navbar-default visible-xs">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
               <button type="button" class="navbar-toggle user-info" data-toggle="collapse" data-target="#useInfo">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
              </button>
            </div>
             <div class="collapse navbar-collapse" id="useInfo">
              <ul class="nav navbar-nav">
                <li class="text-center">
                <h2 class="small text-uppercase">Welcome</h2>
                <img src="<?php echo base_url("assets/imgs/john.png"); ?>" alt="" width="70" height="70" style="border-radius:50px">
                <div class="text-uppercase"><?php echo "Your Username is " . $username;?></div>
                </li>
              </ul>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                  <li ><a href="#dashboard">Dashboard</a></li>
                  <li class="active"> <a href="#Audience Overview">Audience Overview</a> </li>
                  <li><a>Acquisition</a></li>
                  <li><a>Behavior</a></li>
                  <li><a>Conversions</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container-fluid">
          <div class="row content">
            <div class="col-sm-3 col-md-3 col-lg-2  sidenav hidden-xs clearfix" id="nav">

              <div data-spy="affix" data-offset-top="0" class="sidenav-container">
                <div class="row">
                  <div class="col-sm-12">
                    <p></p>
                  </div>
                </div>

                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-5">
                      <img src="<?php echo base_url("assets/imgs/john.png"); ?>" alt="" width="70" height="70" style="border-radius:50px">
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-7" style="margin-top:20px">
                      <div class="small">Welcome,</div>
                      <div class="text-uppercase"><?php echo $username; ?></div>
                      <b id="logout"><a href="logout">Logout</a></b>
                    </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <ul class="nav nav-pills nav-stacked">
                      <!--<li ><a href="#dashboard">Dashboard</a></li>-->
                      <li class="active"> <a href="#Dashboard">Sales Dashboard</a> </li>
                      <li><a href="<?php echo site_url('/index_stock'); ?>">Stock Dashboard</a></li>
                      <li><a href="<?php echo site_url('/index_dirut'); ?>">Dirut</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <br>

            </div>
            <br>

            <div class="col-sm-9 col-md-9 col-lg-10" id="contemt-main">

              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" id="dashboard">
                  <span class="small text-uppercase text-muted">Dashboards</span>
                  <h1>Sales Dashboard</h1>

                </div>

              </div>
              <div class="row">
                <div class="col-sm-12">
                  <hr>
                </div>
              </div>



              <!--beda div row-->
              <div class="row">
                <div class="col-xs-4">
                  <div class="well">
                    <h4 >REV TARGET</h4>
                    <p><span id="visitor-chart-container">FusionCharts will render here</span></p>
                  </div>
                </div>
                <div class="col-xs-4">
                  <div class="well">
                    <h4>PROFIT / LOSS</h4>
                    <p><span id="profitloss-chart-container">FusionCharts will render here</span></p>
                  </div>
                </div>
                <div class="col-xs-4">
                  <div class="well">
                    <h4 >INV FG SO TARGET</h4>
                    <p><span id="visitor-chart-container1">FusionCharts will render here</span></p>
                  </div>
                </div>
              </div>

              <!--beda div row-->
              <div class="row">
                <div class="col-xs-3">
                  <div class="well">
                    <h4 >REV VS COGS</h4>
                    <p><span id="revcogs-chart-container">FusionCharts will render here</span></p>
                  </div>
                </div>
                <div class="col-xs-3">
                  <div class="well">
                    <h4 >Cash in Hand</h4>
                    <font size="6">75M</font>
                  </div>
                </div>
                <div class="col-xs-3">
                  <div class="well">
                    <h4>PRODUCTION PROGRESS</h4>
                    <p><span id="productionprogress-chart-container">FusionCharts will render here</span></p>
                  </div>
                </div>
                <div class="col-xs-3">
                  <div class="well">
                    <h4>AGING SALES ORDER</h4>
                    <p><span id="agingsales-chart-container">FusionCharts will render here</span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <footer class="footer">
            <div  class="col-md-12" style="background-color: #f9f9f9 ; text-align: center">
               <p class="footerText row-fluid" >This application was built using <a href="https://www.fusioncharts.com" target="_blank" title="FusionCharts - Data to delight... in minutes" style="color:black">FusionCharts XT</a>.
                You are free to reproduce and distribute this dashboard in its original form, without changing any content, whatsoever. © <script type="text/javascript">var d=new Date();document.write(d.getFullYear());</script>, FusionCharts. All rights reserved.</p>
            </div>
        </footer>
</body>

<script type="text/javascript" src="<?php echo base_url("assets/js/data.js"); ?>"></script>
<script type="text/javascript">
  var penjualan1=<?php echo $penjualan1; ?>;
  var stok1=<?php echo $stok1; ?>;
</script>
<script type="text/javascript" src="<?php echo base_url("assets/js/chart_sales.js"); ?>"></script>
</html>
