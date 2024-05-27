import React from 'react'
import "../styles/main.css"

export default function Main() {
  return (
    <main>

      <div id = "container">

        <h2>Who are you?</h2>


        <div id = "buyerSellerForms">

          <a href = "https://podio.com/webforms/29480714/2428051" target = "new">Buyer</a>
          <a href = "https://podio.com/webforms/29236422/2446428" target = "new">Seller</a>

        </div>

        {/* <script src="https://podio.com/webforms/29480714/2428051.js"></script>
        <script type="text/javascript">
          _podioWebForm.render("2428051")
        </script>
        <noscript> */}
          {/* <a href="https://podio.com/webforms/29480714/2428051" target="_blank">Please fill out the form</a> */}
        {/* </noscript>
          <div class="podio-webform-container">
          <a class="podio-webform-inner" rel="nofollow" href="https://podio.com">Get your own</a> webform with Podio
          </div> */}


          {/* <script src="https://podio.com/webforms/29236422/2446428.js"></script>
          <script type="text/javascript">
            _podioWebForm.render("2446428")
          </script>
          <noscript> */}
            {/* <a href="https://podio.com/webforms/29236422/2446428" target="_blank">Please fill out the form</a> */}
          {/* </noscript>
            <div class="podio-webform-container">
            A webform by Podio - <a class="podio-webform-inner" rel="nofollow" href="https://podio.com">click here</a> to get yours
            </div> */}


      </div>



    </main>
  )
}