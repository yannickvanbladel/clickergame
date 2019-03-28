<template>
  <div id="app">
    <div class="wrapper">
      <div class="sidebar">
          <div class="price">
              €{{ $store.state.global.money.toFixed(2) }}
          </div>

      </div>
      <nav class="navbar">
        <ul class="mainnav">
          <li><router-link to="/werk"><i class="material-icons">
              home
          </i>Work</router-link></li>
            <li v-if="$store.state.global.money > 20"><router-link to="/hardware"><i class="material-icons">
                dns
            </i>Hardware</router-link></li>
          <li v-if="$store.state.global.money > 200" ><router-link to="/upgrades"><i class="material-icons">
              trending_up
          </i>Upgrades</router-link></li>
          <li v-if="$store.state.global.money > 200"><router-link to="/werknemers"><i class="material-icons">
              people
          </i>Employees</router-link></li>
          <li v-if="$store.state.global.money > 200"><router-link to="/kantoor"><i class="material-icons">
              location_city
          </i>Office</router-link></li>
        </ul>
      </nav>
      <section class="content">
        <router-view/>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    updatePosts: function () {
      // this.addCommitJrDev()
      setTimeout(this.updatePosts, 1000)
    },
    ...mapActions([
      'addCommitJrDev'
    ])
  },
  created: function () {
    this.updatePosts()
  }
}
</script>

<style lang="scss">
  @import '/assets/css/vars.scss';
  @import '/assets/css/normalize.css';
  button{
    background: $color-primary;
    outline: 0;
  }
  .wrapper{
    display: grid;

    grid-template-columns: 200px 200px 5fr;
    grid-template-areas:
            "navbar sidebar content";
    height: 100vh;
      background-color: $color-greys-20;
  }
  .sidebar{
    background-color: $color-greys-20;
    grid-area: sidebar;
      padding: 20px;
      border-right: 1px solid lighten($color-greys-30, 50);
  }
  .price{
      color: $color-greys-30;
      font-weight: 700;
      font-size: 36px;
  }
  .navbar{
    background-color: $color-greys-40;
    text-align: left;
    grid-area: navbar;
      box-shadow: inset -10px 0px 20px hsla(212,48%,8%, 0.25),  inset -6px 0px 6px hsla(212,48%,8%, 0.2);
      padding: 24px;
  }
  .content{
    grid-area: content;
      padding: 24px;
  }
  .mainnav{
    padding: 0;
    margin: 0;
    list-style-type: none;
    font-size: 0;
  }

  .mainnav li{
    display: block;
  }

  .mainnav a{
    display: block;
    color: rgba($color-primary-tint, 0.5);
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 6px 0px;
    text-decoration: none;
    font-weight: 400;

      i{
          vertical-align: baseline;
          margin-right: 6px;
          color: rgba($color-primary-tint, 0.9);
      }
  }
  .mainnav a:hover{
      color: lighten($color-primary-tint, 0);
  }
  .mainnav a.router-link-active{
    background: transparant;
  }
  .card{
      display: inline-block;
      margin: 12px;
      border-radius: 6px;
      background-color: #fff;
      overflow: hidden;
      box-shadow: 0px 10px 20px hsla(212,18%,35%, 0.15), 0px 3px 6px hsla(212,18%,35%, 0.1), 0px 1px 2px
      hsla(212,18%,35%, 0.5);
      .card__heading{
          background-color: $color-greys-10;
          padding: 6px 12px;
          h2{
              padding: 0;
              margin:0;
              color: $color-greys-30;
              font-size: 18px;
              font-weight: 700;
          }
      }
      .card__content{
          padding: 12px;
      }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
  .tooltip {
    display: block !important;
    z-index: 10000;
  }

  .tooltip .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  .tooltip[x-placement^="top"] {
    margin-bottom: 5px;
  }

  .tooltip[x-placement^="top"] .tooltip-arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .tooltip[x-placement^="bottom"] {
    margin-top: 5px;
  }

  .tooltip[x-placement^="bottom"] .tooltip-arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .tooltip[x-placement^="right"] {
    margin-left: 5px;
  }

  .tooltip[x-placement^="right"] .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip[x-placement^="left"] {
    margin-right: 5px;
  }

  .tooltip[x-placement^="left"] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip.popover .popover-inner {
    background: #f9f9f9;
    color: black;
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(black, .1);
  }

  .tooltip.popover .popover-arrow {
    border-color: #f9f9f9;
  }

  .tooltip[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  .tooltip[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
</style>
