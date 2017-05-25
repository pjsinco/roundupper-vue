<template>
  <nav class="navbar navbar-inverse" id="nav">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">Roundupper</a>
      </div>
      
      <div class="navbar-center" style="width: 25%;">
        <slot name="select"></slot>
      </div>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ templateName }} <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="/jaoa">JAOA</a></li>
            <li><a href="/cbs">Certifying Board Services</a></li>
          </ul>
        </li>
      </ul>
      
    </div>
    
  </nav>
</template>

<script>

  export default {

    props: ['templateName'],


  }

</script>

<style>
</style>
