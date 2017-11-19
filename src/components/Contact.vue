<template>
  <div>
    <div class="mainContainer">
      <div class="pageHolder">
        <div class="pageMainText">
          <h2 class="blockHeading">Contact us</h2>
          <h3 class="subHeading">Complete a short form below to get notified on launch of live betting on eSports from KICKMYBET. We will send you a corresponding e-mail only.</h3>
          <div class="feedBackFormHolder">
            <form @submit.prevent="sendMessage">
              <div class="wrapper">
                <div class="content">
                  <div class="inputHolder">
                    <label for="">Your name:</label>
                    <input v-model="form.name" type="text" class="form-control" placeholder="Name...">
                  </div>
                  <div class="inputHolder">
                    <label for="">Your email:</label>
                    <input v-model="form.email" type="email" class="form-control" placeholder="Email...">
                  </div>
                  <div class="inputHolder">
                    <label for="">Your message:</label>
                    <textarea v-model="form.message" rows="5" class="form-control" placeholder="Message..."></textarea>
                  </div>
                  <div class="btnHolder">
                    <button class="btnPrimary">Send</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="pageDivider">
      <div class="mainContainer">
        <div class="wrapper">
          <div class="caption">
            <div class="heading">Free monthly trial!</div>
            <div class="text">Choose coverage and leave your email to get a month of free betting.</div>
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
  </div>
</template>

<script>
  import axios from 'axios'

export default {
    data() {
        return {
            form: {
                name: null,
                email: null,
                message: null,
            },
            errors: {
                name: null,
                email: null,
                message: null
            }
        }
    },

    methods: {
        sendMessage() {
            let data = new FormData();
            data.append('name', this.form.name);
            data.append('email', this.form.email);
            data.append('message', this.form.message);
            this.errors = [];
            axios.post('/mail.php', data)
                .then((response) => {
                    if (response.data.error) {
                        this.form.errors = response.data.errors;
                    }
                    if (response.data.success) {
                        console.log(response.data.message);
                        this.resetForm();
                    }
                })
                .catch(e => {
                    console.log(e);
                })
        },

        resetForm() {
            this.form = {
                name: null,
                email: null,
                message: null,
            }
        }
    }
}
</script>

