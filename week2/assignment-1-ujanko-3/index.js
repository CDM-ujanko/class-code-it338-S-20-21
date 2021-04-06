
let vueInstance = new Vue({
  delimiters: ["{%","%}"],
  el: '#vue-app',
  data: {
    items: [
      {
        "_id": "606b97ed02d57d240ea2ad9c",
        "index": 0,
        "balance": "$1,822.87",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "green",
        "name": "Danielle Padilla",
        "gender": "female",
        "company": "AQUOAVO",
        "email": "daniellepadilla@aquoavo.com",
        "phone": "+1 (847) 598-2775",
        "address": "664 Dean Street, Smeltertown, Nebraska, 2394",
        "about": "Sit ut tempor irure id pariatur aliqua elit incididunt deserunt amet qui eu. Duis minim id nulla amet aliquip duis qui. Ipsum qui cupidatat et nisi elit id ea laboris consectetur voluptate anim ipsum magna laboris. Esse cillum excepteur reprehenderit culpa nisi quis do officia. Esse esse mollit sunt ut. Nisi mollit exercitation nisi dolor qui magna et cupidatat elit quis incididunt.\r\n",
        "registered": "2014-09-11T01:09:04 +05:00",
        "latitude": -89.987886,
        "longitude": 146.271842
      },
      {
        "_id": "606b97edc21b0c21ca92a84d",
        "index": 1,
        "balance": "$1,825.08",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "blue",
        "name": "Sanchez Horton",
        "gender": "male",
        "company": "VIAGRAND",
        "email": "sanchezhorton@viagrand.com",
        "phone": "+1 (961) 521-3441",
        "address": "113 Hanson Place, Falconaire, Illinois, 7356",
        "about": "Magna officia mollit qui laboris voluptate voluptate sint. Consectetur do aliqua minim tempor minim culpa adipisicing in fugiat non nostrud duis. Cupidatat duis voluptate minim quis in proident. Laborum eiusmod dolore tempor duis pariatur laboris tempor proident dolore cupidatat aliquip nostrud. Voluptate amet aliquip sit voluptate mollit sit. Laboris voluptate minim laborum ad laborum dolore.\r\n",
        "registered": "2016-03-20T10:00:21 +05:00",
        "latitude": 54.153087,
        "longitude": 0.544424
      },
      {
        "_id": "606b97ede1996741a901055f",
        "index": 2,
        "balance": "$2,355.89",
        "picture": "http://placehold.it/32x32",
        "age": 38,
        "eyeColor": "blue",
        "name": "Joann Fitzgerald",
        "gender": "female",
        "company": "POLARAX",
        "email": "joannfitzgerald@polarax.com",
        "phone": "+1 (818) 434-3423",
        "address": "270 Ash Street, Hobucken, Washington, 5596",
        "about": "Anim id irure sunt labore officia aliquip excepteur proident consectetur ad duis non. Incididunt deserunt reprehenderit laborum exercitation. Exercitation elit laborum anim mollit laboris id nulla qui fugiat eu elit in magna. Commodo id pariatur ea id anim id exercitation officia consequat exercitation. Eu Lorem deserunt enim dolore et cupidatat tempor sint. Minim consequat exercitation amet labore consequat sunt ut sit ad sit id proident eiusmod.\r\n",
        "registered": "2018-05-03T12:45:38 +05:00",
        "latitude": 71.429161,
        "longitude": -85.130515
      },
      {
        "_id": "606b97ed1a68eba0bfcd2d9f",
        "index": 3,
        "balance": "$2,295.20",
        "picture": "http://placehold.it/32x32",
        "age": 40,
        "eyeColor": "brown",
        "name": "Fuentes Hess",
        "gender": "male",
        "company": "KEEG",
        "email": "fuenteshess@keeg.com",
        "phone": "+1 (888) 573-3196",
        "address": "590 Guernsey Street, Spokane, North Dakota, 903",
        "about": "Cillum consectetur veniam esse tempor minim nulla eu in incididunt consectetur nostrud tempor. Esse eu velit velit enim in velit nulla pariatur esse quis reprehenderit minim do culpa. Est labore eiusmod exercitation minim veniam laborum laboris.\r\n",
        "registered": "2020-06-23T03:31:55 +05:00",
        "latitude": -39.585432,
        "longitude": 47.38502
      },
      {
        "_id": "606b97edda86cabc1a170084",
        "index": 4,
        "balance": "$2,377.60",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "eyeColor": "green",
        "name": "Puckett Logan",
        "gender": "male",
        "company": "SYBIXTEX",
        "email": "puckettlogan@sybixtex.com",
        "phone": "+1 (881) 600-2618",
        "address": "983 Clove Road, Beaverdale, Mississippi, 6702",
        "about": "Minim duis commodo est anim enim amet occaecat. Aute non elit labore anim ipsum id cupidatat nostrud non sint. Magna aliqua nostrud Lorem ex velit duis cillum dolor et qui occaecat enim cupidatat magna. Veniam consectetur dolor aute esse tempor nostrud qui est culpa irure laborum culpa. Qui minim consequat deserunt commodo laborum velit Lorem occaecat quis veniam amet cillum voluptate. Elit Lorem irure Lorem nisi pariatur tempor nulla ea reprehenderit. Id eu adipisicing officia cillum eu voluptate.\r\n",
        "registered": "2014-06-08T12:31:38 +05:00",
        "latitude": -85.257428,
        "longitude": 53.699699
      },
      {
        "_id": "606b97ed63d0f2e1a5007e01",
        "index": 5,
        "balance": "$1,703.67",
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "eyeColor": "brown",
        "name": "Palmer Livingston",
        "gender": "male",
        "company": "ZANILLA",
        "email": "palmerlivingston@zanilla.com",
        "phone": "+1 (802) 434-2645",
        "address": "499 Broome Street, Allendale, Northern Mariana Islands, 8051",
        "about": "Cillum proident sunt aute irure dolor incididunt aute velit. Quis nostrud enim ex commodo laboris esse. Velit culpa dolor id pariatur et in magna esse cupidatat. Adipisicing amet duis dolor laboris Lorem minim sunt consequat aute laborum officia excepteur. Ut elit nisi minim Lorem in ex irure amet laborum consectetur veniam. Id magna pariatur dolore ex nisi consectetur quis cillum cillum non amet laborum ut cillum.\r\n",
        "registered": "2021-01-31T09:27:58 +06:00",
        "latitude": -82.959719,
        "longitude": 127.899406
      }
    ]
  },
  methods: {
    methodB() {
      this.reverse(11);
      vueInstance.reverse(i);
    },

    reverse(item) {
      console.log('clikc!', this.items[i]);

      // item.name = item.name.split('').reverse().join('');
      item.name = this.items[i].name.split('').reverse().join('');
    }
  }
});
