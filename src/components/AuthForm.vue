<script setup>
window.YaAuthSuggest.init(
  {
    client_id: "bf8b132317d5430caa7778c0cacc1bf7",
    response_type: "token",
    redirect_uri: "http://localhost:5173/#/main/",
  },
  "http://localhost:5173/#/main/",
  {
    view: "button",
    parentId: "buttonContainerId",
    buttonSize: "m",
    buttonView: "main",
    buttonTheme: "light",
    buttonBorderRadius: "10",
    buttonIcon: "ya",
  }
)
  .then(({ handler }) => handler())
  .then((data) => console.log(data))
  .catch((error) => console.log("Обработка ошибки", error));
</script>

<template>
  <div class="login-container">
    <div class="form-container">
      <div class="button-yandex" id="buttonContainerId"></div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.button-yandex
    width: 100%
.login-container
  width: 346px
  margin: 200px auto
  padding: 24px
  background-color: white
  box-shadow: 0.5px 1px 5px 0.1px #b0b0b0
  border-radius: 15px

.form-container
  display: flex
  flex-direction: column
  align-items: center
p
    font-size: 14px
    margin: auto
    margin-bottom: 10px
    color: #85889E
</style>
