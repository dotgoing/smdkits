<template>
  <div class="home">
    <h1 class="slogon">Your Laboratory <span class="logo-color">Toolbox</span></h1>

    <div class="x-layout">

      <img src="https://img.ixintu.com/upload/jpg/20210601/fdca5e6341ee7b09edf735b28812669a_52344_800_504.jpg" />
      <div class="proposition">
        <h2 class="logo-color">Product Showcase</h2>
        <p>you really need this Imagine you are in finance and you need a model that is smarter about finance than it
          is. You try an open source or private model, but discover that although the models is generally good, it needs
          to become more of an expert in finance.
        </p>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {
  },
}
</script>

<style>
.home {
  text-align: center;
  margin-top: 2rem;
  margin-right: 3rem;
  margin-left: 3rem;
  margin-bottom: 2rem;
}

.slogon {
  font-size: 2rem;
  margin: 3rem;
}

.x-layout {
  display: flex;
  direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

.proposition {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 2rem;
}
</style>
