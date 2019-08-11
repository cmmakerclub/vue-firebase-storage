<template>
  <div>
    <h1>Gallery Storage</h1>
    <input type="file" @change="fileChange"><br><br>
    <button type="button" @click="upload">Upload</button>&ensp;<span>{{ percentage }}%</span>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      firebase: this.$root.$data.firebase,
      file: null,
      ref: 'photos/',
      percentage: 0
    }
  },
  methods: {
    upload() {
      let file = this.file
      console.log(file)
      let storageRef = this.firebase.storage().ref(this.ref + file.name)
      let task = storageRef.put(file)
      task.on('state_changed',
        function progress(snapshot) {
          let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          window.then.percentage = percentage.toFixed(0)
        },
        function error(err) {
          console.log(err)
        },
        function complete() {
          console.log('upload completed')
        }
      )
    },
    fileChange(e) {
      this.file = e.target.files[0]
    }
  },
  mounted() {
    window.then = this
  }
};

</script>
