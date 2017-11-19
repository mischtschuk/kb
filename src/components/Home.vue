<template>
  <div>
    <div id="mainCarousel" class="mainCarousel carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#mainCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#mainCarousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="content">
            <div class="mainContainer">
              <div class="caption">
                <h1>KICKMYBET</h1>
                <p>We provide a unique API with fully automated data feed for pre-match and live betting.</p>
                <div class="btnHolder">
                  <router-link class="btnPrimary" :to="{ name: 'Features'}">Tell me more!</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="content">
            <div class="mainContainer">
              <div class="caption">
                <h1>KICKMYBET</h1>
                <p>Keep up to date with global eSports betting trends!</p>
                <div class="btnHolder">
                  <router-link class="btnPrimary" :to="{ name: 'Features'}">Tell me more!</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="left carousel-control" href="#mainCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      </a>
      <a class="right carousel-control" href="#mainCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      </a>
    </div>
    <div class="mainContainer">
      <div class="pageHolder">
        <div class="pageMainText">
          <h2 class="blockHeading">KICKMYBET</h2>
          <h3 class="subHeading"></h3>
          <div class="textListHolder">
            <div class="item">
              <h4 class="listHeading">Dota 2 Tournaments we cover</h4>
              <ul class="textList">
                <li>We provide the most accurate data forecasts for all Majors.</li>
                <li>We cover Minors.</li>
                <li>Also we provide the coverage of qualifications Tournaments.</li>
              </ul>
              <div class="btnHolder">
                <router-link class="btnPrimary" :to="{ name: 'Tournaments'}">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
              </div>
            </div>
            <div class="item">
              <h4 class="listHeading">Technical features</h4>
              <ul class="textList">
                <li>Automated real time pre-match and live data feed.</li>
                <li>Permanently updated game data for all leagues, teams and players.</li>
                <li>Minimum delay in data provisioning.</li>
                <li>Easily integrated API.</li>
                <li>24/7 technical support and maintenance.</li>
              </ul>
              <div class="btnHolder">
                <router-link class="btnPrimary" :to="{ name: 'Features'}">Read More <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pageDivider">
      <div class="mainContainer">
        <div class="wrapper">
          <div class="caption">
            <div class="heading">Free monthly trial!</div>
            <div class="text">Leave your email to get a month of free betting.</div>
          </div>
          <div class="formHolder">
            <form action="">
              <div class="content">
                <div class="inputHolder">
                  <input type="email" class="form-control" placeholder="Email...">
                </div>
                <div class="btnHolder">
                  <button class="btnPrimary">Get the trial!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="mainContainer">
      <div class="pageHolder">
        <div class="pageMainText">
          <h2 class="blockHeading">COMING SOON</h2>
          <h3 class="subHeading">real time betting markets for all popular eSports titles like: </h3>
          <div class="gamesLogosHolder">
            <div class="logoHolder"></div>
            <div class="logoHolder"></div>
            <div class="logoHolder"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="coloredLine">
      <div class="mainContainer">
        <div class="pageHolder">
          <h2 class="blockHeading re">Why Choose Us</h2>
          <div class="textListHolder">
            <ol class="textList">
              <li>KICKMYBET provides high-quality analytical services for calculating pre-match and live cybersport events.</li>
              <li>We develop our service to provide you specific game data coverage that allows you to get more balanced game markets.</li>
              <li>Extend the scope of your services and business opportunities by offering our unique betting platform to your existing clients. </li>
              <li>One of the widest coverage of the eSport events, data and bets options in the market.</li>
              <li>Flexible pricing model. Get your personal offer that meets your needs and expectations.</li>
              <li>Customers needs and feedback is our first priority. Quality and service improvement-oriented team.</li>
              <li>Both short and long contractual terms are available. No limitations in obligations and contracts are required.</li>
              <li>Free monthly trial on a chosen tournament.</li>
              <li>All data are gathered and collected by our in-house solutions.</li>
              <li>No limits in the number of leagues, tournaments, types of betting markets.</li>
              <li>Significant discounts, depends on package type.</li>
              <li>Our clients get the full package of services, including  personal account manager who will become a great addition to your team.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

