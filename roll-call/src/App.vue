<template>
  <body>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/everyone">Everyone</router-link>
    </div>
    <div>
      <router-view />
    </div>
    <footer>
      <div>
        Icons made by <a href="" title="Kiranshastry">Kiranshastry</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </footer>
  </body>
</template>

<style>

html, body {
  width: 100%;
  min-height: 100vh;
  background: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
}

#nav {
  padding: 30px;
  position: sticky;
  align-self: center;
  top:0;
  background: black;
  border-bottom: 1px solid #3D9DEA;
  z-index: 1000;
}

#nav a {
  font-weight: bold;
  color: darkcyan;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  position:sticky;
  bottom:0;
  background: black;
  border-top: 1px solid #3D9DEA;
  padding: 5px;
}
</style>
