let vueInstance = new Vue({
  el: '#vue-app',
  data: {
    form: {
      firstName: 'Bob',
      lastName: 'Belcher',
      profession: 'student',
      terms: false,
      date: '2008-04-11'
    },
    isValid: false,
    professions: [
      {
        label: 'Student',
        value: 'student'
      },
      {
        label: 'Professor',
        value: 'professor'
      },
      {
        label: 'Other',
        value: 'other'
      }
    ]
  },

  computed: {
    fullName() {
      return this.form.firstName + ' ' + this.form.lastName;
    },

    dateObject() {
      return new Date(this.form.date);
    }
  },

  watch: {
    // 'form.firstName': function (newValue, oldValue) {
    //   console.log('oldValue:', oldValue);
    //   console.log('newValue:', newValue);
    // }

    form: {
      deep: true,
      handler: function (data) {
        if (!data.firstName.length) {
          this.isValid = false;
          return;
        }

        if (!data.lastName.length) {
          this.isValid = false;
          return;
        }

        if (!data.terms) {
          this.isValid = false;
          return;
        }

        this.isValid = true;
      }
    }
  }
});