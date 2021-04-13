new Vue({
  el: '#vue-app',
  data: {
    isValid: false,
    done: false,
    occupations: [
      {
        id: 1,
        label: 'Plumber'
      }, {
        id: 66,
        label: 'Truck Driver'
      }, {
        id: 42,
        label: 'Student'
      }, {
        id: 99,
        label: 'Other'
      },
    ],
    form: {
      firstName: '',
      lastName: '',
      dob: '',
      occupation: '',
      terms: false
    }
  },

  mounted() {},

  watch: {
    form: {
      deep: true,
      handler(oldVal, newVal) {
        console.log('Form change!')

        if (!this.form.firstName.length) {
          this.isValid = false;
          console.log('Invalid first name!');
          return;
        }

        if (!this.form.lastName.length) {
          this.isValid = false;
          console.log('Invalid last name!');
          return;
        }

        if (!this.form.dob.length) {
          this.isValid = false;
          console.log('Invalid dob !');
          return;
        }

        if (!this.form.occupation.length) {
          this.isValid = false;
          console.log('Invalid occupation!');

          return;
        }

        if (!this.form.terms) {
          this.isValid = false;
          console.log('Invalid terms!');

          return;
        }

        console.log('All good!');

        this.isValid = true;
      }
    },

    // 'form.dob': function (oldVal, newVal) {
    //   console.log('DOB change!')
    // }
  },

  computed: {
    capitalized() {
      return this.form.firstName.charAt(0).toLocaleUpperCase() +
          this.form.firstName.slice(1).toLowerCase() + ' ' +
          this.form.lastName.charAt(0).toLocaleUpperCase() +
          this.form.lastName.slice(1).toLowerCase() ;
    }
  },

  methods: {
    submit() {
      console.log(JSON.stringify(this.form));
      this.done = true;
    }
  }
})