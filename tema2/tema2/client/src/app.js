function run() {
  new Vue({
    el: "#app",
    data: {
      users: [],
      usersService: null,
    },
    created: function () {
      this.usersService = users();
      //this.usersService.post({name:"TESST", city:"Cluj"}).then((response) => {this.users=response.data.data});
      this.usersService.get().then((response) => {
        this.users = response.data;
      });
    },
    deleteUser: async function () {
    },

    methods: {
      deleteUser: async function () {
        const name = $("#stergereUser").val();
        console.log("here", name);
        try {
          const users = await this.usersService.deleteUser(name);
          this.users = users.data;
        } catch (error) {
        }
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  run();
});
